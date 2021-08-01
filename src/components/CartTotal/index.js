import { Container } from "./styles"
import { useSelector } from "react-redux"

export const CartTotal = () => {
    const {cart} = useSelector(store=>store)
    const total = cart.reduce((acumulador, valorAtual)=>{
        return acumulador + valorAtual.price
    }, 0)

    return(
        <Container>

            <h3>Total: {total.toFixed(2)}</h3>

        </Container>
        
    )
}