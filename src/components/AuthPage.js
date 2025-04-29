import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AuthPage() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F0F4F8',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: 'white',
      padding: '3rem 2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#2F855A',
      marginBottom: '2rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '6px',
      border: '1px solid #CBD5E0',
      fontSize: '1rem',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#2F855A',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          {isLogin ? 'Login to AgroCart' : 'Sign Up for AgroCart'}
        </h1>
        <form>
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
