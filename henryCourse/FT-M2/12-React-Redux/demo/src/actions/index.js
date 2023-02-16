//DUMBINGS
import axios from 'axios';

export function increment() {
    return {
        type: 'INCREMENT',
    }
};
export function decrement() {
    return {
        type: 'DECREMENT',
    };
};
export function reset() {
    return {
        type: 'RESET',
    }
}

export function getPost() {
    return {
        type: 'GET_POST',
    }
}

export function receivePost(post) {
    return {
        type: 'RECEIVE_POST',
        post
    }
}

// LA API ES UNA FUNCION CREADORA QUE RECIBE UN VALOR
// QUE BUSCA INFORMACION SEGUN EL ID QUE SE LE PASE COMO VALOR
// Y DEBE SER ESCRITA EN LAS ACCIONES QUE LUEGO VAN A SER PASADAS AL REDUCER
export function fetchPost(valor) {
    return function(dispatch) {
        dispatch(getPost());
        axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
            .then(r => r.data)
            .then(d => dispatch(receivePost(d)))
            .catch(e => console.log(e));
    }
}