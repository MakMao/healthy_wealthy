import React, { useContext, useEffect, useReducer } from "react"
import reducer from "../reducers/products_reducer"
import { ACTIONS } from "../utils/actions"
import axios from "axios"
import {paginate} from '../utils/paginate'


const initialState = {
  // products: [],
  products_loading: false,
  products_error: false,
  discounted_products:[], 
  all_products: [],
  modal_open: false,
  single_product_loading: false,
  single_products: [],
  single_product_error: false,
  //filter
  default_products: [],
  filter_products: [],
  sort: 'price-lowest'
}

const ProductsContext = React.createContext()

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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
    try {
      const res = await axios.get(url)
      const singleProduct = res.data[0]
      // console.log(singleProduct);
      dispatch({type: ACTIONS.FETCH_SINGLE_PRODUCT, payload: singleProduct})
    } catch (error) {
      dispatch({type: ACTIONS.SINGLE_PRODUCT_ERROR})
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const openModal = () => {
    dispatch({type: ACTIONS.OPEN_MODAL})
  }
  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL})
  }

  ///////////// Filter Stuff

  const updateSort = (e) => {
    // const name = e.target.name
    const value = e.target.value
    // dispatch({type: ACTIONS.UPDATE_SORT, payload: value})
    console.log(value);
  }


  return (
    <ProductsContext.Provider value={{
      ...state,
      openModal,
      closeModal,
      fetchSingleProduct,
      updateSort
    }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () =>{
  return useContext(ProductsContext)
}