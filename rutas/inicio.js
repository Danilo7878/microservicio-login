const { Router } =  require('express');
var jwt = require("jsonwebtoken");
const cifrar = require('crypto');
const router = Router();

const Usuario = require('../modelos/usuario');

inicio = router.post("/login", (req,res)=>{
    let data= req.body;
    console.log(data)
    var Contrasena = data.Contrasena;
    Contrasena = cifrar.createHash('sha256').update(Contrasena).digest("hex");
    Usuario.find({ usuario: data.Usuario, contrasena: Contrasena}, 
        function (err, usuario)
        {
            if(err || usuario.length === 0)
            {
                console.log(err)
                res.json({
                    estado: "FALLIDO",
                    mensaje: "Credenciales incorrectas"
                })
                return
            }
            console.log(usuario)

            const payload = {
              check: true,
            };
            const token = jwt.sign(payload, 'laclavemasecretadelmundo', {
              expiresIn: 10,
            });
            res.json({
                token: token,
                estado: "EXITOSO",
                mensaje: "Bienvenido"    
            })         
        });
})

module.exports = router;