import { Container } from "./styles"
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

export const Nav = () => {

    return (
        <Container 
        >
            <Link to="/">
                <AiFillHome/>
            </Link>

            <Link to="/user">
                <FaUserAlt/>
            </Link>

            <Link to="/cart">
                <FaShoppingCart/>
            </Link>
        </Container>
    )
}