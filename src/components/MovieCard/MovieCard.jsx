import React from 'react'

function MovieCard({ movie }) {
    function loaded() {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h3>{movie.Genre}</h3>
                <img src={movie.Poster} alt={movie.Title} ></img>
                <h3>{movie.Year}</h3>
            </>
        )
    }

    function loading() {
        return (
            <h1>loading movie card...</h1>
        )
    }
    
    return (
        <div>
            { movie? loaded() : loading() }
        </div>
    )
}

export default MovieCard