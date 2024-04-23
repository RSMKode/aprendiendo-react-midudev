const API_KEY = '55569760'
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`
// https://www.omdbapi.com/?apikey=55569760&s=star

export const searchMovies = async ({ query }) => {
  if (query === '') return { movies: [], errorMessage: '' }
  try {
    const response = await fetch(API_URL + query)
    const json = await response.json()

    const movies = json.Search
    const errorMessage = json.Error

    const mappedMovies = movies?.map(movie => ({
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type
    }))

    return { movies: mappedMovies, errorMessage }
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
