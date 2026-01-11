import authServices from "./authServices.js";

class AuthController {
    
    async register(req, res) {
        try {
            //crear el nuevo usuario
            const newuser = await authServices.register(req.body)
            console.log("Usuario Creado Correctamente¡¡");
            const {password, ...user} = newuser.toJSON()
            return res.status(201).json({
                message: "Usuario creado correctamente",
                user: user
            })
            
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            return res.status(500).json({error: "Error al crear el usuario"})
        
        }
    }

    async login(req, res) {
        try {
            //validacion del login 
            const {token, user} = await authServices.login(req.body)
            console.log("Login Correcto");
            const {password, ...userData} = user.toJSON()
            return res.status(200).json({
                data: {token, user: userData}
            })

        } catch (error) {
            console.error("Error al hacer login:", error);
            return res.status(500).json({error: "Error al hacer login"})
        }
    }
}


export default new AuthController()