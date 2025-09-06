import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import CartSummary from './CartSummary';

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>Home</div>
      <div className="header-right">
        {!isLoggedIn ? (
          <button onClick={() => navigate('/login')}>Login</button>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
        <div className="cart-icon">
          🛒 <span>{isLoggedIn ? totalQuantity : 0}</span>
          {isLoggedIn && <CartSummary />}
        </div>
      </div>
    </header>
  );
};

export default Header;
