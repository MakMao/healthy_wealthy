import { ACTIONS } from "../utils/actions"
import {paginate} from '../utils/paginate'


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
  if(action.type === ACTIONS.OPEN_MODAL){
    return {...state, modal_open:true}
  }
  if(action.type === ACTIONS.CLOSE_MODAL){
    return {...state, modal_open:false}
  }
  if(action.type === ACTIONS.LOAD_SINGLE_PRODUCT){
    return {...state, single_product_loading: true}
  }
  if(action.type === ACTIONS.SINGLE_PRODUCT_ERROR){
    return {...state, single_product_error: true}
  }
  if(action.type === ACTIONS.FETCH_SINGLE_PRODUCT){
    return {...state, single_product_loading:false, single_products: action.payload}
  }
  /////// Filter stuff
}

export default products_reducer