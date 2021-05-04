import React from "react"

function Collection() {

    const movies = JSON.parse(localStorage.getItem("movieArray"))

    const movieList = movies.map(movie1 => {
        return (
            <div className="movieCollection" key={movie1.Title}>
                <h1>{movie1.Title}</h1>
                <p>{movie1.Year}</p>
                <p>{movie1.Rated}</p>
                <p>{movie1.Released}</p>
                <p>{movie1.Runtime}</p>
                <p>{movie1.Genre}</p>
                <img src={movie1.Poster} />
                <button>Delete</button>
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