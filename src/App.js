import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './styles/main.css';
import RightSideBar from "./components/RightSideBar";

function App() {
  const appStyle = {
    backgroundColor: "white",
    minHeight: "200vh",  // Ensures the background covers the entire viewport height
    margin: 0,  // Prevents any default margin around the body
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",  // Adds shadow effect
  };

  return (
    <div style={appStyle}>
      <Header />
      <Navbar />
      <RightSideBar />
      <Footer />
    </div>
  );
}

export default App;
