import { addCart, subCart } from "./actionType"

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case addCart:
            const {product} = action    
            return[...state, product]
        
        case subCart:
            const { name } = action
            const list = state.filter(product => product.name !== name)
            return list

        default:
            return state
    }
}