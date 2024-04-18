import { useState, useEffect } from 'react'

import { getMovies } from '../services/getMovies'

export function useMovieData ({ query }) {
  const [responseData, setResponseData] = useState(null)
  useEffect(() => {
    getMovies(query).then(data => setResponseData(data))
  }, [query])

  const mappedResponseData = responseData?.Response === 'True' && responseData?.Search
    ? { movies: responseData?.Search, response: responseData?.Response }
    : { movies: [], error: responseData?.Error }

  return { responseData: mappedResponseData }
}
