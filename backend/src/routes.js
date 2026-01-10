import express from "express"
import authRutes from "./modules/auth/authRutes.js"


const router = express.Router()

//registro de rutas
router.use("/auth", authRutes)

export default router