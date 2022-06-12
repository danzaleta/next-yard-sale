import { useState } from 'react';
import axios from 'axios';

const InitialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(InitialState);
  const [logged, setLogged] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('All');
  
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

  const getProducts = (API) => {
    async function fetchData() {
      const response = await axios.get(API);
      setProducts(response.data);
      setFiltered(response.data);
    }
    fetchData();
  };

  const filterByCategory = (category, toFilter)=>{
    if(category === 'All'){
      setFiltered(products);
      console.log('Filteeeeeer');
    }else{
      const newList = toFilter.filter((product)=>product?.category?.name == category);
      setFiltered(newList);
    }
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
    getProducts,
    products,
    filterByCategory,
    filtered,
    category,
    setCategory
  };
};

export default useInitialState;
