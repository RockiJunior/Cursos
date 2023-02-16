const nextId = 4;

const students = [
    { id: 1, name: 'Leonardo', cohorte: 'FT15B' },
    { id: 2, name: 'Gerardo', cohorte: 'FT15B' },
    { id: 3, name: 'Leopoldo', cohorte: 'FT17A' }
];



module.exports = {
    getAllStudents: () => {
        return students;
    },
    getStudentById: (id) => {
        return students.find(s => s.id === parseInt(id)); // tambien se puede usar Number();
    },
    getStudentByName: (name) => {
        return students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
    },
    addStudent: (name, cohorte) => {
        const newStudent = {
            id: nextId,
            name,
            cohorte,
        };
        students.push(newStudent);
        nextId++;
        return newStudent;
    }
};