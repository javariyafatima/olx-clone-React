import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;