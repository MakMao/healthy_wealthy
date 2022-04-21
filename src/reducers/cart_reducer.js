import {ACTIONS} from '../utils/actions'

const cart_reducer = (state, action) => {
  if(action.type === ACTIONS.ADD_TO_CART){
    const {id, amount, product, mainFlavour} = action.payload
    const tempItem = state.cart.find((i) => i.id === id + mainFlavour)
    if(tempItem){
      const tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === id + mainFlavour){
          let newAmount = cartItem.amount + amount
          return {...cartItem, amount: newAmount}
        }else {
          return cartItem
        }
      })

      return {...state, cart: tempCart}

    }else {
      const newItem = {
        id: id + mainFlavour,
        flavour: mainFlavour,
        amount,
        brand: product.brand,
        name: product.name,
        price: product.price.new,
        price_old: product.price.old ,
        stock: product.stock,
        image: product.images[0]
      }
      return {...state, cart:[...state.cart, newItem]}
    }
  }
  if(action.type === ACTIONS.TOGGLE_AMOUNT){
    const {id, value} = action.payload
    const tempCart = state.cart.map((item) => {
      if(item.id === id) {
        if(value === 'inc') {
          let newAmount = item.amount < item.stock ? item.amount + 1 : item.amount = item.stock
          return {...item, amount: newAmount}
        }
        if(value === 'dec'){
          let newAmount = item.amount - 1
          if(item.amount - 1 < 1){
            newAmount = 1
          }
          return {...item, amount: newAmount}
        }
      }return item
    })
    return {...state, cart: tempCart} 
  }
  if(action.type === ACTIONS.CLEAR_CART){
    return {...state, cart: []}
  }
  if(action.type === ACTIONS.DEL_CART_ITEM){
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return {...state, cart: tempCart}
  }
  if(action.type === ACTIONS.COUNT_CART_ITEMS){
    const {total_amount, total_items, total_discount} = state.cart.reduce((total, item) => {
      const {price, amount, price_old} = item

      total.total_items += amount
      total.total_discount += price_old ? (price_old - price) * amount : null
      total.total_amount += amount * price

      return total
    }, {
      total_amount: 0,
      total_items: 0,
      total_discount: 0
    })
    return {...state, total_items, total_amount, total_discount}
  }

  return {...state}
}

export default cart_reducer