//Libreries...
const express = require('express');
const server = express();
//Imports Files...
const {
    getAllStudents,
    getStudentById,
    getStudentByName,
    addStudent
} = require('./model/model.js');

server.use(express.json()); //PARA USAR POSTMAN

server.get('/', (req, res) => {
    res.send('Bienvenido al servidor de Repaso de Henry')
});

//  students?name=Leo&Cohorte=15
server.get('/students', (req, res) => {
    const {
        name
    } = req.query;
    if (!name) {
        return res.json(getAllStudents());
    }
    res.json(getStudentByName(name));
});

server.get('/students/:id', (req, res) => {
    const {
        id
    } = req.params;
    // const students = getAllStudents();
    const student = getStudentById(id);
    console.log(id);
    if (!student) {
        return res.status(404).send("Student not found")
    }
    res.json(student);
});

server.get('/students/:name/:cohorte', (req, res) => {
    res.send('Entro a la ruta /students/:name/:cohorte')
});


server.post('/students', (req, res) => {
    const { name, cohort } = req.body;
    res.send(`Nombre: ${name} y Cohorte: ${cohort}`)
})









server.listen(3000, () => {
    console.log(`server listening at http://localhost:3000`)
});