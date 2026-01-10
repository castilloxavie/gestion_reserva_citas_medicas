import express from "express"
import authControllers from "./authControllers.js"

const router = express.Router()

//rutas de register y login
router.post("/register", authControllers.register)
router.post("/login", authControllers.login)

export default router