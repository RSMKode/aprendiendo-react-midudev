// import responseMovies from '../mocks/with-results.json'
// import withoutResults from './mocks/without-results.json'

export function useMappedMovies ({ movies }) {
  const mappedMovies = movies?.map(movie => ({
    imdbID: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type
  }))

  return { movies: mappedMovies }
}
