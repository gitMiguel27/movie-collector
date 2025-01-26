import React from 'react'
import { Card } from 'react-bootstrap'

function MovieCard({ movie }) {
    function loaded() {
        return (
            <Card className='bg-dark text-white text-center' border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }

    function loading() {
        return (
            <h1>loading movie card...</h1>
        )
    }
    
    return (
        <>
            { movie? loaded() : loading() }
        </>
    )
}

export default MovieCard