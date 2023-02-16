var fs = require("fs")
var http = require("http")

// var archivos = new Promise(function(resolve, reject) {
//     fs.readdir('./images/', function(err, files) {
//         if (err) return reject(err);
//         resolve(files);
//     });
// });

// var readImage = function(file) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(file, function(err, data) {
//             if (err) return reject(err);
//             resolve({
//                 data,
//                 contentType: 'image/jpg',
//                 status: 200,
//             });
//         });
//     });
// }

// // Escribí acá tu servidor
// function readFile(fileName) {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./images/' + fileName, (err, data) => {
//             if (err) reject({
//                 data: '<h1>No encontrada</h1>',
//                 contentType: 'text/html',
//                 status: 404
//             })
//             else resolve({
//                 data,
//                 contentType: 'image/jpg',
//                 status: 200
//             })
//         })
//     })
// }

// http.createServer((req, res) => {
//     readFile(req.url.split('/', 2).pop())
//         .then((img) => {
//             res.writeHead(img.status, { 'Content-Type': img.contentType })
//             return res.end(img.data)
//         })
//         .catch((err) => {
//             res.writeHead(err.status, { 'Content-Type': err.contentType })
//             return res.end(err.data)
//         })
// }).listen(1337, '127.0.0.1')


// para no hacer el codigo de abajo por cada uno de las request,  se hace el `${req.url}` 
http.createServer(function(req, res) {
    // console.log(`llego una request a ${req.url}`);
    fs.readFile(`./images${req.url}.jpg`, (err, data) => {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            })
            res.end('Image not found')
        } else {
            res.writeHead(200, {
                'Content-Type': 'image/jpeg'
            })
            res.end(data)
        }
    })
}).listen(1337, '127.0.0.1');

// if (req.url === '/arcoiris_doge') {
//     console.log('entro');
//     fs.readFile('./images/arcoiris_doge.jpg', function(err, data) {
//         if (err) {
//             res.writeHead(404, {
//                 'Content-Type': 'text/plain'
//             })
//             res.end('Image not found')
//         } else {
//             res.writeHead(200, {
//                 'Content-Type': 'image/jpeg'
//             })
//             res.end(data)
//         }
//     })
// }