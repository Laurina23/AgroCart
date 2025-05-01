import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      margin: 0,
      marginLeft: '0.5rem',
    },
    nav: {
      display: 'flex',
      gap: '1rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    content: {
      flex: 1,
      padding: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      width: '100%',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#333',
      borderBottom: '2px solid #2F855A',
      paddingBottom: '0.5rem',
    },
    section: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#444',
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '1rem',
    },
    icon: {
      width: '20px',
      height: '20px',
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

  const handleHome = () => {
    navigate('/home');
  };

  const handleLanding = () => {
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo} onClick={handleHome}>
          <LeafIcon />
          <h1 style={styles.logoText}>AgroCart</h1>
        </div>
        <nav style={styles.nav}>
          <span style={styles.navLink} onClick={handleHome}>Home</span>
          <span style={styles.navLink} onClick={handleLanding}>Logout</span>
        </nav>
      </header>

      <div style={styles.content}>
        <h1 style={styles.title}>About AgroCart</h1>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.paragraph}>
            At AgroCart, we are dedicated to revolutionizing agricultural commerce by connecting farmers directly with consumers. Our mission is to create a sustainable ecosystem that supports local farmers, promotes environmentally friendly agricultural practices, and provides consumers with access to fresh, high-quality produce and agricultural products.
          </p>
          <p style={styles.paragraph}>
            By eliminating unnecessary intermediaries, we ensure that farmers receive fair compensation for their hard work, while consumers enjoy farm-fresh products at reasonable prices.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.paragraph}>
            Founded in 2023, AgroCart emerged from a simple observation: the disconnect between agricultural producers and consumers. Our founders, who grew up in farming communities, witnessed firsthand the challenges farmers face in bringing their products to market and receiving fair compensation.
          </p>
          <p style={styles.paragraph}>
            What began as a local initiative connecting a handful of farmers with nearby communities has now grown into a comprehensive platform serving thousands of farmers and consumers across the region.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Products</h2>
          <p style={styles.paragraph}>
            AgroCart offers a diverse range of agricultural products, including:
          </p>
          <ul style={{...styles.paragraph, paddingLeft: '2rem'}}>
            <li>Fresh fruits and vegetables harvested at peak ripeness</li>
            <li>Organic grains, pulses, and seeds</li>
            <li>Dairy products from grass-fed animals</li>
            <li>Artisanal food products created by rural entrepreneurs</li>
            <li>High-quality agricultural tools and equipment</li>
            <li>Sustainable farming inputs and organic fertilizers</li>
            <li>Seasonal specialty items and regional delicacies</li>
          </ul>
          <p style={styles.paragraph}>
            Every product on our platform is carefully vetted to ensure it meets our standards for quality, sustainability, and ethical production.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Commitment to Sustainability</h2>
          <p style={styles.paragraph}>
            Sustainability is at the core of our business model. We actively promote and support:
          </p>
          <ul style={{...styles.paragraph, paddingLeft: '2rem'}}>
            <li>Organic and regenerative farming practices</li>
            <li>Reduction of food miles through local sourcing</li>
            <li>Minimal and eco-friendly packaging</li>
            <li>Fair labor practices throughout the supply chain</li>
            <li>Educational initiatives to promote sustainable agriculture</li>
          </ul>
          <p style={styles.paragraph}>
            By choosing AgroCart, you're not just getting superior products – you're contributing to a more sustainable and equitable food system.
          </p>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;