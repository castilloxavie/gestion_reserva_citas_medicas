import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Doctors = sequelizeDB.define(
    "doctors",
    {
        user_id: {type: DataTypes.INTEGER, allowNull: false},
        specialization_id: {type: DataTypes.INTEGER, allowNull: false},
        licence_number: {type: DataTypes.STRING, allowNull: false, unique: true},
        document_number: {type: DataTypes.STRING, allowNull: false, unique: true},
        phone: {type: DataTypes.STRING, allowNull: false, unique: true},
        bio: {type: DataTypes.TEXT, allowNull: true}
    },
    {
        timestamps: true,
        tableName: "doctors"
    }

)