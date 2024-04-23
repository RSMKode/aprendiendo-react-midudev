import { createContext, useState } from 'react'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      // una forma seria usando structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity++
      setCart(newCart)
    } else {
      // si el producto no esta en el carrito
      setCart(prevState => ([...prevState, { ...product, quantity: 1 }]))
    }
  }

  const removeFromCart = (productId) => {

  }

  const clearCart = () => {
    setCart([])
  }
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
