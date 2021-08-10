import { addCart, subCart } from "./actionType"

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case addCart:
            const {product} = action 
            const lista = JSON.parse(localStorage.getItem('cart')) || [];
            const novaList = [...state, product]
            localStorage.setItem('cart', JSON.stringify(novaList))
            return[...state, product]
        
        case subCart:
            const { name } = action
            const list = state.filter(product => product.name !== name)
            return list

        default:
            return state
    }
}