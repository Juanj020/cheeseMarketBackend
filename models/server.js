const express = require("express");
const cors = require("cors");
const {dbConnection} = require('../database/config.js');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        //Conectar a base de datos mongo
        this.connectDB();

        //Middlewares
        this.middlewares(express.static)

        //Routes
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        /* Cors */
        this.app.use(cors());

        /* Leer y parsear JSON en body */
        this.app.use(express.json())

        /* Public directory */
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNIG ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;