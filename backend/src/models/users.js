import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";
import bcrypt from "bcryptjs";

export const Users = sequelizeDB.define(
    "users",
    {
        first_name: {type:DataTypes.STRING, allowNull: false, validate: {notEmpty: true, len: [2, 50]}},
        last_name: {type:DataTypes.STRING, allowNull: false, validate: {notEmpty: true, len: [2, 50]}},
        email: {type:DataTypes.STRING, allowNull: false, unique: true, validate: {isEmail: true, notEmpty: true}},
        password: {type:DataTypes.STRING, allowNull: false, validate: {notEmpty: true, len: [8, 50]}},
        roles: {type:DataTypes.ENUM("admin", "receptionist", "doctor", "patient"), allowNull: false},
    },
    {
        timestamps: true,
        tableName: "users",
        defaultScope: {attributes: {exclude: ["password"]}},
        scopes:{withPassword: {attributes:{}}},
        hooks : {
            beforeCreate(user) {
                if (user.password) {
                    user.password = bcrypt.hashSync(user.password, 10);
                }
            },
            beforeValidate(user) {
                if (user.email && typeof user.email === "string") user.email = user.email.toLowerCase().trim();
                if (user.first_name && typeof user.first_name === "string") user.first_name = user.first_name.trim();
                if (user.last_name && typeof user.last_name === "string") user.last_name = user.last_name.trim();
            }
        }
    }
)

Users.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}