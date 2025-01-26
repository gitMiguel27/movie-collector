import { Card } from 'react-bootstrap'
import './MovieCard.css'

function MovieCard({ movie, movieList, setMovieList }) {
    function handleClick() {
        const newMovieList = movieList.filter((m) => m !== movie)
        setMovieList(newMovieList)
        console.log(movieList)
    }

    return (
        <>
            <Card className='movie-card bg-dark text-white text-center border border-light rounded mx-1' style={{ width: '18rem' }} onClick={handleClick}>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard