import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing({ onPageChange }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/home');
  };
  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
    },
    hero: {
      backgroundColor: '#2F855A',
      padding: '4rem 1rem',
      color: 'white',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      color: '#E8F5E9',
    },
    button: {
      backgroundColor: 'white',
      color: '#2F855A',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      margin: '0 0.5rem',
    },
    darkButton: {
      backgroundColor: '#1B5E20',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      margin: '0 0.5rem',
    },
    featuresSection: {
      padding: '4rem 1rem',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#333',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    featureCard: {
      backgroundColor: '#E8F5E9',
      padding: '1.5rem',
      borderRadius: '8px',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      color: '#333',
    },
    featureDescription: {
      color: '#666',
      lineHeight: '1.5',
    },
    productsSection: {
      backgroundColor: '#F1F8E9',
      padding: '4rem 1rem',
    },
    productsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
    },
    productCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    productTitle: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#333',
    },
    ctaSection: {
      padding: '4rem 1rem',
      textAlign: 'center',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '2rem 1rem',
      textAlign: 'center',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
    },
    footerTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginLeft: '0.5rem',
    },
    footerText: {
      color: '#AAA',
      fontSize: '0.875rem',
    },
    icon: {
      width: '20px',
      height: '20px',
      marginRight: '8px',
    }
  };

  const LeafIcon = () => (
    <svg
      style={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 4 13A7 7 0 0 1 15 6.1L18 3.1" />
      <path d="M14 7.5C16.2 9.7 17 12.3 16.2 15.5C15.3 19 12 21.3 8.5 20.5C7.1 20.2 5.5 19.5 4.5 18.7" />
    </svg>
  );

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.title}>Welcome to AgroCart</h1>
          <p style={styles.subtitle}>
            Your trusted marketplace for farm-fresh produce and agricultural products
          </p>
          <div>
            <button style={styles.button} onClick={handleLogin}>Login</button>
            <button style={styles.darkButton} onClick={handleSignup}>Sign Up</button>
          </div>
        </div>
      </div>

      <div style={styles.featuresSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Why Choose AgroCart?</h2>
          
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Farm Fresh Quality</h3>
              <p style={styles.featureDescription}>
                Products sourced directly from local farmers ensuring the freshest produce available.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Sustainable Practices</h3>
              <p style={styles.featureDescription}>
                Support eco-friendly farming methods and reduce carbon footprint with our efficient delivery system.
              </p>
            </div>
            
            <div style={styles.featureCard}>
              <h3 style={styles.featureTitle}>Support Local Farmers</h3>
              <p style={styles.featureDescription}>
                Every purchase directly supports local agricultural communities and family-owned farms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.productsGrid}>
  <div style={styles.productCard}>
    <img 
      src="https://images.squarespace-cdn.com/content/v1/5b35b18af93fd4d75e591f4a/1543985750553-I04QXF6GJ02X1UWC316A/HS-Website---Seeds%2C-Grains%2C-Paste-%26-Beans.jpg?format=2500w"
      alt="Grains & Seeds"
      style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '1rem' }}
    />
    <h3 style={styles.productTitle}>Grains & Seeds</h3>
  </div>

  <div style={styles.productCard}>
    <img 
      src="data:image/jpeg;base64,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" // replace with your image URL
      alt="Agricultural Tools"
      style={{ width: '100%', height: '150px', borderRadius: '6px', marginBottom: '1rem' }}
    />
    <h3 style={styles.productTitle}>Agricultural Tools</h3>
  </div>
</div>


      <div style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ready to experience farm-fresh quality?</h2>
          <button 
            style={styles.darkButton} 
            onClick={handleSignup}
          >
            Start Shopping Now
          </button>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerLogo}>
            <LeafIcon />
            <h2 style={styles.footerTitle}>AgroCart</h2>
          </div>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} AgroCart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}