import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      marginTop: 'auto',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
    },
    footerTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginLeft: '0.5rem',
    },
    footerText: {
      color: '#AAA',
      fontSize: '0.875rem',
    },
    icon: {
      width: '16px',
      height: '16px',
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
    <footer style={styles.footer}>
      <div style={styles.footerLogo}>
        <LeafIcon />
        <h2 style={styles.footerTitle}>AgroCart</h2>
      </div>
      <p style={styles.footerText}>
        © {new Date().getFullYear()} AgroCart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;