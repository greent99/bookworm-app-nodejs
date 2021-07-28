import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CartContext } from "../../context/CartContext";

function Navbar(props) {
  const { cartItems } = useContext(CartContext);
  const url_detail = `http://localhost:3001`
  return (
    (
      <nav id="navbar">
        <div class="navbar-title">
          <a href={url_detail} style={{width: 1, height: 1}}>BOOKWORM</a>
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cart">
            <li>Cart({cartItems.length})</li>
          </Link>
        </ul>
      </nav>
    )
  );
}

export default Navbar