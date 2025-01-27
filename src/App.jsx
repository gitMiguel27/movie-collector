import { useState, useEffect } from 'react'

import MovieForm from './components/MovieForm/MovieForm'
import MovieList from './components/MovieList/MovieList'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'

import { Container } from 'react-bootstrap'

import favorites from './data/favorites'
import './App.css'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const [movieList, setMovieList] = useState([])
  
  async function displayFavorites() {
    let favoritesArr = []
    for (let i = 0; i < favorites.length; i++) {
      let favorite = await getMovie(favorites[i])
      favoritesArr.push(favorite)
    }
    setMovieList(favoritesArr)
  }

  async function getMovie(search) {
    if (search === undefined) {
      return
    }
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${search}`)
      const movieData = await response.json()
  
      return movieData
    } catch (error) {
      console.error({ error: error.message })
    }
  }

  useEffect(() => {
    displayFavorites()
  }, [])

  return (
    <Container>
      <Header />
      <Welcome />
      <MovieForm getMovie={getMovie} setMovieList={setMovieList} movieList={movieList} />
      <MovieList movieList={movieList} setMovieList={setMovieList} />
    </Container>
  )
}

export default App
