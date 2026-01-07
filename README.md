# 🏥 Gestión de Reservas de Citas Médicas

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6.37.7-blue.svg)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange.svg)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-9.0.3-red.svg)](https://jwt.io/)

Un sistema backend robusto para la gestión de reservas de citas médicas, desarrollado con Node.js y Express. Permite la administración de usuarios, pacientes, doctores, especializaciones, salas y citas, con autenticación segura y notificaciones automáticas.

## 📋 Descripción

Este proyecto implementa un API RESTful para un sistema de gestión de citas médicas. Incluye funcionalidades para la creación y gestión de usuarios (administradores, recepcionistas, doctores y pacientes), reservas de citas, horarios de doctores y notificaciones. El sistema está diseñado para ser escalable y seguro, utilizando tecnologías modernas como Sequelize para ORM y JWT para autenticación.

**Nota:** El frontend está en desarrollo y se integrará próximamente.

## ✨ Características

- 🔐 **Autenticación y Autorización**: Sistema de login con JWT y roles de usuario (admin, recepcionista, doctor, paciente).
- 👥 **Gestión de Usuarios**: CRUD completo para usuarios, pacientes y doctores.
- 📅 **Reservas de Citas**: Creación, confirmación y cancelación de citas médicas.
- 🏥 **Especializaciones y Salas**: Administración de especialidades médicas y salas de consulta.
- ⏰ **Horarios de Doctores**: Configuración de horarios de trabajo por día y sala.
- 📧 **Notificaciones**: Envío automático de recordatorios via email y SMS.
- 📊 **Logs y Monitoreo**: Registro de actividades con Morgan.
- 🔄 **Tareas Programadas**: Limpieza automática de datos con Node-Cron.

## 🛠️ Tecnologías Utilizadas

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) **Node.js** - Entorno de ejecución JavaScript.
- ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) **Express.js** - Framework web para Node.js.
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white) **Sequelize** - ORM para bases de datos relacionales.
- ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) **MySQL** - Base de datos relacional.

### Seguridad y Autenticación
- ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=json-web-tokens&logoColor=white) **JSON Web Tokens** - Para autenticación stateless.
- ![Bcrypt](https://img.shields.io/badge/Bcrypt-000000?style=flat&logo=bcrypt&logoColor=white) **Bcrypt.js** - Hashing de contraseñas.

### Comunicaciones
- ![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?style=flat&logo=nodemailer&logoColor=white) **Nodemailer** - Envío de emails.
- ![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=flat&logo=twilio&logoColor=white) **Twilio** - Envío de SMS.

### Utilidades
- ![Dotenv](https://img.shields.io/badge/Dotenv-000000?style=flat&logo=dotenv&logoColor=white) **Dotenv** - Gestión de variables de entorno.
- ![CORS](https://img.shields.io/badge/CORS-000000?style=flat&logo=cors&logoColor=white) **CORS** - Manejo de cross-origin requests.
- ![Morgan](https://img.shields.io/badge/Morgan-000000?style=flat&logo=morgan&logoColor=white) **Morgan** - Logging de requests HTTP.
- ![Day.js](https://img.shields.io/badge/Day.js-000000?style=flat&logo=dayjs&logoColor=white) **Day.js** - Manipulación de fechas.
- ![Node-Cron](https://img.shields.io/badge/Node--Cron-000000?style=flat&logo=node-cron&logoColor=white) **Node-Cron** - Tareas programadas.

### Desarrollo
- ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white) **Nodemon** - Reinicio automático del servidor en desarrollo.
- ![Sequelize CLI](https://img.shields.io/badge/Sequelize_CLI-52B0E7?style=flat&logo=sequelize&logoColor=white) **Sequelize CLI** - Herramientas de línea de comandos para Sequelize.

## 🚀 Instalación

### Prerrequisitos
- Node.js v18 o superior
- MySQL 8.0 o superior
- Git

### Pasos de Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/castilloxavie/gestion_reserva_citas_medicas.git
   cd gestion_reserva_citas_medicas/backend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto `backend/` con las siguientes variables:
   ```env
   # Base de datos
   DB_HOST=localhost
   DB_USER=tu_usuario_mysql
   DB_PASSWORD=tu_contraseña_mysql
   DB_NAME=gestion_citas_medicas
   DB_PORT=3306

   # Servidor
   PORT_SERVER=4001

   # JWT
   JWT_SECRET=tu_clave_secreta_jwt

   # Email (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=tu_email@gmail.com
   EMAIL_PASS=tu_contraseña_app

   # SMS (Twilio)
   TWILIO_SID=tu_twilio_sid
   TWILIO_TOKEN=tu_twilio_token
   TWILIO_PHONE=tu_numero_twilio
   ```

4. **Configura la base de datos:**
   - Crea una base de datos MySQL llamada `gestion_citas_medicas`.
   - Ejecuta el script de inicialización:
     ```bash
     npm run db
     ```

5. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

El servidor estará corriendo en `http://localhost:4001`.

## 📖 Uso

### Scripts Disponibles

- `npm run dev` - Inicia el servidor en modo desarrollo con Nodemon.
- `npm run db` - Inicializa la base de datos y crea las tablas.
- `npm test` - Ejecuta los tests (por implementar).

### Estructura del Proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── databases.js          # Configuración de Sequelize
│   ├── middlewares/              # Middlewares personalizados
│   ├── models/                   # Modelos de Sequelize
│   │   ├── appointments.js       # Modelo de citas
│   │   ├── associations_db.js    # Asociaciones entre modelos
│   │   ├── doctors.js            # Modelo de doctores
│   │   ├── doctor_schedules.js   # Modelo de horarios de doctores
│   │   ├── patients.js           # Modelo de pacientes
│   │   ├── rooms.js              # Modelo de salas
│   │   ├── specializations.js    # Modelo de especializaciones
│   │   └── users.js              # Modelo de usuarios
│   ├── modules/                  # Módulos de negocio
│   ├── routes.js                 # Definición de rutas
│   ├── app.js                    # Configuración de Express
│   └── utils/
│       └── db-init.js            # Inicialización de base de datos
├── .env                          # Variables de entorno
├── package.json                  # Dependencias y scripts
├── server.js                     # Punto de entrada del servidor
└── README.md                     # Este archivo
```

### Base de Datos

El sistema utiliza MySQL con Sequelize como ORM. Las tablas principales son:

- **users**: Usuarios del sistema con roles.
- **patients**: Información de pacientes.
- **doctors**: Información de doctores y especializaciones.
- **specializations**: Especialidades médicas.
- **rooms**: Salas de consulta.
- **doctor_schedules**: Horarios de trabajo de doctores.
- **appointments**: Reservas de citas médicas.

Las relaciones están definidas en `associations_db.js`.

## 🤝 Contribuyendo

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`).
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Autor**: Xavier Castillo
- **GitHub**: [castilloxavie](https://github.com/castilloxavie)
- **Email**: [xcastillovaron93@gmail.com]

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
