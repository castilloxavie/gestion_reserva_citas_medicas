import { Appointments } from "./appointments.js"
import { Doctors } from "./doctors.js"
import { Patients } from "./patients.js"
import { Rooms } from "./rooms.js"
import { Specializations } from "./specializations.js"
import { Users } from "./users.js"
import { Doctor_schedules } from "./doctor_schedules.js"

export const relationshipModels = () => {

    //Users -> Patents (1:many)
    Users.hasMany(Patients, {foreignKey: "user_id"})
    Patients.belongsTo(Users, {foreignKey: "user_id"})

    //Users -> Doctors (1:many)
    Users.hasMany(Doctors, {foreignKey: "user_id"})
    Doctors.belongsTo(Users, {foreignKey: "user_id"})

    //specializations -> Doctors (1:many)
    Specializations.hasMany(Doctors, {foreignKey: "specialization_id"})
    Doctors.belongsTo(Specializations, {foreignKey: "specialization_id"})

    //Doctors -> Doctor_schedules (1:many)
    Doctors.hasMany(Doctor_schedules, {foreignKey: "doctor_id"})
    Doctor_schedules.belongsTo(Doctors, {foreignKey: "doctor_id"})

    //Rooms -> Doctor_schedules (1:many)
    Rooms.hasMany(Doctor_schedules, {foreignKey: "room_id"})
    Doctor_schedules.belongsTo(Rooms, {foreignKey: "room_id"})

    //Patients -> Appointments (1:many)
    Patients.hasMany(Appointments, {foreignKey: "patient_id"})
    Appointments.belongsTo(Patients, {foreignKey: "patient_id"})

    //Doctors -> Appointments (1:many)
    Doctors.hasMany(Appointments, {foreignKey: "doctor_id"})
    Appointments.belongsTo(Doctors, {foreignKey: "doctor_id"})

    //Rooms -> Appointments (1:many)
    Rooms.hasMany(Appointments, {foreignKey: "room_id"})
    Appointments.belongsTo(Rooms, {foreignKey: "room_id"})
}

