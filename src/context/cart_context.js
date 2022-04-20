import React, {useContext, useEffect, useReducer} from 'react'
import reducer from '../reducers/cart_reducer'
import {ACTIONS} from '../utils/actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  }else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_amount: 0,
  total_items: 0,
  total_discount: 0,
  shipping_fee: 495
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, amount, product, mainFlavour) => {
    dispatch({type: ACTIONS.ADD_TO_CART, payload: {id, amount, product, mainFlavour}})
  }

  const toggleAmount = (id, value) => {
    dispatch({type: ACTIONS.TOGGLE_AMOUNT, payload: {id, value}})
  }

  const clearCart = () => {
    dispatch({type: ACTIONS.CLEAR_CART})
  }

  const delCartItem = (id) => {
    dispatch({type: ACTIONS.DEL_CART_ITEM, payload: id })
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({type: ACTIONS.COUNT_CART_ITEMS})
  }, [state.cart, state.total_amount, state.total_discount, state.total_items])

  const value = {
    ...state,
    addToCart,
    toggleAmount,
    clearCart,
    delCartItem,
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}