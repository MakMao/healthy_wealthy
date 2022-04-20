import React, { useEffect, useContext, useReducer, useState } from 'react'
import { useProductsContext } from './Products_context'
import reducer from '../reducers/filter_reducer'
import { ACTIONS } from '../utils/actions'

const FilterContext = React.createContext()

const brandOptions = [
  { name: "Optimum Nutrition", checked: false },
  { name: "Womens Best", checked: false },
  { name: "Body & Fit", checked: false },
  { name: "BSN", checked: false },
  { name: "Dymatize", checked: false },
  { name: "Dedicated Nutrition", checked: false },
  { name: "Ultravit", checked: false },
  { name: "Swanson", checked: false },
  { name: "Mattison", checked: false },
]

const initialState = {
  products: [],
  user: null,
  modal_open: false,
  filter_products: [],
  sort: 'price-lowest',
  filters: {
    category: 'all',
    search: '',
    review: '',
    subCategory: null,
    brand: null,
    min_price: 0,
    max_price: 0,
    price: 0,
    flavour: 'all',
    discount: false,
    stock: false,
  }
}

export const FilterProvider = ({children}) => {
  const {all_products: products} = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearFilters = () => {
    dispatch({type: ACTIONS.CLEAR_FILTERS, payload: {brands, setBrands}})
  }

  const openModal = () => {
    dispatch({type: ACTIONS.OPEN_MODAL})
  }
  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL})
  }

  const updateSort = (e) => {
    const value = e.target.value
    dispatch({type: ACTIONS.UPDATE_SORT, payload: value})
  }
 
  const brandOptions = [
    { name: "Optimum Nutrition", checked: false },
    { name: "Womens Best", checked: false },
    { name: "Body & Fit", checked: false },
    { name: "BSN", checked: false },
    { name: "Dymatize", checked: false },
    { name: "Dedicated Nutrition", checked: false },
    { name: "Ultravit", checked: false },
    { name: "Swanson", checked: false },
    { name: "Mattison", checked: false },
  ]

  const [brands, setBrands] = useState(brandOptions)
  const [main, setMain] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateFilters= (e) => {
    let name = e.target.name
    let target = e.target.value
    let copyBrands;
    let modifiedBrands;


    if(name === 'category'){
      dispatch({type: ACTIONS.CLEAR_FILTERS, payload: {brands, setBrands}})
      target = e.target.textContent
      console.log(target);
    }
    
    if(name === 'search'){
      console.log(name, target);
    }
    
    if(name === 'flavour'){
      target = e.target.textContent
    }

    if(name === 'review'){
      name = e.target.name
      target = e.target.value
    }
    
    if(name === "price") {
      target = Number(target)
    }

    if(name === 'discount') {
      target = e.target.checked
    }

    if(name === 'stock'){
      target = e.target.checked
    }

    if(name === 'brand'){
        target = e.target.parentElement.firstChild.textContent
        copyBrands = [...brands]
        modifiedBrands = copyBrands.map((product) => {
          if(product.name === target) {
            product.checked = !product.checked
          }
          return product;
        })
    }

    dispatch({type: ACTIONS.UPDATE_FILTERS, payload: {name, target, modifiedBrands}})
  }

  useEffect(() => {
    dispatch({type: ACTIONS.LOAD_PRODUCTS, payload: products})
  }, [products])

  useEffect(() => {
    dispatch({type: ACTIONS.FILTER_PRODUCTS, payload: {brands}})
    dispatch({type: ACTIONS.SORT_PRODUCTS})
  }, [products, state.sort, state.filters])

  const handleWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    dispatch({type: ACTIONS.CLOSE_MODAL})
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [])


  const value = {
    ...state,
    updateSort,
    updateFilters,
    brands,
    openModal,
    closeModal,
    windowWidth,
    setWindowWidth,
    handleWidth,
    clearFilters,
    main,
    setMain
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}