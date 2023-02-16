const {
    INCREMENTO,
    DECREMENTO
} = require('../action-types');


//FRANCO DICE QUE initialState ES EL STORE atraves del index principal;
//se encuentra en:
//store: createStore.contador;
//el store es donde se guardan las acciones. 


const initialState = {
    contador: 0,
    friends: []
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?


// ESTO ES LA FUNCION REDUCER principal
function contador(state = initialState, action) {
    if (action.type === INCREMENTO) {
        return {
            ...state,
            contador: state.contador + 1
        }
    }
    if (action.type === DECREMENTO) {
        return {
            ...state,
            contador: state.contador - 1
        }
    }
    return state;
}

module.exports = contador;