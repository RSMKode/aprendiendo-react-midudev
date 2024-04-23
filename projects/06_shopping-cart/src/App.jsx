import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header/Header'
import { Products } from './components/Products/Products'
import { Footer } from './components/Footer/Footer'
import { IS_DEVELOPMENT } from '../config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/cart'

console.log({ IS_DEVELOPMENT, mode: import.meta.env.MODE })

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts({ products: initialProducts })

  return (
    <main>
      <Header />
      <CartProvider>
        <Cart />
        <Products products={filteredProducts} />
      </CartProvider>
      {IS_DEVELOPMENT && <Footer />}
    </main>
  )
}

export default App
