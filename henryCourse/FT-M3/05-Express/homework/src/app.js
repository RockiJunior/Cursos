const {
    server
} = require('./server.js');

server.listen(3000);

//PARA ENVIAR UN CONTEXT-TYPE POR DEFECTO (text/plain)...
// server.get('/', function(req, res) { //Ruta para un GET a /
//     res.send('Hola mundo!'); // response "Hola mundo!" en la pagina principal
// });

//PARA ENVIAR UN OBJETO JSON...
// server.get('/', function(req, res) {
//     var obj = {
//         saludo: 'Hola mundo!'
//     }
//     res.json(obj);
// });

//PARA ENVIAR UN STATUS CODE...
// server.get('/', function(req, res) {
//     res.status(200).send('Hola mundo!');
// });

//PARA OBTENER LA PROPIEDAD NAME DE UN OBJETO DEL BODY...
// server.get('/', function(req, res) {
//     var obj = {
//         saludo: 'Hola' + req.body.name,
//     }
//     res.json(obj);
// });

//PARA ACCEDER A LOS PARAMETROS DE UNA CONSULTA
//Se hace de la misma manera que body, pero con la
// propiedad query