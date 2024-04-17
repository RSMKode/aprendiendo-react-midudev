import { useState, useEffect } from 'react'
import './App.css'

import { getMovies } from './services/getMovies'
// import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/without-results.json'

import MovieCard from './components/MovieCard'

const search = 'marvel'

function App () {
  const [responseData, setResponseData] = useState([])

  useEffect(() => {
    getMovies(search).then(data => setResponseData(data))
  }, [])

  console.log(responseData)

  // const movies = responseMovies.Search
  const movies = responseData?.Search

  return (
    <main className='flex flex-col items-center max-w-5xl gap-4 p-4 mx-auto'>
      <header className='flex flex-col gap-1'>
        <h2 className='text-2xl font-bold'>Prueba técnica</h2>
        <h1 className='text-3xl font-bold uppercase'>Buscador de películas</h1>
        <form className='flex flex-col gap-2 p-4 border-2 rounded-lg'>
          <label className='flex flex-col gap-1'>
            <span className='text-xl'>Buscar película</span>
            <input
              type='text' placeholder='Avengers, Star Wars...'
              className='px-2 py-1 rounded'
            />
          </label>
          <button className='px-4 py-1 text-white transition-all rounded shadow-md active:scale-95 bg-slate-700 hover:bg-rose-800 w-fit'>Buscar</button>
        </form>
      </header>
      <hr className='w-full' />
      {!movies && (<strong className='text-2xl font-bold'>No se encontraron resultados</strong>)}
      <section className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {movies && movies.map((movie) => {
          const { Title, Year, imdbID, Type, Poster } = movie
          return (
            <MovieCard
              key={imdbID}
              Title={Title}
              Year={Year}
              imdbID={imdbID}
              Type={Type}
              Poster={Poster}
            />
          )
        })}
      </section>
    </main>
  )
}

export default App
