import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  //   const [category, setCategory] = useState(['all', 'All'])

  const handleChengeMinPrice = (event) => {
    // aqui hay 2 fuentes de la verdad
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChengeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <label htmlFor={minPriceFilterId}>
        <span>Min Price</span>
        <input
          id={minPriceFilterId}
          type='range' min='0' max='2000'
          onChange={handleChengeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </label>

      <label htmlFor={categoryFilterId}>
        {/* <span>{category[0]} {category[1]}</span> */}
        <span>Category</span>
        <select id={categoryFilterId} onChange={handleChengeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </label>

    </section>
  )
}
