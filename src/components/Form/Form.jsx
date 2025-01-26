import React, { useState } from 'react'

function Form({ getMovie }) {
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
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' onChange={handleChange} />
            <input type='submit' value='submit' />
        </form>
    </div>
  )
}

export default Form