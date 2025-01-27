import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

function MovieForm({ getMovie, setMovieList, movieList }) {
    const [formData, setFormData] = useState({
        search: ''
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let searchedMovie =  await getMovie(formData.search)
        setMovieList([searchedMovie, ...movieList])
    }

  return (
    <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="search by title..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon1"
            name='search'
            onChange={handleChange}
            />
            <Button type='submit' variant="outline-secondary" id="button-addon1">
            Search
            </Button>
        </InputGroup>
    </Form>
  )
}

export default MovieForm