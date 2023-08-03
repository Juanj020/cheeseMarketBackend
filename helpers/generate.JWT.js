const jwt = require('jsonwebtoken');

const generateJWT = (uid = '')=>{

    return new Promise((resolve, reject)=>{
        const payload = {uid};
        /* sing es la firma, esto se valida si fue hackeada o algo */
        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY,{
            /* En cuanto expira */
            expiresIn: '4h'
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el JSON WEB TOKEN')
            }else{
                resolve(token);
            }
        });
    })
}

module.exports = {
    generateJWT
}