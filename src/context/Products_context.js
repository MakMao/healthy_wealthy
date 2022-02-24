import React, {useContext, useEffect, useReducer} from "react";

const ProductContext = React.createContext()

const initialState = {
  products: [],
  is_loading: false,
  is_error: false,
}

const reducer = () => {}

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    const res = await fetch('https://my-protein-api.herokuapp.com/products')
    const data = await res.json()
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ProductContext.Provider value={{
      ...state,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return useContext(ProductContext)
}
