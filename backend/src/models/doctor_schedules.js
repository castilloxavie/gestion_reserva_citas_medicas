import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Doctor_schedules = sequelizeDB.define(
    "doctor_schedules",
    {
        doctor_id: {type: DataTypes.INTEGER, allowNull: false},
        room_id: {type: DataTypes.INTEGER, allowNull: false},
        day_of_week: {type: DataTypes.ENUM("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"), allowNull: false},
        start_time: {type: DataTypes.TIME, allowNull: false},
        end_time: {type: DataTypes.TIME, allowNull: false}
    },
    {
        timestamps: true,
        tableName: "doctor_schedules",
        validate: {
            startBeforeEnd() {
                if(this.start_time && this.end_time && this.start_time >= this.end_time) throw new Error("La hora de inicio debe ser antes de la hora de fin")
            }
                
        }
    }

)