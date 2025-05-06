import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cartbg from './cartbg.jpg';

const initialCart = [
  { id: 1, name: 'Grains & Seeds', price: 20, quantity: 1 },
  { id: 2, name: 'Agricultural Tools', price: 50, quantity: 2 }
];

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCart);

  const updateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const CheckOut = () => {
    navigate('/payment');
    
  }

  return (
    <div style={styles.pageBackground}>
      <div style={styles.container}>
        <div style={styles.header}>
          <button 
            onClick={() => navigate('/home')} 
            style={styles.backButton}
          >
            ← Back to Shopping
          </button>
          <h2 style={styles.heading}>Your Cart</h2>
        </div>
        
        {cartItems.length === 0 ? (
          <div style={styles.emptyCart}>
            <p>Your cart is empty.</p>
            <button 
              onClick={() => navigate('/')} 
              style={styles.continueShoppingBtn}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div style={styles.cartList}>
              {cartItems.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} each</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, e.target.value)}
                    style={styles.quantityInput}
                  />
                  <button onClick={() => removeItem(item.id)} style={styles.removeBtn}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
              
            <div style={styles.totalSection}>
              <h3>Total:₹{total.toFixed(2)}</h3>
              <button onClick = {CheckOut} style={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageBackground: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${cartbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '2rem',
    color: '#fff',
  },
  
  container: {
    maxWidth: '800px',
    width: '100%',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginBottom: '1.5rem',
  },
  
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    background: 'none',
    border: 'none',
    color: '#fff',
    padding: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  
  itemDetails: {
    flex: 2,
  },
  
  quantityInput: {
    width: '60px',
    padding: '0.25rem',
    textAlign: 'center',
    marginRight: '1rem',
  },
  
  removeBtn: {
    backgroundColor: '#E53E3E',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  
  totalSection: {
    marginTop: '2rem',
    textAlign: 'right',
  },
  
  checkoutBtn: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2F855A',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },

  emptyCart: {
    textAlign: 'center',
    padding: '2rem 0',
  },

  continueShoppingBtn: {
    marginTop: '1rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2F855A',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};