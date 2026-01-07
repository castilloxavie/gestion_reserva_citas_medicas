import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Rooms =sequelizeDB.define(
    "rooms",
    {
        name: {type: DataTypes.STRING, allowNull: false},
        floor: {type: DataTypes.STRING, allowNull: false},
        is_active: {type: DataTypes.INTEGER, defaultValue: 1} // 1 = activo, 0 = inactivo
    },
    {
        timestamps: true,
        tableName: "rooms"
    }
)