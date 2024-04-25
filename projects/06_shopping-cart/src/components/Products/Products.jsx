import './Products.css'
// import { AddToCartIcon } from '../Icons.jsx'
import { Product } from '../Product/Product.jsx'

export function Products ({ products }) {
  return (
    <section className='products'>
      <ul>
        {products.slice(0, 50).map(product => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
