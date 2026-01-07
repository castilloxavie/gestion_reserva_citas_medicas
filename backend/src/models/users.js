import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Users = sequelizeDB.define(
    "users",
    {
        first_name: {type:DataTypes.STRING, allowNull: false},
        last_name: {type:DataTypes.STRING, allowNull: false},
        email: {type:DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true}},
        password: {type:DataTypes.STRING, allowNull: false},
        roles: {type:DataTypes.ENUM("admin", "receptionist", "doctor", "patient"), allowNull: false},
    },
    {
        timestamps: true,
        tableName: "users"
    }
)