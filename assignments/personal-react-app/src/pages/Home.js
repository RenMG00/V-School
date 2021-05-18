
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import SearchBar from "../components/SearchBar"
import { MovieContext } from "../components/DataManager"

function Home(props) {

    const { movies } = useContext(MovieContext)
    console.log(movies)
    const style = { fontSize: "40px"}
        return (
            <div className="movieContainer">
                <h1 style={style}> Movie Search</h1>
                <SearchBar />
                <div className="homeMovie">
                <Link to="/movieDetails"><h2>{movies.Title}</h2></Link>
                <h3>{movies.Genre}</h3>
                <img src={movies.Poster} alt=""></img>
                </div>
            </div>
        )
}

export default Home



