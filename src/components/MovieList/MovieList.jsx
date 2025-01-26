import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { CardGroup } from 'react-bootstrap'

function MovieList({ movieList }) {
  return (
    <CardGroup style={{ width: 'max-content' }}>
        {
            movieList.map((movie) => {
              console.log(movie)
                return (
                    <MovieCard key={movie.Title} movie={movie} />
                )
            })
        }
    </CardGroup>
  )
}

export default MovieList