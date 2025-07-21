
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`bg-white shadow-md px-6 py-4 sticky top-0 z-50`}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">FlyHigh</div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 hover:bg-indigo-50 p-2 rounded-2xl">Home</Link>
          </li>
          <li>
            <Link to="/search" className="hover:text-blue-500 hover:bg-indigo-50 p-2 rounded-2xl">Search</Link>
          </li>
          <li>
            <Link to="/book" className="hover:text-blue-500 hover:bg-indigo-50 p-2 rounded-2xl">Bookings</Link>
          </li>
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Home</Link>
          </li>
          <li>
            <Link to="/search" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Search</Link>
          </li>
          <li>
            <Link to="/book" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Bookings</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
