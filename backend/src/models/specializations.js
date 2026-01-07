import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Specializations = sequelizeDB.define(
    "specializations",
    {
        name: {type: DataTypes.STRING, allowNull: false},
        description: {type: DataTypes.TEXT, allowNull: true}
    },
    {
        timestamps: true,
        tableName: "specializations"
    }
)