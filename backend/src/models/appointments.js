import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Appointments = sequelizeDB.define(
    "appointments",
    {
        patient_id: {type: DataTypes.INTEGER, allowNull: false},
        doctor_id: {type: DataTypes.INTEGER, allowNull: false},
        room_id: {type: DataTypes.INTEGER, allowNull: false},
        appointment_date: {type: DataTypes.DATE, allowNull: false},
        start_time: {type: DataTypes.TIME, allowNull: false},
        end_time: {type: DataTypes.TIME, allowNull: false},
        status:{type: DataTypes.ENUM("pending", "confirmed", "in_service", "completed", "cancelled", "no_show"), defaultValue: "pending", allowNull: false},
        reason: {type: DataTypes.TEXT, allowNull: true},
        notes: {type: DataTypes.TEXT, allowNull: false},
        notification_sent: {type: DataTypes.INTEGER, defaultValue: 0}, // 1 = enviado, 0 = no enviado
    },
    {
        timestamps: true,
        tableName: "appointments",
        indexes:[
            {
                fields: ["appointment_date"]
            }
        ]
    }        
)