import { useFilters } from '../../hooks/useFilters'
import { useCart } from '../../hooks/useCart'
import './Footer.css'

export function Footer () {
  // const { filters } = useFilters()
  const { cart } = useCart()
  console.log({ cart })

  return (
    <footer className='footer'>
      {/* <span>
        {JSON.stringify(filters, null, 2)}
      </span>
      <span>
        {JSON.stringify(cart, null, 2)}
      </span> */}
      <h4>Prueba técnica de React ⚛️ - <span>@RSMKode</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
