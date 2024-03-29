import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
    count: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, // copia del estado
                count: state.count + 1
            }
            // completa para este caso
        case DECREMENT:
            // Fill para este otro
            return {
                ...state, // copia del estado
                count: state.count - 1
            }
        default:
            return state;
    }
};