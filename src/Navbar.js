import React from "react";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>প্রথম পাতা</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>পরিচিতি</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>জনবল</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>শিক্ষার্থী</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>পরীক্ষার ফলাফল</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>ছবির গ্যালারি</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>যোগাযোগ</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>এপিএ</li>
        <li style={liStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>শুদ্ধাচার কৌশল</li>
      </ul>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f8f9fa", // light background
  borderBottom: "1px solid #ddd", // border below navbar
  padding: "10px 0",
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  margin: 0,
  padding: 0,
};

const liStyle = {
  padding: "10px 25px",
  border: "1px dashed #ddd", // dashed border like the image
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
};

const handleHover = (e) => {
  e.target.style.backgroundColor = "#06a4ff"; // Change background on hover
  e.target.style.color = "#fff"; // Change text color to white on hover
};

const handleLeave = (e) => {
  e.target.style.backgroundColor = ""; // Reset background color
  e.target.style.color = ""; // Reset text color
};

export default Navbar;
