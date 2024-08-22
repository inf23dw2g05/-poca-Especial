import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Cart');
        setCartItems(response.data);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>Produto ID: {item.productId} - Quantidade: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;