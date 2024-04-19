import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

// import withResults from '../mocks/with-results.json'
// import withoutResults from '../mocks/without-results.json'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const previousQuery = useRef(query)

  // Con el useMemo se podria hacer igualmente, porque useCallback utiliza useMemo por debajo, y asi la sintaxis es mas clara
  const getMovies = useCallback(async ({ query }) => {
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
  }, [])

  // useMemo se utiliza para computar valores y useCallback se prioriza para elegir cuando se vuelven a montar las funciones en el re-render del componente
  const sortedMovies = useMemo(() => {
    console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, errorMessage }
}
