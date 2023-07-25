const {response} = require('express');
const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');

const login = async ( req,res=response )=>{
    const {email, password} = req.body;
    try {
        /* Verificar si existe el email en a vasse de datos */
        /* const usuario = new Usuario ({email,password}); */
        const emailExiste = await Usuario.findOne({email});
        if(!emailExiste){
            return res.status(400).json({
                msg:"Usuario no regitrado"
            });
        }

        /* Verificar si el usuario esta activo */
        if((emailExiste.estado) === false){
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

        res.json({
            msg: "All good chiquita"
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