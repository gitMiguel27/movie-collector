import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { CardGroup } from 'react-bootstrap'

function MovieList({ movieList, setMovieList }) {
  return (
    <CardGroup style={{ width: 'max-content' }}>
        {
            movieList.map((movie) => {
                return (
                    <MovieCard key={movie.Title} movie={movie} movieList={movieList} setMovieList={setMovieList} />
                )
            })
        }
    </CardGroup>
  )
}

export default MovieList