export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) =>
  window.localStorage.setItem('cart', JSON.stringify(state))

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  let newCart

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)
      if (productInCartIndex >= 0) {
        // una forma seria usando structuredClone
        newCart = structuredClone(state)
        newCart[productInCartIndex].quantity++
      } else {
        // si el producto no esta en el carrito
        newCart = [...state, { ...actionPayload, quantity: 1 }]
      }
      break
    }
    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)
      if (productInCartIndex >= 0) {
        newCart = structuredClone(state)
        newCart[productInCartIndex].quantity--
        if (newCart[productInCartIndex].quantity === 0) {
          newCart.splice(productInCartIndex, 1)
        }
      } else {
        newCart = state
      }
      break
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      newCart = []
      break
    }
    default:
      newCart = state
  }
  updateLocalStorage(newCart)
  return newCart
}

// * Posible test de que el reducer funcione correctamente al añadir un producto al carrito
// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
//   .toEqual([{ id: 1, quantity: 1 }])
// )
// * Si estuviera la logica dentro del componente habría que reenderizarlo para testearlo
