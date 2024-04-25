import { useContext } from 'react'
import { CartContext } from '../context/cart'

//
export function useCart () {
  const context = useContext(CartContext)

  if (context === undefined) {
    // Quiere decir que se está intentando usar el hook fuera de un CartProvider
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
