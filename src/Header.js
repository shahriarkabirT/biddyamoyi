import React from "react";

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={overlayStyle}>
        <div style={logoContainer}>
          {/* Placeholder for Logo */}
          <img
            src="logo.gif"
            alt="Logo"
            style={logoStyle}
          />
        </div>
        <div style={textContainer}>
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
  height: "200px", // Adjust height as needed
  backgroundImage: "url('shongshod.jpg')", // Placeholder for background
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent overlay
  display: "flex",
//   flexDirection: column,
  alignItems: "center",
//   justifyContent: "space-between",

  padding: "0 20px",
};

const logoContainer = {
  flex: "0 0 auto",
};

const logoStyle = {
  width: "80px", // Adjust as needed
  height: "80px",
};

const textContainer = {
  flex: "1",
  textAlign: "center",
};

const titleStyle = {
  margin: 0,
  fontSize: "24px",
  fontWeight: "bold",
  color: "#000",
};

const subtitleStyle = {
  margin: 0,
  fontSize: "16px",
  color: "#333",
};

export default Header;
