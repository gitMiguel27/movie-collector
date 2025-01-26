import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

function MovieList({ movieList }) {
  return (
    <div>
        {
            movieList.map((movie) => {
                return (
                    <MovieCard key={movie.Title} movie={movie} />
                )
            })
        }
    </div>
  )
}

export default MovieList