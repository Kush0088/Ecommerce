import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const ProductCard = ({ id, name, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);

  const handleAdd = () => {
    if (isLoggedIn) {
      addToCart({ id, name, image, quantity });
    } else {
      alert('Please login first!');
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <div className="qty-control">
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}>+</button>
      </div>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
