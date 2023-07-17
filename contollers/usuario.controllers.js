const Usuario = require('../models/Usuario.js'); 

const getUsers = (req, res)=>{
    res.status(500).json({
        "message":"home page"
    });
}

const postUsers = async (req, res)=>{
    const body = req.body;
    const usuario = new Usuario(body);
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