import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const authMiddleware = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1]

    if(!token) {
        console.log("Acceso Denegado, se requiere un token");
        return res.status(401).json({error: "Acceso Denegado, se requiere un token"})    
    }

    try {
        const decode = jwt.verify(token, process.env.SECURITY_TOKEN_JWT)
        req.user = decode
        next()
    
    } catch (error) {
        console.error("Error al verificar el token:", error);
        return res.status(401).json({error: "Acceso Denegado, token invalido"})
        
    }
}

export default authMiddleware
