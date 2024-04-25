import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cartReducer'

// 1. Crear contexto
export const CartContext = createContext()

function useCartReducer () {
  // Esto es indicado cuando los estados y su alteración son complejos y asi la logica la sacas fuera del componente
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return { cart: state, addToCart, removeFromCart, clearCart }
}

// 2. Crear provider
// la dependencia de usar React Context es MINIMA
export function CartProvider ({ children }) {
  //* Anterior forma de manejar el estado
  // const [cart, setCart] = useState([])
  //* Funciones anteriores
  // const addToCart = (product) => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   if (productInCartIndex >= 0) {
  //     // una forma seria usando structuredClone
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity++
  //     return setCart(newCart)
  //   }
  //   // si el producto no esta en el carrito
  //   setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
  // }
  // const removeFromCart = (product) => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity--
  //     if (newCart[productInCartIndex].quantity === 0) {
  //       newCart.splice(productInCartIndex, 1)
  //     }
  //     setCart(newCart)
  //   }
  // }
  // const clearCart = () => {
  //   setCart([])
  // }

  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
