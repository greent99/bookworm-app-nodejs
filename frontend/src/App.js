
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import BookDetail from "./components/BookDetail/BookDetail";
import Cart from "./components/Cart";
import About from "./components/About";

function App (props) {
  const [bootcamp, setBootcamp] = useState("Rookies");
  const [homeClass, setHomeClass] = useState("");

  function handleSearchKey(e) {
    console.log(e.target.value);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/book">
          <BookDetail />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        {/* <Route path="**" render={() => <h1>Route not found!</h1>}></Route> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
