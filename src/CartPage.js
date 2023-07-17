import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;