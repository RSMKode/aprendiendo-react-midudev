import './Products.css'
// import { AddToCartIcon } from '../Icons.jsx'
import { Product } from '../Product/Product.jsx'

export function Products ({ products }) {
  return (
    <section className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            {/* <article className='product'>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - <span>${product.price}</span>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </article> */}
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
