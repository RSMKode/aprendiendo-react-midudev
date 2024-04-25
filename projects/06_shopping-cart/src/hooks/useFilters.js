import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

//
export function useFilters () {
  const context = useContext(FiltersContext)

  if (context === undefined) {
    // Quiere decir que se está intentando usar el hook fuera de un FiltersProvider
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  const { filters, setFilters } = context

  const filterProducts = ({ products }) => {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category)
    })
  }

  return { filterProducts, filters, setFilters }
}
