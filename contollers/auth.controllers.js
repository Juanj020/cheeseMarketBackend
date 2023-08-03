const {response} = require('express');
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWT');

const login = async ( req,res=response )=>{
    const {email, password} = req.body;
    try {
        /* Verificar si existe el email en a base de datos */
        /* const usuario = new Usuario ({email,password}); */
        const emailExiste = await Usuario.findOne({email});
        if(!emailExiste){
            return res.status(400).json({
                msg:"Usuario no regitrado"
            });
        }

        /* Verificar si el usuario esta activo */
        if((emailExiste.estado) === false){
            /* if(!emailExiste.estado){  otra forma de hacerlo es */
            return res.status(400).json({
                msg:"Usuario esta inactivo"
            });
        }

        
        /* Verificar el password es correcto y coincide con la llave */
        const passwordValidation = bcryptjs.compareSync(password, emailExiste.password);
        if(!passwordValidation)
            return res.status(400).json({ 
                msg:"El password no es correcto"
            });
        console.log(password);
        
        if(password === email.password)
        return res.status(400).json({ msg: "La contra es correcta"})

        /* Generación para validación de JSON WEB TOKEN */
        
        const token = await generateJWT(emailExiste.id)
        
        res.json({
            emailExiste, 
            token
        })
    } catch (error) {
        console.log(error);
        return res.json({
            msg: "Datos insuficientes, contacte a servicio técnico"
        });
    }
}

module.exports = {
    login 
}

/* function parseJwt(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-','+').replace('_', '/');
    return JSON.parse(window.atob(base64));
} */