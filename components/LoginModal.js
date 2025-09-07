import React, { useState } from 'react';

const LoginModal = ({ open, onClose, onLoginSuccess }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!open) return null;

  const validatePhone = (value) => {
    const regex = /^[0-9]{0,10}$/;
    return regex.test(value);
  };

  const handlePhoneChange = (e) => {
    if (validatePhone(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Phone number must be exactly 10 digits');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    setError('');
    onLoginSuccess();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter 10-digit phone"
              maxLength={10}
              style={styles.input}
              autoFocus
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.buttonPrimary}>Login</button>
            <button
              type="button"
              onClick={onClose}
              style={styles.buttonSecondary}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    padding: '25px 30px',
    borderRadius: '10px',
    width: '320px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
    color: '#ffffff',
  },
  label: {
    color: '#cccccc',
    fontSize: '14px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginTop: '6px',
    backgroundColor: '#2c2c2c',
    color: '#ffffff',
    border: '1px solid #555',
    borderRadius: '4px',
    outline: 'none',
  },
  error: {
    color: '#ff6b6b',
    marginBottom: '12px',
    textAlign: 'center',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  buttonPrimary: {
    backgroundColor: '#bb86fc',
    color: '#121212',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#bb86fc',
    border: '1px solid #bb86fc',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
};

export default LoginModal;
