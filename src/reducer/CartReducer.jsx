import React from 'react'

const CartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART") {

        let {id,col,amount,product} = action.payload;

        let cartProduct;
        cartProduct = {
            id: id + col,
            name: product.name,
            col,
            amount,
            image: product.image,
            price: product.price,
            max: product.stock,

        }
        return {
            ...state,
            cart : [...state.cart, cartProduct],
        };
    }

    
    if(action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter(
            (curItem) => curItem.id !== action.payload
        );


        return {
            ...state,
            cart: updatedCart,
        }
    }

    // to clear the Cart
    if(action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }

  return state;
}

export default CartReducer
