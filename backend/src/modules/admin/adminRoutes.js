import express from "express"
import authMiddleware from "../auth/authMiddleware.js"
import { roleMiddleware } from "../../middlewares/roleMiddlewares.js"
import adminControllers from "./adminControllers.js"

const router = express.Router()
router.use(authMiddleware)

//Rutas de admin --> Doctor
router.get("/doctors", roleMiddleware(["admin"]), adminControllers.getAllDoctors)
router.get("/doctors/:id", roleMiddleware(["admin"]), adminControllers.getDoctorById)
router.post("/doctors", roleMiddleware(["admin"]), adminControllers.createDoctor)
router.put("/doctors/:id", roleMiddleware(["admin"]), adminControllers.updateDoctor)
router.delete("/doctors/:id", roleMiddleware(["admin"]), adminControllers.deleteDoctor)

//Rutas de admin --> Recepcionista
router.get("/receptionists", roleMiddleware(["admin"]), adminControllers.getAllReceptionists)
router.get("/receptionists/:id", roleMiddleware(["admin"]), adminControllers.getReceptionistById)
router.post("/receptionists", roleMiddleware(["admin"]), adminControllers.createReceptionist)
router.put("/receptionists/:id", roleMiddleware(["admin"]), adminControllers.updateReceptionist)
router.delete("/receptionists/:id", roleMiddleware(["admin"]), adminControllers.deleteReceptionist)

export default router

