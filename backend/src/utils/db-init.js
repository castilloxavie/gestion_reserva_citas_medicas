import { sequelizeDB } from "../config/databases.js"
import { relationshipModels } from "../models/associations_db.js"
import { Appointments } from "../models/appointments.js"
import { Doctor_schedules } from "../models/doctor_schedules.js"
import { Doctors } from "../models/doctors.js"
import { Patients } from "../models/patients.js"
import { Rooms } from "../models/rooms.js"
import { Specializations } from "../models/specializations.js"
import { Users } from "../models/users.js"
import { Receptionists } from "../models/receptionists.js"

export const initializeModelsDb = async () => {
    try {

        await sequelizeDB.authenticate()

        relationshipModels()

        await sequelizeDB.sync({alter: false})

        console.log("Se realizo el proceso de manera correcta (db)");
        
    
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
initializeModelsDb()