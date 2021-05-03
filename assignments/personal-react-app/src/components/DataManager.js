import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const MovieContext = React.createContext()

function DataManager(props) {
    const [movies, setMovie] = useState([])

    let min = 1000000;
    let max = 9999999;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    const url = `https://vschool-cors.herokuapp.com?url=http://www.omdbapi.com/?i=tt${num}&apikey=c7647cd8`

    const getRandomMovie = () => {
        axios.get(`${url}`)
            .then(res => {
                const oneMovie = res.data
                // add our data to state
                setMovie(oneMovie)
                console.log(oneMovie)
            })
            .catch(err => console.log(`Error: ${err}`))
    }

    useEffect(() => {

        getRandomMovie()

    }, [])

    const getSearchedMovie = (title) => {

        axios.get(`https://vschool-cors.herokuapp.com?url=http://www.omdbapi.com/?t=${title}&apikey=c7647cd8`)
            .then(res => {
                const oneMovie = res.data
                // add our data to state
                setMovie(oneMovie)
                console.log(oneMovie)
            })
            .catch(err => console.log(`Error: ${err}`))
    }

    const postMovie = movie => {
        axios.post('https://api.vschool.io/rengian/todo', movie)
            .then(res => {
                console.log(res.data)
                setMovie(prevMovies => [...prevMovies, res.data])
            })
            .catch(err => console.log(err));
    }

    return (
        <MovieContext.Provider value={{
            movies,
            setMovie,
            getRandomMovie,
            postMovie,
            getSearchedMovie
        }}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default DataManager
