import { useState, useRef, useMemo } from 'react'
import { searchMovies } from '../services/movies'

// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/without-results.json'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  const getMovies = async () => {
    if (query === previousQuery.current) return
    try {
      setLoading(true)
      previousQuery.current = query
      const { movies: newMovies, errorMessage } = await searchMovies({ query })
      setMovies(newMovies)
      setErrorMessage(errorMessage)
    } catch (error) {
      setErrorMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, errorMessage }
}
