import React from "react";

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={contentContainerStyle}>
        {/* Logo */}
        <img
          src="logo.gif" // Replace with your logo path
          alt="Logo"
          style={logoStyle}
        />
        {/* Text Content */}
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>বিদ্যাময়ী সরকারি বালিকা উচ্চ বিদ্যালয়</h1>
          <p style={subtitleStyle}>ময়মনসিংহ সদর, ময়মনসিংহ</p>
        </div>
      </div>
    </div>
  );
};

const headerStyle = {
  position: "relative",
  width: "100%",
  height: "219px", // Adjust height as needed
  backgroundImage: "url('http://www.mzs.edu.bd/banner/03.gif')", // Replace with your background image path
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const contentContainerStyle = {
  display: "flex",
  flexDirection:"column",
  alignItems: "left",
  justifyContent: "flex-start", // Align content to the left
  height: "100%",
  paddingLeft:"10%",
  paddingTop:"2%"
 // Add margin from the left (20% of the screen width)
};

const logoStyle = {
  width: "80px", // Adjust width as needed
  height: "80px", // Adjust height as needed
  marginRight: "15px", // Space between logo and text
};

const textContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const titleStyle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "bold",
  color: "white", // Black text for clarity
};

const subtitleStyle = {
  margin: 0,
  fontSize: "16px",
  color: "white", // Slightly lighter for subtitle
};

export default Header;
