import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies, addMovieFavorite } from "../../actions/index.js";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // let array = [
    //   { name: "gabi", age: 27 },
    //   { name: "flor", age: 27 },
    // ];
    // console.log(array);
    // console.table(array);
    //getMovies(this.state.title) // MAAAL!
    //se estaria ejecutando la funcion getMovies que viene importada arriba y nosotros no queremos eso
    //porque cuando se hace el conect, se genera una nueva funcion dentro de mi componente, que es...
    this.props.getMovies(this.state.title);
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {this.props.movies?.map((movie) => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <li>{movie.Title}</li>
              </Link>
              <button
                onClick={() =>
                  this.props.addMovieFavorite({
                    Title: movie.Title,
                    imdbID: movie.imdbID,
                  })
                }
              >
                FAV
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded,
  };
};

export default connect(mapStateToProps, { getMovies, addMovieFavorite })(
  Buscador
);
