import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const CartSummary = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-summary">
      <h4>Cart Items</h4>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <div>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartSummary;
