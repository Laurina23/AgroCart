import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AuthPage from './components/AuthPage';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';
import About from './components/About'
import Payment from './components/Payment';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/profile" element={<ProfilePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;