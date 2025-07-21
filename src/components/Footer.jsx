import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 text-sm py-4">
      &copy; {new Date().getFullYear()} FlyHigh. All rights reserved.
    </footer>
  );
}

export default Footer;