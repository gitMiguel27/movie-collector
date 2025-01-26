import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form/Form'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [movie, setMovie] = useState(null)

  async function getMovie(search) {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${search}`)
      const movieData = await response.json()
  
      setMovie(movieData)
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  useEffect(() => {
    getMovie(movie)
  }, [movie])

  return (
    <>
      <Form getMovie={getMovie} />
      <MovieCard movie={movie} />
    </>
  )
}

export default App
