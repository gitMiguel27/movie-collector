import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form/Form'
import MovieCard from './components/MovieCard/MovieCard'
import MovieList from './components/MovieList/MovieList'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [movie, setMovie] = useState(null)
  const [movieList, setMovieList] = useState([])

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
    getMovie()
  }, [])

  return (
    <>
      <Form getMovie={getMovie} />
      <MovieList movieList={movieList} />
    </>
  )
}

export default App
