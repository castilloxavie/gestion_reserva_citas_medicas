import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../../models/users.js"
import dotenv from "dotenv"
dotenv.config()

class AuthServices {
    async register(data) {
        const {first_name, last_name, email, password, roles} = data

        //validar si ya existe el usario registrado
        const userExists = await Users.findOne({where: {email}})
        if(userExists) throw new Error("El usuario ya esta registrado")
        
        //crear nuevo usuario
        const newUser = await Users.create({
            first_name,
            last_name,
            email,
            password,
            roles
        })
        return newUser
    }

    async login(data) {
        const {email, password} = data

        if (!email || !password) {
            throw new Error("Email y contraseña son requeridos")
        }

        //buscar usuario
        const user = await Users.scope('withPassword').findOne({where: {email}})
        if(!user) throw new Error("El usuario o contraseña son incorrectos")
        
        //validar contraseña
        const isValidate = await bcrypt.compare(password, user.password)
        if(!isValidate) throw new Error("El usuario o contraseña son incorrectos")

        //generar token)
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                roles: user.roles
            },
            process.env.SECURITY_TOKEN_JWT,
            {
                expiresIn: "1d"
            }
        )
        return {token, user}
    }
}

export default new AuthServices()