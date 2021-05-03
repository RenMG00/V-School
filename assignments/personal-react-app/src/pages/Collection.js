import React, { useState, useEffect } from "react"
import axios from "axios"

function Collection() {

    const [movieCollection, setMovieCollection] = useState([])

    const getMovieCollection = () => {
        axios.get("")
            .then(res => {
                const allMovies = res.data
                // add our data to state
                setMovieCollection(allMovies)
            })
            .catch(err => console.log(`Error: ${err}`))
    }

    const deleteMovie = (id) => {
        let url = `https://jsonplaceholder.typicode.com/users/${id}`

        axios.delete(url).then(res => {
            const delMovie = movieCollection.filter(movie => id !== movie.id)
            setMovieCollection(delMovie)
            console.log('res', res)
        })
    }
    
    useEffect(() => {

        getMovieCollection()

    }, [])

    const movieList = movieCollection.map(movie => {
            return (
                <div className="movieCollection" key={movie.Title}>
                    <h1>{movie.Title}</h1>
                    <p>{movie.Year}</p>
                    <p>{movie.Rated}</p>
                    <p>{movie.Released}</p>
                    <p>{movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <img src={movie.Poster}/>
                    <button onClick={() => deleteMovie(movie.Title)}>Delete</button>
                </div>
            )
    })
    return (
        <div className="movieCollection">
            <h1>Movie Collection</h1>
            {movieList}
        </div>
    )
}

export default Collection