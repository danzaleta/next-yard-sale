import { useState } from 'react';

const InitialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const [logged, setLogged] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  
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

  const addOrder = (newOrder)=>{
    setOrders([
      newOrder,
      ...orders,
    ]);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    toggleMenu,
    toggleOrders,
    setToggleMenu,
    setToggleOrders,
    logged,
    setLogged,
    orders,
    addOrder,
  };
};

export default useInitialState;
