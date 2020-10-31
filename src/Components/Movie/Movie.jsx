import React from 'react'
import './Movie.css'
import Truncate from "react-truncate";
import {FavoriteBorderOutlined} from '@material-ui/icons'
const Movie = ({movie}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    return (
    <div className="movie">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <div className="movie__info">
        <p>{movie.original_title || movie.title|| movie.original_name || movie?.name}</p>
        <Truncate lines={1} ellipsis={"..."} className="movie__infoDescrp">
          <p>{movie.overview}</p>
        </Truncate>
        <p className="movie__infoDateLikes">
          {movie.release_date? movie.release_date : "No date "} • {movie.vote_count}
          <FavoriteBorderOutlined />
        </p>
      </div>
    </div>
    )
}

export default Movie
