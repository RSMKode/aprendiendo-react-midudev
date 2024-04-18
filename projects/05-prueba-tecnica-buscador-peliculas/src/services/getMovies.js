const API_KEY = '55569760'

// http://www.omdbapi.com/?i=tt3896198&apikey=55569760&s=''
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=`

export async function getMovies (search) {
  const response = await fetch(API_URL + search)
  const data = await response.json()
  return data
}
