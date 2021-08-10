import { Container } from "./styles"
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";

export const Nav = () => {

    return (
        <Container 
        >
            <NavLink activeClassName="selected" exact to="/">
                <AiFillHome/>
            </NavLink>

            <NavLink activeClassName="selected" exact to="/user">
                <FaUserAlt/>
            </NavLink>

            <NavLink activeClassName="selected" exact to="/cart">
                <FaShoppingCart/>
            </NavLink>
        </Container>
    )
}