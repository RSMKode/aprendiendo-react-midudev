import { createContext, useState } from 'react'

// Singleton -> Modulo de javaScript

// 1. Crear el Contexto
// Este es el que tenemos que consumir en los componentes
export const FiltersContext = createContext()

// 2. Crear el Provider
// Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 500
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
