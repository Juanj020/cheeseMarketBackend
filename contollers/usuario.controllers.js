const Usuario = require('../models/Usuario.js'); 
const bcryptjs = require('bcryptjs');

const getUsers = (req, res)=>{
    res.status(500).json({
        "message":"home page"
    });
}

const postUsers = async (req, res)=>{


    const {nombre,email,password, rol} = req.body;
    const usuario = new Usuario({nombre,email,password,rol});

    // Verificar si el correo ya existe
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        return res.status(400).json({
            msg:"Email is already registered"
        })
    }

    //Encriptar nuestra contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.status(500).json({
        "message":"post page",
        usuario
    });
}

const putUsers = (req, res)=>{
    res.status(500).json({
        "message":"put page"
    });
}

const deleteUsers = (req, res)=>{
    res.status(500).json({
        "message":"delete page"
    });
}

const patchUsers = (req, res)=>{
    res.status(500).json({
        "message":"patch page"
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}