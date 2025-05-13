import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    {
      name: 'Seeds',
      products: [
        { 
          id: 1, 
          name: 'Organic Tomato Seeds', 
          price: '₹120/packet', 
          description: 'High-yield hybrid variety suitable for various soil types.',
          image: '/images/tomatoSeeds.png' 
        },
        { 
          id: 2, 
          name: 'Premium Wheat Seeds', 
          price: '₹1800/kg', 
          description: 'Drought-resistant wheat variety with excellent germination rate.',
          image: '/images/wheatSeeds.png' 
        }
      ]
    },
    {
      name: 'Fertilizers',
      products: [
        { 
          id: 3, 
          name: 'Organic Compost', 
          price: '₹450/bag', 
          description: 'Nutrient-rich natural compost for all soil types.',
          image: '/images/organicCompost.png' 
        },
        { 
          id: 4, 
          name: 'NPK Fertilizer', 
          price: '₹750/bag', 
          description: 'Balanced NPK formula for healthy plant growth and development.',
          image: '/images/NPK-fertilizers.png' 
        }
      ]
    },
    {
      name: 'Tools',
      products: [
        { 
          id: 5, 
          name: 'Garden Trowel Set', 
          price: '₹350', 
          description: 'Durable stainless steel set for precision gardening tasks.',
          image: '/images/Garden-tools.png' 
        },
        { 
          id: 6, 
          name: 'Pruning Shears', 
          price: '₹280', 
          description: 'Sharp and ergonomic design for efficient pruning.',
          image: '/images/pruning-shears.png' 
        }
      ]
    },
    {
      name: 'Equipment',
      products: [
        { 
          id: 7, 
          name: 'Mini Tiller', 
          price: '₹12,500', 
          description: 'Compact and powerful tiller for small to medium gardens.',
          image: '/images/mini-tiller.png' 
        },
        { 
          id: 8, 
          name: 'Garden Sprayer', 
          price: '₹870', 
          description: 'Adjustable pressure sprayer for fertilizers and pesticides.',
          image: '/images/garden-sprayer.png' 
        }
      ]
    }
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const filteredProducts = activeCategory === 'All' 
    ? categories.flatMap(category => category.products)
    : categories.find(category => category.name === activeCategory)?.products || [];

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <button className="menu-button" onClick={toggleDrawer}>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <h1>AgroCart</h1>
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><Link to="/About">About</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="cart-button" onClick={() => navigate('/cart')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="cart-count">2</span>
            </button>
            <button className="auth-button" onClick={() => navigate('/')}>Logout</button>
          </div>
        </div>
      </nav>

      {/* Side Drawer Navigation */}
      <div className={`side-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="user-info">
            <div className="user-avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p>Welcome, Guest</p>
          </div>
          <button className="close-drawer" onClick={toggleDrawer}>×</button>
        </div>
        <div className="drawer-content">
          <div className="drawer-section">
            <h3>Categories</h3>
            <ul className="drawer-categories">
              <li onClick={() => {setActiveCategory('All'); toggleDrawer();}}>All Products</li>
              {categories.map((category, index) => (
                <li key={index} onClick={() => {setActiveCategory(category.name); toggleDrawer();}}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="drawer-section">
            <h3>Account</h3>
            <ul className="drawer-links">
            <li onClick={() => navigate('/profile')}>Profile</li>
            <li>Orders</li>
              <li>Wishlist</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="drawer-section">
            <h3>Help</h3>
            <ul className="drawer-links">
              <li>FAQs</li>
              <li>Contact Support</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
      <div className = "hero-section">
      <div className="hero-text">
            <h1>Quality Agricultural Products <br/> for Modern Farming</h1>
            <p>Enhance your farm productivity with our premium agricultural solutions</p>
            <button className="cta-button">Explore Products</button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="category-tabs">
          <button 
            className={activeCategory === 'All' ? 'active' : ''} 
            onClick={() => setActiveCategory('All')}
          >
            All Products
          </button>
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={activeCategory === category.name ? 'active' : ''} 
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-container">
          <h2>{activeCategory === 'All' ? 'Featured Products' : activeCategory}</h2>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  {product.name.charAt(0)}
                </div>
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <p className="product-price">{product.price}</p>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <Footer/>
      </div>

      {/* Overlay when drawer is open */}
      {drawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}

      <style jsx>{`
        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .homepage {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #ffffff;
          background-color: #121212;
          min-height: 100vh;
        }

        /* Navigation Bar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #000000;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .navbar-left {
          display: flex;
          align-items: center;
        }

        .navbar-left h1 {
          margin-left: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
        }

        .navbar-right {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin-right: 2rem;
        }

        .nav-links li {
          margin: 0 1rem;
        }

        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover, .nav-links a.active {
          color: #4CAF50;
        }

        .nav-buttons {
          display: flex;
          align-items: center;
        }

        .menu-button {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 24px;
          padding: 4px;
        }

        .menu-icon span {
          width: 24px;
          height: 2px;
          background-color: #ffffff;
          display: block;
          margin: 2px 0;
          transition: transform 0.3s ease;
        }

        .cart-button {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          margin-right: 1rem;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #4CAF50;
          color: white;
          font-size: 0.75rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auth-button {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .auth-button:hover {
          background-color: #ffffff;
          color: #000000;
        }

        /* Side Drawer */
        .side-drawer {
          position: fixed;
          top: 0;
          left: -300px;
          width: 300px;
          height: 100vh;
          background-color: #1a1a1a;
          z-index: 200;
          transition: transform 0.3s ease;
          overflow-y: auto;
          padding: 1rem 0;
        }

        .side-drawer.open {
          transform: translateX(300px);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 150;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #333;
        }

        .user-info {
          display: flex;
          align-items: center;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          background-color: #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.75rem;
        }

        .close-drawer {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .drawer-content {
          padding: 1rem;
        }

        .drawer-section {
          margin-bottom: 1.5rem;
        }

        .drawer-section h3 {
          color: #4CAF50;
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
        }

        .drawer-categories li, .drawer-links li {
          list-style: none;
          padding: 0.5rem 0;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .drawer-categories li:hover, .drawer-links li:hover {
          color: #4CAF50;
        }

        /* Hero Section */
        .hero-section {
          height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/farm-hero.jpg');
          background-size: cover;
          background-position: center;
          text-align: center;
          padding: 0 1rem;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-text p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          color: #cccccc;
        }

        .cta-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #3e8e41;
        }

        /* Category Tabs */
        .category-tabs {
          display: flex;
          justify-content: center;
          background-color: #1a1a1a;
          padding: 1rem 0;
          overflow-x: auto;
          white-space: nowrap;
        }

        .category-tabs button {
          background: none;
          border: none;
          color: #ffffff;
          padding: 0.5rem 1rem;
          margin: 0 0.5rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .category-tabs button.active {
          border-bottom: 2px solid #4CAF50;
          color: #4CAF50;
        }

        /* Products Section */
        .products-container {
          padding: 1rem;
        }

        .products-container h2 {
          font-size: 1.75rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          height: 100%;
          justify-content: space-between;
          background-color: #1a1a1a;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        .product-image {
          height: 180px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1a1a1a;
          position: relative;
        }

        .product-image img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          display: block;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          position: absolute;
          top: 0;
          left: 0;
        }

        .product-details {
          padding: 1.5rem;
        }

        .product-details h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .product-description {
          color: #cccccc;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          height: 40px;
          overflow: hidden;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price {
          font-size: 1.125rem;
          font-weight: 600;
          color: #4CAF50;
        }

        .add-to-cart {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #4CAF50;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-to-cart:hover {
          background-color: #4CAF50;
          color: #ffffff;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .hero-text h1 {
            font-size: 2rem;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 1rem;
          }
          
          .navbar-left h1 {
            font-size: 1.2rem;
          }
          
          .hero-text h1 {
            font-size: 1.5rem;
          }
          
          .hero-text p {
            font-size: 1rem;
          }
          
          .products-container {
            padding: 1rem;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;