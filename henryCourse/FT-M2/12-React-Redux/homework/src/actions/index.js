// payload => agregar pelicula a favoritos
export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload
    };
}

export function removeMovieFavorite(idMovie) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: idMovie
    };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "GET_MOVIES",
                    payload: json
                });
            });
    };
}

export function getMovieDetail(idMovie) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${idMovie}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "GET_MOVIE_DETAIL",
                    payload: data
                });
            });
    };
}