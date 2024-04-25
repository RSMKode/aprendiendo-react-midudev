import './Cart.css'
import { useId } from 'react'
import { ClearCartIcon, CartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

function CartItem ({ product }) {
  const { title, price, thumbnail, quantity } = product
  const { addToCart, removeFromCart } = useCart()

  return (
    <article className='cart-item'>
      <header>
        <img src={thumbnail} alt={title} />
      </header>
      <section>
        <strong>PC</strong> - <span>${price}</span>
      </section>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>
        <button onClick={() => removeFromCart(product)}>-</button>
      </footer>
    </article>
  )
}

export function Cart () {
  const { cart, clearCart } = useCart()
  const cartCheckboxId = useId('cart-')

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        <input id={cartCheckboxId} type='checkbox' hidden />
      </label>
      <aside className='cart'>
        <header>
          <button onClick={clearCart}>
            <ClearCartIcon />
            {/* Clear Cart */}
          </button>
        </header>
        <ul>
          {cart.length === 0 && <li>Cart is empty</li>}
          {cart.length > 0 &&
            cart.map((product) => (
              <li key={product.id}>
                <CartItem
                  product={product}
                />
              </li>
            ))}
        </ul>
      </aside>
    </>
  )
}
