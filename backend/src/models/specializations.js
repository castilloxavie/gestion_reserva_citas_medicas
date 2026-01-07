import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Specializations = sequelizeDB.define(
    "specializations",
    {
        name: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, len: [2,100]}},
        description: {type: DataTypes.TEXT, allowNull: true, validate: { len: [0,2000]}}
    },
    {
        timestamps: true,
        tableName: "specializations"
    }
)