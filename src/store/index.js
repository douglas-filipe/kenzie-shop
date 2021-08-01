import { createStore, combineReducers } from 'redux'

import { productReducer } from './modules/products/reducer'

import { cartReducer } from './modules/cart/reducer'

const reducers = combineReducers({
    product: productReducer,
    cart: cartReducer
})

export const store = createStore(reducers)