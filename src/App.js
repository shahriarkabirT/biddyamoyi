import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './styles/main.css';
import RightSideBar from "./components/RightSideBar";

function App() {
  const appStyle = {
    backgroundImage: "url('bangaldesh.png')",
    backgroundRepeat: "repeat", 
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
