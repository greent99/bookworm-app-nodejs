import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AppContext from "../../context/AppContext";

function Navbar(props) {
  const {cart} = useContext(AppContext)

  return (
    (
      <nav id="navbar">
        <div class="navbar-title">
          <p>BOOKWORM</p>
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
            <li>Cart({cart.length})</li>
          </Link>
        </ul>
      </nav>
    )
  );
}

export default Navbar