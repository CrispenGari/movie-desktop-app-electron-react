
import React, { useState, useEffect } from 'react'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import './MoviesContainer.css'
import {Movie} from '../../Components'
import axios from '../../data/axios'
import {useSelector} from 'react-redux'
import {Loop} from '@material-ui/icons'
const MoviesContainer = () => {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTraillerURL] = useState("");
    const state = useSelector(state => state.category)
    useEffect(() => {
       const fetchMovies = async()=>{
            const data = await axios.get(state)
            setMovies(data.data.results)
       }  
       fetchMovies();
    }, [state]);
    const options = {
        height: "460",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
    const playMovie = (movie)=>{
        if (trailerURL) {
            setTraillerURL("");
          } else {
            movieTrailer(movie?.original_title || movie?.title|| movie?.original_name || movie?.name )
              .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTraillerURL(urlParams.get("v"));
              })
              .catch((e) => {
                console.log(e);
              });
          }
    }
    
    return (
        <div className="">
            {trailerURL && (
                        <YouTube
                            videoId={trailerURL}
                            opts={options}
                            className="container_vedio"
                        />
        )}
       
        <div className={`moviescontainer ${movies.length ===0 &&"moviescontainer--loading"}`}>
            {
                movies.length ===0 ?
                <div className="moviescontainer__loading">
                    <Loop/>
                  <h1>Loading...</h1>
                </div>:
                movies.map((movie, i)=>
                <div key= {i} onClick={() => playMovie(movie)}>
                    <Movie movie={movie}/>
                </div>
              )
            } 
        </div>
        </div>
    )
}
export default MoviesContainer
