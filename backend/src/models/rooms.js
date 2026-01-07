import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Rooms =sequelizeDB.define(
    "rooms",
    {
        name: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, len: [1,100]}},
        floor: {type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, len: [1,50]}},
        is_active: {type: DataTypes.INTEGER, defaultValue: 1} // 1 = activo, 0 = inactivo
    },
    {
        timestamps: true,
        tableName: "rooms"
    }
)