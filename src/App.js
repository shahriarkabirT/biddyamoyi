import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import './styles/main.css';
import RightSideBar from "./components/RightSideBar";

function App() {
  return (
    <div>
      <Header/>
      <Navbar />
        <RightSideBar />
      <Footer />
    </div>
  );
}

export default App;
