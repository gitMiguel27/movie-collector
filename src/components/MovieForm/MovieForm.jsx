import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

function MovieForm({ getMovie }) {
    const [formData, setFormData] = useState({
        search: ''
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        getMovie(formData.search)
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