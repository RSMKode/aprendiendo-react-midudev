import { useState } from 'react'
import { searchMovies } from '../services/movies'

// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/without-results.json'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      const { movies: newMovies, errorMessage } = await searchMovies({ query })
      setMovies(newMovies)
      setErrorMessage(errorMessage)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, errorMessage }
}
