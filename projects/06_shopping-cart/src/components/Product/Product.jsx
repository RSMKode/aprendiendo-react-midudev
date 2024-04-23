import { AddToCartIcon } from '../Icons'

export function Product ({ product }) {
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
        <button>
          <AddToCartIcon />
        </button>
      </div>
    </article>
  )
}
