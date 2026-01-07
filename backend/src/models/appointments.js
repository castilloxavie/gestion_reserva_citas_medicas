import { DataTypes } from "sequelize";
import { sequelizeDB } from "../config/databases.js";

export const Appointments = sequelizeDB.define(
  "appointments",
  {
    patient_id: { type: DataTypes.INTEGER, allowNull: false },
    doctor_id: { type: DataTypes.INTEGER, allowNull: false },
    room_id: { type: DataTypes.INTEGER, allowNull: false },
    appointment_date: { type: DataTypes.DATE, allowNull: false, validate: { isDate: true } },
    start_time: { type: DataTypes.TIME, allowNull: false, validate: { notEmpty: true } },
    end_time: { type: DataTypes.TIME, allowNull: false, validate: { notEmpty: true } },
    status: { type: DataTypes.ENUM("pending","confirmed","in_service","completed","cancelled","no_show"), defaultValue: "pending", allowNull: false },
    reason: { type: DataTypes.TEXT, allowNull: true, validate: { len: [0, 1000] } },
    notes: { type: DataTypes.TEXT, allowNull: false, validate: { len: [0, 2000] } },
    notification_sent: { type: DataTypes.BOOLEAN, defaultValue: false }
  },
  {
    timestamps: true,
    tableName: "appointments",
    indexes: [
      { fields: ["appointment_date"] },
      { fields: ["doctor_id", "appointment_date", "start_time", "end_time"] },
      { fields: ["room_id", "appointment_date", "start_time", "end_time"] }
    ],
    validate: {
      startBeforeEnd() {
        if (this.start_time && this.end_time && this.start_time >= this.end_time) {
          throw new Error("La hora de inicio debe ser anterior a la hora de finalización");
        }
      },
      appointmentNotPast() {
        if (this.appointment_date) {
          const today = new Date(); today.setHours(0,0,0,0);
          const appt = new Date(this.appointment_date); appt.setHours(0,0,0,0);
          if (appt < today) throw new Error("La fecha de cita no puede ser pasada");
        }
      }
    }
  }
);