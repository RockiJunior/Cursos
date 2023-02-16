// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests:
const path = '/posts';

let id = 1;
server.post(path, (req, res) => {
    // para no hacer "req.body.author"
    const {
        author,
        title,
        contents
    } = req.body;
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json({
            error: "No se recibieron los parámetros necesarios para crear el Post"
        })
    }
    const post = {
        author,
        title,
        contents,
        id: id++
    }
    posts.push(post); //aca sube al array el objeto nuevo
    res.status(200).json(post); //envia un estado y lo yeisonifica
});

server.post(`${path}/author/:author`, (req, res) => {
    // :author => indica que se envia algo por parametro
    const {
        title,
        contents,
    } = req.body;

    let {
        author
    } = req.params;

    if (!title || !contents) {
        return res.status(STATUS_USER_ERROR).json({
            error: "No se recibieron los parámetros necesarios para crear el Post"
        })
    }
    const post = {
        author,
        title,
        contents,
        id: id++
    };

    posts.push(post); //aca sube al array el objeto nuevo
    res.status(200).json(post); //envia un estado y lo yeisonifica
});

server.get(path, (req, res) => {
    const {
        term
    } = req.query;
    if (term) {
        // let nuevoPost = posts; //copia del array para no modificar el primero
        // includes en el filter dice si tengo el valor que entra por URL en el array posts
        let resultado = posts.filter(post => post.title.includes(term) || post.contents.includes(term))
            //por cada post tengo el objeto con sus props
        return res.json(resultado)
    }
    res.json(posts);
})

server.get(`${path}/:author`, (req, res) => {
    const {
        author
    } = req.params;
    const resultado = posts.filter(post => post.author === author);

    if (resultado.length === 0) {
        return res.status(STATUS_USER_ERROR).json({
            error: "No existe ningun post del autor indicado"
        })
    }
    return res.json(resultado);
});

server.get(`${path}/:author/:title`, (req, res) => {
    const {
        author,
        title
    } = req.params;
    const resultado = posts.filter(post => post.author === author && post.title === title);

    if (resultado.length === 0) {
        return res.status(STATUS_USER_ERROR).json({
            error: "There is no author with those titles"
        })
    }
    return res.json(resultado);
});


server.put(path, (req, res) => {
    const {
        id,
        title,
        contents
    } = req.body;
    if (!id || !title || !contents) {
        return res.status(STATUS_USER_ERROR).json({
            error: "No se recibieron los parámetros necesarios para modificar el Post"
        })
    }
    const postFound = posts.find(p => p.id === id);

    if (!postFound) {
        return res.status(STATUS_USER_ERROR).json({ error: "El id no corresponde a un Post valido" })
    }

    postFound.title = title;
    postFound.contents = contents;
    res.json(postFound)
});


server.delete(path, (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(STATUS_USER_ERROR).json({ error: "ID no provisto" })
    }

    const postFound = posts.find(p => p.id === id);
    if (!postFound) {
        return res.status(STATUS_USER_ERROR).json({ error: "El id no corresponde a un post valido" })
    }

    posts = posts.filter(p => p.id !== id);
    res.json({ success: true });

});

server.delete('/author', (req, res) => {
    const { author } = req.body;
    if (!author) {
        res.status(STATUS_USER_ERROR).json({ error: "El autor es invalido" })
    }

    const filteredPosts = posts.filter(p => p.author === author);
    if (filteredPosts.length === 0) {
        res.status(STATUS_USER_ERROR).json({ error: "There is no author that matches" })
    }

    posts = posts.filter(p => p.author !== author);
    res.json(filteredPosts);

})



module.exports = {
    posts,
    server
};