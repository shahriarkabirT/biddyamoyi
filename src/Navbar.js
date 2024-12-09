import React from "react";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>প্রথম পাতা</li>
        <li style={liStyle}>পরিচিতি</li>
        <li style={liStyle}>জনবল</li>
        <li style={liStyle}>শিক্ষার্থী</li>
        <li style={liStyle}>পরীক্ষার ফলাফল</li>
        <li style={liStyle}>ছবির গ্যালারি</li>
        <li style={liStyle}>যোগাযোগ</li>
        <li style={liStyle}>এপিএ</li>
        <li style={liStyle}>শুদ্ধাচার কৌশল</li>
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
  padding: "10px 20px",
  border: "1px dashed #ddd", // dashed border like the image
  fontWeight: "bold",
  textAlign: "center",
  cursor: "pointer",
};

export default Navbar;
