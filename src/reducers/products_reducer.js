import { ACTIONS } from "../utils/actions"

const products_reducer = (state, action) => {
  if(action.type === ACTIONS.LOAD_PRODUCTS_BEGIN) {
    return {...state, products_loading: true}
  }
  if(action.type === ACTIONS.FETCH_PRODUCTS_ERROR){
    return {...state, products_loading:false, products_error: true}
  }
  if(action.type === ACTIONS.FETCH_PRODUCTS_SUCCESS){
      return {...state, products_loading: false, all_products: action.payload}
  }
  if(action.type === ACTIONS.LOAD_SINGLE_PRODUCT){
    return {...state, single_product_loading: true, single_product_error: false}
  }
  if(action.type === ACTIONS.SINGLE_PRODUCT_ERROR){
    return {...state, single_product_error: true, single_product_loading: false}
  }
  if(action.type === ACTIONS.FETCH_SINGLE_PRODUCT){
    return {...state, single_product_loading:false, single_products: action.payload}
  }
  if(action.type === ACTIONS.MENU_OPEN){
    return {...state, open_menu: true}
  }
  if(action.type === ACTIONS.CLOSE_MENU){
    return {...state, open_menu: false}
  }
}

export default products_reducer