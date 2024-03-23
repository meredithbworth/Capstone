import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';

const CartComponent = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            <button onClick={() => handleAddToCart(item.id)}>Add</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
    </div>
  );
};

export default CartComponent;
