import adminServices from "./adminServices.js";

class AdminController {
    async getAllDoctors(req, res){
        try {
            const doctors =  await adminServices.getAllDoctors()
            console.log("Se obtuvieron todos las Doctores");
            res.json(doctors)

        } catch (error) {
            console.error(`Error al obtener los Doctores: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async getDoctorById(req, res) {
        try {
            const doctor = await adminServices.getDoctorById(req.params.id)
            console.log("Se obtuvo el doctor correspondiente");
            res.json(doctor)

        } catch (error) {
            console.error(`Error al obtener el Doctor: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async createDoctor(req, res) {
        try {
            const doctor = await adminServices.createDoctor(req.body)
            console.log("Se creo el Doctor correctamente");
            res.json(doctor)

        } catch (error) {
            console.error(`Error al crear el Doctor: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async updateDoctor(req, res) {
        try {
            const doctor = await adminServices.updateDoctor(req.params.id, req.body)
            console.log("Se actualizo el Doctor");
            res.json(doctor)

        } catch (error) {
            console.error(`Error al actualizar el Doctor: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async deleteDoctor(req, res) {
        try {
            const doctor = await adminServices.deleteDoctor(req.params.id)
            console.log("Se elimino el Doctor");
            res.json(doctor)

        } catch (error) {
            console.error(`Error al eliminar el Doctor: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    //! Recepcionist
    async getAllReceptionists(req, res) {
        try {
            const receptionists = await adminServices.getAllReceptionists()
            console.log("Se obtuvieron todos los recepcionistas");
            res.json(receptionists)

        } catch (error) {
            console.error(`Error al obtener los recepcionistas: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async getReceptionistById(req, res) {
        try {
            const receptionist = await adminServices.getReceptionistById(req.params.id)
            console.log("Se obtuvo el recepcionista correspondiente");
            res.json(receptionist)

        } catch (error) {
            console.error(`Error al obtener el recepcionista: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async createReceptionist(req, res){
        try {
            const receptionist = await adminServices.createReceptionist(req.body)
            console.log("Se creo el recepcionista correctamente");
            res.json(receptionist)

        } catch (error) {
            console.error(`Error al crear el recepcionista: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }

    async updateReceptionist(req, res){
        try {
            const receptionist = await adminServices.updateReceptionist(req.params.id, req.body)
            console.log("Se actualizo el recepcionista");
            res.json(receptionist)

        } catch (error) {
            console.error(`Error al actualizar el recepcionista: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }
    async deleteReceptionist(req, res){
        try {
            const receptionist = await adminServices.deleteReceptionist(req.params.id)
            console.log("Se elimino el recepcionista");
            res.json(receptionist)

        } catch (error) {
            console.error(`Error al eliminar el recepcionista: ${error.message}`);
            res.status(500).json({error: error.message})
        }
    }
}

export default new AdminController()