const {Schema, model} = require('mongoose');

const UsuarioShema = Schema({
    nombre:{
        type:String,
        required: [true, 'name is required']
    },
    email:{
        type:String,
        required: [true,"email is required"],
        unique: true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    imagen:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    },
    estado:{
        type:Boolean,
        default: true
    },
    googleSingIn:{
        type:Boolean,
        default: true
    }
});

module.exports = model('Usuario', UsuarioShema);//mode le agrega la s