import React, { useContext } from "react"
import { MovieContext } from "../components/DataManager"

const MovieDetails = () => {
    
    const { movies } = useContext(MovieContext)

    const handleSave = () => {
        
        let movieArray = []

        const movieObj = {
            Title: movies.Title,
            Poster: movies.Poster,
            Genre: movies.Genre,
            Rated: movies.Rated
        }
        movieArray.push(movieObj)
        movieArray = movieArray.concat(JSON.parse(localStorage.getItem("movieArray")||'[]'))
        localStorage.setItem("movieArray", JSON.stringify(movieArray))
    }

    return (
        <div>
            <h1>Movie Details</h1>
            <div className="movieDetails">
                <h2>{movies.Title} : </h2>
                <p>{movies.Year}</p>
                <p>{movies.Rated}</p>
                <p>{movies.Released}</p>
                <p>{movies.Runtime}</p>
                <p>{movies.Genre}</p>
            </div>
            <div className="detailsImage">
            <img src={movies.Poster} alt=""/>
            <button className="saveButton" onClick={handleSave}>Save Movie</button>
            </div>
        </div>

    )
}

export default MovieDetails