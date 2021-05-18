import React, {useState, useEffect} from "react"
import SearchBar from "../components/SearchBar"

function Collection() {
    const [movieArray, setMoviArray] = useState([])

    const refresh = ()=> {
        setMoviArray(movies)
    }

    const movies = JSON.parse(localStorage.getItem("movieArray"))
    

    const deleteMovie = (Title) => {
        let getLocalStorage = JSON.parse(localStorage.getItem("movieArray"));
        const index = getLocalStorage
                .findIndex(title => Title.title === title.title);
        getLocalStorage.splice(index, 1)
        getLocalStorage = getLocalStorage.map((movies, title) => ({...movies, title}))
        localStorage.setItem("movieArray", JSON.stringify(getLocalStorage))

        refresh()
    }

    const movieList = movies.map(movie1 => {
        const style = {
            width: "200px",
            height: "200px"
        }
        return (
            <div className="movieCollection" key={movie1.Title} className="single-movie">
                <h1 className="collectionTitle">{movie1.Title}</h1>
                <p>{movie1.Year}</p>
                <p>{movie1.Rated}</p>
                <p>{movie1.Released}</p>
                <p>{movie1.Runtime}</p>
                <p>{movie1.Genre}</p>
                <img src={movie1.Poster} alt="" className="collectionImg" style={style}/>
                <div className="deleteButton">
                <button onClick={deleteMovie}>Delete</button>
                </div>
            </div>
        )
    })
    return (
        <>
        <SearchBar />
        <h1></h1>
        <div className="movieCollection">
            {movieList}
        </div>
        </>
    )
}

export default Collection