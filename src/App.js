import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './styles/main.css';

function App() {
  const appStyle = {
    backgroundImage: "url('bangaldesh.png')",
    backgroundRepeat: "repeat", 
  };

  return (
    <div style={appStyle}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
