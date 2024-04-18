import { useState, useEffect, useRef } from 'react'
import './App.css'

import { useMappedMovies } from './hooks/useMappedMovies'
import { useMovieData } from './hooks/useMovieData'

import MovieContainer from './components/MovieContainer'

function useQuery () {
  const [query, setQuery] = useState('')
  const [inputError, setInputError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    // Evitar que se ejecute la validacion en el primer render
    if (isFirstInput.current) {
      isFirstInput.current = query === ''
      console.log({ isFirstInput })
      return
    }

    if (query === '') {
      setInputError('Debes ingresar un término de búsqueda')
      return
    }
    if (query.length < 3) {
      setInputError('Debes ingresar al menos 3 caracteres')
    }
    setInputError('')
  }, [query])

  return { query, updateQuery: setQuery, inputError }
}

function App () {
  const { query, updateQuery, inputError } = useQuery()

  const { responseData } = useMovieData({ query })
  console.log({ query, responseData })

  const handleSubmit = (event) => {
    // Evitar que el formulario recargue la página
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    // En la validacion controlada (por react) se puede hacer una prevalidacion facilmente
    // Si el primer caracter es un espacio, no se permite
    if (newQuery.startsWith(' ')) return
    updateQuery(newQuery)
  }

  const movieData = responseData?.movies
  const { movies } = useMappedMovies({ movies: movieData })

  const errorMessage = responseData?.error

  return (
    <main className='flex flex-col items-center w-full max-w-5xl min-h-screen gap-4 p-4 mx-auto'>
      <header className='flex flex-col gap-1'>
        <h2 className='text-2xl font-bold'>Prueba técnica</h2>
        <h1 className='text-3xl font-bold uppercase'>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-4 border-2 rounded-lg shadow-white hover:[box-shadow:_0_0_5px_var(--tw-shadow-color)] transition duration-300'>
          <label className='flex flex-col gap-1'>
            <span className='text-xl'>Buscar película</span>
            <input
              value={query} onChange={handleChange}
              name='query'
              type='text' placeholder='Avengers, Star Wars...'
              className='px-2 py-1 rounded'
            />
            {inputError && <span className='text-red-600'>{inputError}</span>}
          </label>
          <button type='submit' className='px-4 py-1 text-white transition-all rounded shadow-md active:scale-95 border border-transparent bg-slate-700 hover:border-current w-fit hover:shadow-current hover:[box-shadow:_0_0_5px_var(--tw-shadow-color)]'>Buscar</button>
        </form>
      </header>
      {errorMessage && <p className='text-red-600'>{errorMessage}</p>}
      {movies && movies.length > 0 && <hr className='w-full' />}
      <MovieContainer movies={movies} />
    </main>
  )
}

export default App
