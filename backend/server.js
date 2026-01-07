import { app } from "./src/app.js"
import { initializeModelsDb } from "./src/utils/db-init.js";
import dotenv from "dotenv"

dotenv.config()

async function start() {
    try {
        await initializeModelsDb()
        console.log("conexion a la base de datos Correcto");

        const  PORT = process.env.PORT_SERVER ?? 4001

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
        })

    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
    } 
}

start()
