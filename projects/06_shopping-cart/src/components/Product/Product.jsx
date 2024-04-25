import './Product.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

export function Product ({ product }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) =>
    cart.some((item) => item.id === product.id)

  const isProductInCart = checkProductInCart(product)

  const { title, price, thumbnail } = product

  return (
    <article className='product'>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - <span>${price}</span>
      </div>
      {/* <div>
              <p>{description}</p>
            </div> */}
      <div>
        <button
          style={{ backgroundColor: isProductInCart && 'slategray' }}
          onClick={() => {
            isProductInCart
              ? removeFromCart(product)
              : addToCart(product)
          }}
        >
          {isProductInCart
            ? <RemoveFromCartIcon />
            : <AddToCartIcon />}
        </button>
      </div>
    </article>
  )
}
