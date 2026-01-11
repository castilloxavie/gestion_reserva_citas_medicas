import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Receptionists = sequelizeDB.define(
  "receptionists",
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },

    document_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true, len: [8, 50], is: /^[A-Za-z0-9\-]+$/ }
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { notEmpty: true, is: /^[0-9+\-() ]{10,20}$/ }
    },

    address: { type: DataTypes.STRING, allowNull: true, validate: { len: [0, 200] } },

    shift: { type: DataTypes.ENUM("morning", "afternoon", "night"), allowNull: false, defaultValue: "morning" },

    is_active: { type: DataTypes.INTEGER, defaultValue: 1 }
  },
  {
    timestamps: true,
    tableName: "receptionists",
    indexes: [{ fields: ["document_number"] }],
    hooks: {
      beforeValidate(rec) {
        if (rec.document_number && typeof rec.document_number === "string") rec.document_number = rec.document_number.trim();
        if (rec.phone && typeof rec.phone === "string") rec.phone = rec.phone.trim();
        if (rec.address && typeof rec.address === "string") rec.address = rec.address.trim();
      }
    }
  }
);