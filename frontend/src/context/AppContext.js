import { createContext } from "react";

const AppContext = createContext({
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
})

export default AppContext