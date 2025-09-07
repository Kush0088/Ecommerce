import React from 'react';

const initialProducts = [
  { id: 1, name: 'Headphone', price: 1500, image: '/images/product1.jpeg' },
  { id: 2, name: 'Makeup', price: 1800, image: '/images/product2.jpeg' },
  { id: 3, name: 'Purse', price: 200, image: '/images/product3.jpeg' },
  { id: 4, name: 'Shampoo', price: 399, image: '/images/product4.jpeg' },
  { id: 5, name: 'Perfume', price: 699, image: '/images/product5.jpeg' },
  { id: 6, name: 'Showpiece', price: 799, image: '/images/product6.jpeg' },
  { id: 7, name: 'Shoes', price: 1200, image: '/images/product7.jpeg' },
  { id: 8, name: 'Lens', price: 4000, image: '/images/product8.jpeg' },
];

const ProductList = ({ isLoggedIn, cart, setCart }) => {
  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert('Please login to add to cart');
      return;
    }
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: { ...product, quantity: 1 },
    }));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      const updated = { ...prevCart };
      if (!updated[productId]) return updated;

      updated[productId].quantity += delta;
      if (updated[productId].quantity <= 0) {
        delete updated[productId];
      }
      return updated;
    });
  };

  return (
    <div style={styles.container}>
      {initialProducts.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          {cart[product.id] ? (
            <div style={styles.qtyControls}>
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{cart[product.id].quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToCart(product)} style={styles.addToCartBtn}>
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '40px',
  },
  card: {
    border: '1px solid #444',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
  },
  addToCartBtn: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#bb86fc',
    color: '#121212',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  qtyControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '10px',
  },
};


export default ProductList;
