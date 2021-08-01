import { useSelector } from "react-redux"
import { Container } from "./styles"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/modules/cart/actions"
import { useState } from "react"



export const Home = () => {

    const { product } = useSelector(store => store)
    const dispatch = useDispatch()

    return (
        <Container>
                {product.map((el) => {
                    return <div className="Phone">
                        <img src={el.image} />
                        <p>{el.name}</p>
                        <p className="Price">R$ {el.price}</p>
                        <button onClick={() => dispatch(addToCart(el))}>Comprar</button>
                    </div>
                })}


        </Container>
            )
}