import { Appointments } from "./appointments.js"
import { Doctors } from "./doctors.js"
import { Patients } from "./patients.js"
import { Rooms } from "./rooms.js"
import { Specializations } from "./specializations.js"
import { Users } from "./users.js"
import { Doctor_schedules } from "./doctor_schedules.js"
import { Receptionists } from "./receptionists.js"


export const relationshipModels = () => {

    //Users -> Patents (1:many)
    Users.hasMany(Patients, {foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})
    Patients.belongsTo(Users, {foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})

    //Users -> Doctors (1:many)
    Users.hasMany(Doctors, {foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})
    Doctors.belongsTo(Users, {foreignKey: "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})

    //User -> Receptionists (1:many)
    Users.hasMany(Receptionists, {foreignKey : "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})
    Receptionists.belongsTo(Users, {foreignKey : "user_id", onDelete: "CASCADE", onUpdate: "CASCADE"})

    //specializations -> Doctors (1:many)
    Specializations.hasMany(Doctors, {foreignKey: "specialization_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})
    Doctors.belongsTo(Specializations, {foreignKey: "specialization_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})

    //Doctors -> Doctor_schedules (1:many)
    Doctors.hasMany(Doctor_schedules, {foreignKey: "doctor_id", onDelete: "CASCADE", onUpdate: "CASCADE"})
    Doctor_schedules.belongsTo(Doctors, {foreignKey: "doctor_id", onDelete: "CASCADE", onUpdate: "CASCADE"})

    //Rooms -> Doctor_schedules (1:many)
    Rooms.hasMany(Doctor_schedules, {foreignKey: "room_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})
    Doctor_schedules.belongsTo(Rooms, {foreignKey: "room_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})

    //Patients -> Appointments (1:many)
    Patients.hasMany(Appointments, {foreignKey: "patient_id", onDelete: "CASCADE", onUpdate: "CASCADE"})
    Appointments.belongsTo(Patients, {foreignKey: "patient_id", onDelete: "CASCADE", onUpdate: "CASCADE"})

    //Doctors -> Appointments (1:many)
    Doctors.hasMany(Appointments, {foreignKey: "doctor_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})
    Appointments.belongsTo(Doctors, {foreignKey: "doctor_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})

    //Rooms -> Appointments (1:many)
    Rooms.hasMany(Appointments, {foreignKey: "room_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})
    Appointments.belongsTo(Rooms, {foreignKey: "room_id", onDelete: "RESTRICT", onUpdate: "CASCADE"})
}

