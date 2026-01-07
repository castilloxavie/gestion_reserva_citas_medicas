import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Patients = sequelizeDB.define(
    "patients",
    {
        user_id: {type: DataTypes.INTEGER, allowNull: false},
        document_number: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {notEmpty: true, len: [8, 50], is: /^[A-Za-z0-9\-]+$/}},

        birth_date: {type: DataTypes.DATE, allowNull: false, validate: {isDate: true,
            noInFuture(value) {
                const d = new Date(value);
                const today = new Date(); today.setHours(0, 0, 0, 0);
                if (d > today) throw new Error("La fecha de nacimiento no puede ser en el futuro");
            }
        }},

        phone: {type: DataTypes.STRING, allowNull: false, unique: true, validate: {notEmpty: true, is: /^[0-9+\-() ]{10,20}$/}},
        address: {type: DataTypes.STRING, allowNull: false, validate: {notEmpty: true, len: [5, 200]}},
        medical_history_summary: {type: DataTypes.TEXT, allowNull: false, validate: {notEmpty: true, len: [5, 5000]}}
    },
    {
        timestamps: true,
        tableName: "patients",
        indexes:[
            {
                fields: ["document_number"]
            }
        ]
    }
)
    