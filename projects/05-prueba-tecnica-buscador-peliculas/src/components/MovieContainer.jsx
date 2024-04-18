import MovieCard from './MovieCard'

export default function MovieContainer ({ movies }) {
  if (!movies) return
  return (
    <section className='grid w-full gap-4 grid-cols-auto-fit-11 sm:grid-cols-auto-fit-13'>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </section>
  )
}
