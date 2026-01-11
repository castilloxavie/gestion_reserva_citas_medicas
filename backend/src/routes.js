import express from "express"
import authRutes from "./modules/auth/authRutes.js"
import adminRoutes from "./modules/admin/adminRoutes.js"


const router = express.Router()

//registro de rutas
router.use("/auth", authRutes)
router.use("/admin", adminRoutes)

export default router