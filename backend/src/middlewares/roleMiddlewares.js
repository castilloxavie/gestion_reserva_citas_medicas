export function roleMiddleware(rolesPermitidos = []) {
    return (req, res , next) =>  {
        const rolUsuario =req.user.roles

        if(!rolesPermitidos.includes(rolUsuario)) {
            console.log(`Rol de usuario: ${rolUsuario}`);
            return res.status(403).json({mensaje: "No tienes permiso para acceder a esta ruta"})   
        }
        next()
    }
}