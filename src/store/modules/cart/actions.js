import { addCart, subCart } from "./actionType"

export const addToCart = (product) => {
    return {type: addCart, product}
}

export const subToCart = (name) => {
    return {type: subCart, name}
}