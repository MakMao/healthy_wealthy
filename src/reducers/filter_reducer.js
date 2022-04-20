import { ACTIONS } from "../utils/actions"

const filter_reducer = (state, action) => {
  if(action.type === ACTIONS.LOAD_PRODUCTS){
    let maxPrice = action.payload.map((i) => i.price.new)
    maxPrice = Math.max(...maxPrice)
    return {...state, products:[...action.payload], filter_products:[...action.payload], filters:{...state.filters, max_price: maxPrice, price: maxPrice}}
  }
  if(action.type === ACTIONS.OPEN_MODAL){
    return {...state, modal_open:true}
  }
  if(action.type === ACTIONS.CLOSE_MODAL){
    return {...state, modal_open:false}
  }
  if(action.type === ACTIONS.UPDATE_SORT) {
    return {...state, sort: action.payload}
  }
  if(action.type === ACTIONS.SORT_PRODUCTS) {
    const {sort, filter_products} = state
    let newList = [...filter_products]
    if(sort === 'price-lowest'){
      newList = filter_products.sort((a, b) => {
        return a?.price.new - b?.price.new
      })
    }
    if(sort === 'price-highest'){
      newList = filter_products.sort((a, b) => {
        return b?.price.new - a?.price.new
      })
    }
    if(sort === 'name-az'){
      newList = filter_products.sort((a, b) => {
        return a?.name.localeCompare(b.name)
      })
    }
    return {...state, filter_products: newList}
  }
  if(action.type === ACTIONS.UPDATE_FILTERS){
    const {name, target, modifiedBrands} = action.payload
    return {...state, filters:{...state.filters, [name]: target, brand: modifiedBrands}}
  }

  if(action.type === ACTIONS.FILTER_PRODUCTS) {
    const {products} = state
    const {brands} = action.payload
    const {category, review, brand, price, search, discount, stock} = state.filters

    let tempProducts = [...products]
    if(search) {
      tempProducts = tempProducts.filter((item) => {
        return item.name.toLowerCase().includes(search)
      })
    }

    if(category !== 'all'){
      console.log(category);
      tempProducts =  tempProducts.filter((product) => product?.categories.main === category)
    }

    
    if(review) {
      tempProducts = tempProducts.filter((item) => item.reviews.rating >= review)
    }

    if(brand !== null){
      let newTempProducts = brands.filter((item) => item.checked).map((i) => i.name)
      if(newTempProducts.length > 0) {
        tempProducts = tempProducts.filter((product) => newTempProducts.includes(product.brand))
      }
    }

    tempProducts = tempProducts.filter((product) => product.price.new <= price)

    if(discount){
      tempProducts = tempProducts.filter((product) => product.price.discount === true)
      console.log(tempProducts);
    }

    if(stock){
      tempProducts = tempProducts.filter((item) => item.stock !== 0)
    }
    
    return {...state, filter_products: tempProducts}
  }
  
  if(action.type === ACTIONS.CLEAR_FILTERS){
    const {brands} = action.payload

    return {...state,
    filters : {
      ...state.filters,
      category: 'all',
      brand: brands.map((item) => item.checked = false),
      price: state.filters.max_price,
      review: '',
      stock: false,
      flavour: 'all',
      discount: false,
      search: ''
    }}
  }

  return state
}

export default filter_reducer