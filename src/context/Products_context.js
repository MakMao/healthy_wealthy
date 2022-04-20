import React, { useContext, useEffect, useReducer, useState } from "react"
import reducer from "../reducers/products_reducer"
import { ACTIONS } from "../utils/actions"
import axios from "axios"


const initialState = {

  products_loading: false,
  products_error: false,
  discounted_products:[], 
  all_products: [],
  single_product_loading: false,
  single_products: [],
  single_product_error: false,
  open_menu: false
}

const ProductsContext = React.createContext()

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const fetchData = async () => {
    dispatch({type: ACTIONS.LOAD_PRODUCTS_BEGIN})
    try {
      const data = await axios.get('https://my-protein-api.herokuapp.com/products')
      const products = data.data
      dispatch({type: ACTIONS.FETCH_PRODUCTS_SUCCESS, payload: products})
    } catch (error) {
      dispatch({type: ACTIONS.FETCH_PRODUCTS_ERROR})
    }
  }

  const fetchSingleProduct = async (url) => {
    dispatch({type: ACTIONS.LOAD_SINGLE_PRODUCT})
      const res = await axios.get(url)
      const singleProduct = res.data[0]
      if(singleProduct){
        dispatch({type: ACTIONS.FETCH_SINGLE_PRODUCT, payload: singleProduct})
      }else {
        dispatch({type: ACTIONS.SINGLE_PRODUCT_ERROR})
      }
  }

  const openMenu = () => {
    dispatch({type: ACTIONS.MENU_OPEN})
  }

  const closeMenu = () => {
    dispatch({type: ACTIONS.CLOSE_MENU})
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    dispatch({type: ACTIONS.CLOSE_MENU})
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [windowWidth > 768])

  const value = {
    ...state,
    fetchSingleProduct,
    openMenu,
    closeMenu
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () =>{
  return useContext(ProductsContext)
}