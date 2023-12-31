const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const Role = require('../models/Role.js');
const {getUsers, postUsers, putUsers, deleteUsers, patchUsers} = require("../contollers/usuario.controllers.js");
const router = new Router()

router.get("/", getUsers);
router.post("/",[ 
    check('nombre',"El nombre no es valido").not().isEmpty() ,
    check('password',"El password debe ser de minimo 6 letras").isLength({min:6}) ,
    check('email',"El correo no es valido").isEmail(),
    /* check('rol',"No es un rol valido").isIn(['ADMIN','USER']), */
    check('rol').custom(async(rol='')=>{
        const existeRol = await Role.findOne({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
        }
    }),
    validateDocuments
] ,postUsers);
router.put("/", putUsers);
router.delete("/", deleteUsers);
router.patch("/", patchUsers );

module.exports = router;