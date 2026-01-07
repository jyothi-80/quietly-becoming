import React from "react";

function Footer() {
  return (
    <footer style={{ marginTop: "60px", fontSize: "14px", color: "#666" }}>
      <p>© {new Date().getFullYear()} Quietly Becoming</p>
    </footer>
  );
}

export default Footer;
