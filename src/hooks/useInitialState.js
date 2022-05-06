import { useState } from 'react';

const InitialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const [logged, setLogged] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);
  
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((product, index) => index !== indexValue),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleMenu,
    toggleOrders,
    toggleAccount,
    setToggleMenu,
    setToggleOrders,
    setToggleAccount,
    logged,
    setLogged,
  };
};

export default useInitialState;
