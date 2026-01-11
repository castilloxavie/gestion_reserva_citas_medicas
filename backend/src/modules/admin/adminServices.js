import { Users } from "../../models/users.js";
import { Doctors } from "../../models/doctors.js";
import { sequelizeDB } from "../../config/databases.js";
import { Receptionists } from "../../models/receptionists.js";
import bcrypt from "bcryptjs";


class AdminServices {

    async createDoctor(dataDoctor) {
        const transaction = await sequelizeDB.transaction()

        try {
            //Crear usario de rol Doctor (aca se hace la transaccion de dato de User)
            const user = await Users.create({
                first_name: dataDoctor.first_name,
                last_name: dataDoctor.last_name,
                email: dataDoctor.email,
                password: dataDoctor.password,
                roles: "doctor"
            }, {transaction})

            //Crear registro en Doctor vinculado a (user_id)
            const doctor = await Doctors.create({
                user_id: user.id,
                specialization_id: dataDoctor.specialization_id,
                licence_number: dataDoctor.licence_number,
                document_number: dataDoctor.document_number,
                phone: dataDoctor.phone,
                bio: dataDoctor.bio
            }, {transaction})

            await transaction.commit()
            console.log("El Usuario Docto fue creado correctamente!!");
            return {user, doctor}
            

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Crear el Usario Dactor: ${error.message}`);
            
        }
    }

    //Obtener el listado de todos los Doctores
    async getAllDoctors() {
        try {
            const doctors = await Doctors.findAll({
                include: [{model: Users, as : "user"}]
            })
            console.log("se obtuvieron los Doctores correctamente!!");
            return doctors
        } catch (error) {
            throw new Error(`Error al obtener los Doctores: ${error.message}`);
        }
    }

    //Obtener por id el doctor
    async getDoctorById(id) {
        try {
            const doctor = await Doctors.findByPk(id, {
                include: [{model: Users, as: "user"}]
            })

            if(!doctor) throw new Error(`No se encontro el Doctor con el id: ${id}`)
            console.log("Usario encontado");
            return doctor

        } catch (error) {
            throw new Error(`Error al obtener el Doctor: ${error.message}`);
        }
    }

    //Actualizar Doctor
    async updateDoctor(id, dataDoctor) {
         const transaction = await sequelizeDB.transaction()

        try {
            const doctor = await Doctors.findByPk(id, {transaction})
            if(!doctor) throw new Error(`No se encontro el Doctor con el id: ${id}`)

            // actualizar Users si hay datos personales
            if(dataDoctor.first_name || dataDoctor.last_name || dataDoctor.email || dataDoctor.password){
                const updateData = {
                    first_name: dataDoctor.first_name,
                    last_name: dataDoctor.last_name,
                    email: dataDoctor.email
                };
                if(dataDoctor.password) {
                    updateData.password = bcrypt.hashSync(dataDoctor.password, 10);
                }
                await Users.update(updateData, {where: {id: doctor.user_id},  transaction})
            }

            await doctor.update({
                specialization_id: dataDoctor.specialization_id,
                licence_number: dataDoctor.licence_number,
                document_number: dataDoctor.document_number,
                phone: dataDoctor.phone,
                bio: dataDoctor.bio
            }, {transaction})

            await transaction.commit()
            console.log("El Doctor fue actualizado correctamente!!");
            return doctor

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Actualizar el Doctor: ${error.message}`);
        }
    }

    //Eliminar Doctor(cambiar de estado)
    async deleteDoctor(id) {
        const transaction = await sequelizeDB.transaction()

        try {
            const doctor = await Doctors.findByPk(id, {transaction})
            if(!doctor) throw new Error(`No se encontro el Doctor con el id: ${id}`)

            await Users.update({status: "inactive"}, {where: {id: doctor.user_id}, transaction})

            await transaction.commit()
            console.log("El Doctor fue eliminado correctamente!!");
            return {message: "El Doctor fue eliminado correctamente"}

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Eliminar el Doctor: ${error.message}`);
        }
    }

    //!Crear Recepcionista
    async createReceptionist(dataReceptionist) {
        const transaction = await sequelizeDB.transaction()

        try {
            //Crear Usario Recepcionista
            const user = await Users.create({
                first_name: dataReceptionist.first_name,
                last_name: dataReceptionist.last_name,
                email: dataReceptionist.email,
                password: dataReceptionist.password,
                roles: "receptionist"
            }, {transaction})

            //Crear registro de recepcionista vinculado a (user_id)
            const receptionist = await Receptionists.create({
                user_id: user.id,
                document_number: dataReceptionist.document_number,
                phone: dataReceptionist.phone,
                address: dataReceptionist.address,
                shift: dataReceptionist.shift
            }, {transaction})

            await transaction.commit()
            console.log("El Usuario Recepcionista fue creado correctamente!!");
            return {user, receptionist}

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Crear el Usuario Recepcionista: ${error.message}`);
        }

    }

    //Obtener el listado de todos los recepcionista
    async getAllReceptionists() {
        try {
            const receptionists = await Receptionists.findAll({
                include: [{model: Users, as: "user"}]
            })
            console.log("se obtuvieron los recepcionistas correctamente!!");
            return receptionists

        } catch (error) {
            throw new Error(`Error al obtener los recepcionistas: ${error.message}`);
        }
    }
        
    //Obtener por id el recepcionista
    async getReceptionistById(id) {
        try {
            const receptionist = await Receptionists.findByPk(id, {
                include: [{model: Users, as: "user"}]
            })

            if(!receptionist) throw new Error(`No se encontro el recepcionista con el id: ${id}`)
            console.log("Usario encontado");
            return receptionist

        } catch (error) {
            throw new Error(`Error al obtener el recepcionista: ${error.message}`);
        }
    }

    //Actualizar recepcionista
    async updateReceptionist(id, dataReceptionist) {
        const transaction = await sequelizeDB.transaction()

        try {
            const receptionist = await Receptionists.findByPk(id, {transaction})
            if(!receptionist) throw new Error(`No se encontro el recepcionista con el id: ${id}`)

            //actualizar Users si hay datos personales
            if(dataReceptionist.first_name ||dataReceptionist.last_name || dataReceptionist.email || dataReceptionist.password) {
                const updateData = {
                    first_name: dataReceptionist.first_name,
                    last_name: dataReceptionist.last_name,
                    email: dataReceptionist.email
                };
                if(dataReceptionist.password) {
                    updateData.password = bcrypt.hashSync(dataReceptionist.password, 10);
                }
                await Users.update(updateData, {where: {id: receptionist.user_id}, transaction})
            }

            await receptionist.update({
                document_number: dataReceptionist.document_number,
                phone: dataReceptionist.phone,
                address: dataReceptionist.address,
                shift: dataReceptionist.shift
            }, {transaction})

            await transaction.commit()
            console.log("El recepcionista fue actualizado correctamente!!");
            return receptionist

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Actualizar el recepcionista: ${error.message}`)
        }

    }

    //Eliminar Recepcionista (cambiar de estado)
    async deleteReceptionist(id) {
        const transaction = await sequelizeDB.transaction()

        try {
            const receptionist = await Receptionists.findByPk(id, {transaction})
            if(!receptionist) throw new Error(`No se encontro el recepcionista con el id: ${id}`)

            await Users.update({status: "inactive"}, {where: {id: receptionist.user_id}, transaction})
            await receptionist.update({is_active: 0}, {transaction})

            await transaction.commit()
            console.log("El recepcionista fue eliminado correctamente!!");
            return {message: "El recepcionista fue eliminado correctamente"}

        } catch (error) {
            await transaction.rollback()
            throw new Error(`Error al Eliminar el recepcionista: ${error.message}`);
        }
    }
}

export default new AdminServices();