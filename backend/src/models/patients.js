import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Patients = sequelizeDB.define(
    "patients",
    {
        user_id: {type: DataTypes.INTEGER, allowNull: false},
        document_number: {type: DataTypes.STRING, allowNull: false, unique: true},
        birth_date: {type: DataTypes.DATE, allowNull: false},
        phone: {type: DataTypes.STRING, allowNull: false, unique: true},
        address: {type: DataTypes.STRING, allowNull: false},
        medical_history_summary: {type: DataTypes.TEXT, allowNull: true}
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
    