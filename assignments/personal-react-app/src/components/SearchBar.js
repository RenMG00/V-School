import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { MovieContext } from "../components/DataManager"

const SearchBar = () => {

  const [searchMovie, setSearchMovie] = useState([])

  const { movies, getSearchedMovie } = useContext(MovieContext)

  const handleChange = e => {
    const { name, value } = e.target
    setSearchMovie(value)
    console.log(value)
    
  };

  const handleSubmit = (e) => {
    getSearchedMovie(searchMovie)
  };

  const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
  return (
    <div className="searchBar">
      <input
        style={BarStyling}
        value={searchMovie}
        placeholder={"Search Movie Title"}
        onChange={handleChange}
      />
      <Link to="/movieDetails"><button onClick={handleSubmit}>Search</button></Link>
    </div>
  )
}

export default SearchBar