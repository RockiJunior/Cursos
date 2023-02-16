import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
            this.props.movies?.map(movie=>(
              <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <li>{movie.Title}</li>
              </Link>
              <button
                onClick={() =>
                  this.props.removeMovieFavorite(movie.imdbID)}>X</button>
            </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    movies: state.moviesFavourites,
  }
}


export default connect(mapStateToProps, {removeMovieFavorite})(ConnectedList);
