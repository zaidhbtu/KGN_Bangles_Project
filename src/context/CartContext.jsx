import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("myCart");
    if(newCartData == []){
        return [];
    }else{
        return JSON.parse(newCartData);
    }
}
const initialState = {
    //cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50,
}
const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const addToCart = (id,col,amount,product) => {
        //Add Product to cart
        //Update cart Product
        dispatch({type: "ADD_TO_CART", payload: {id,col,amount,product} });

    }

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id});
    }

    // to clear the cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"});
    }

    // to add the data in localStorage
    //get ya set
    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    },[state.cart]);
    
    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart}}>
          {children}
       </CartContext.Provider>
    );
};
const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};