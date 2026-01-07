import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Doctors = sequelizeDB.define(
    "doctors",
    {
        user_id: {type: DataTypes.INTEGER, allowNull: false},
        specialization_id: {type: DataTypes.INTEGER, allowNull: false},
        licence_number: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {notEmpty: true, len: [8, 50], is: /^[A-Za-z0-9\-]+$/}},
        document_number: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {notEmpty: true, len: [8, 50], is: /^[A-Za-z0-9\-]+$/}},
        phone: {type: DataTypes.STRING, allowNull: false, unique: true, validate: { notEmpty: true, is: /^[0-9+\-() ]{10,20}$/ }},
        bio: {type: DataTypes.TEXT, allowNull: true, validate: { len: [0, 2000]}}
    },
    {
        timestamps: true,
        tableName: "doctors"
    }

)