import './Cart.css'
import { useId, useContext } from 'react'
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from '../Icons'

import { CartContext } from '../../context/cart'

function CartItem ({ product }) {
  const { title, price, thumbnail, quantity } = product

  const miau = useContext(CartContext)

  console.log({ miau })
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
        <button>+</button>
      </footer>
    </article>
  )
}

export function Cart () {
  const cartCheckboxId = useId('cart-')

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        <input id={cartCheckboxId} type='checkbox' hidden />
      </label>
      <aside className='cart'>
        <ul>
          <li>
            <CartItem product={{ title: 'Laptop', price: 1000, thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg', quantity: 1 }} />
          </li>
          <hr />
          <li>
            <CartItem product={{ title: 'Laptop', price: 1000, thumbnail: 'https://cdn.dummyjson.com/product-images/8/thumbnail.jpg', quantity: 1 }} />
          </li>
          <hr />
        </ul>
      </aside>
    </>
  )
}
