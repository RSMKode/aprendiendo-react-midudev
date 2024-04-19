const API_KEY = '55569760'

// https://www.omdbapi.com/?apikey=55569760&s=star
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

export async function getMovies (search) {
  const response = await fetch(API_URL + search)
  const data = await response.json()
  return data
}
