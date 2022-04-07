import { useState } from 'react'

const InitialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(InitialState);
    
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((product,index)=>index !== indexValue)
        });
    };

    return {
        state,
        addToCart,
        removeFromCart
    }
}



export default useInitialState;