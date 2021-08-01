import { useSelector } from "react-redux"
import { Container } from "./styles"
import { FaRegTrashAlt, FaOpencart } from "react-icons/fa";
import { subToCart } from '../../store/modules/cart/actions'
import { useDispatch } from "react-redux";
import { CartVazio } from "./styles";
import './styles.css'
import { Link } from "react-router-dom";
import { CartTotal } from "../../components/CartTotal";


export const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(store => store)

    return (
        <div className="Cart">

            {cart.length === 0
                ?
                <CartVazio>

                    <FaOpencart className="cart" />
                    <h2>Carrinho vazio</h2>
                    <Link to="/">Adicionar produto</Link>

                </CartVazio>
                :
                <div>

                    <CartTotal />
                    {cart.map(el => {
                        return <Container>

                            <div className="imagem">
                                <img src={el.image} />
                            </div>

                            <div className="details">
                                <p className="name">{el.name}</p>
                                <p>Preço: R$ {el.price}</p>
                            </div>

                            <FaRegTrashAlt className="remove" onClick={() => dispatch(subToCart(el.name))} />


                        </Container>


                    })}



                </div>


            }

        </div>
    )
}