
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import SearchBar from "../components/SearchBar"
import { MovieContext } from "../components/DataManager"

function Home(props) {

    const { movies } = useContext(MovieContext)
    console.log(movies)

        return (
            <div className="movieContainer">
                <SearchBar />
                <h1>Welcome to Movie Search</h1>
                <Link to="/movieDetails">{movies.Title} :</Link>
                <h3>{movies.Genre}</h3>
                <img src={movies.Poster}></img>
            </div>
        )
}

export default Home



