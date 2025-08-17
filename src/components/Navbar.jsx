import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`bg-white shadow-md px-6 py-4 sticky top-0 z-50`}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">FlyHigh</div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-blue-950">
            {isOpen ? "×" : "≡"}
          </button>
        </div>

        
        <ul className="hidden md:flex gap-6 text-gray-900 font-medium">
          <li>
            <NavLink to="/" className= {({isActive})=> isActive? "bg-indigo-50 p-2 rounded-2xl": "p-2 hover:text-blue-500 hover:bg-indigo-50 rounded-2xl"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/search" className= {({isActive})=> isActive? "bg-indigo-50 p-2 rounded-2xl": "p-2 hover:text-blue-500 hover:bg-indigo-50 rounded-2xl"}>Search</NavLink>
          </li>
          <li>
            <NavLink to="/book" className= {({isActive})=> isActive? "bg-indigo-50 p-2 rounded-2xl": "p-2 hover:text-blue-500 hover:bg-indigo-50 rounded-2xl"}>Bookings</NavLink>
          </li>
        </ul>
      </div>

      
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Home</NavLink>
          </li>
          <li>
            <NavLink to="/search" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Search</NavLink>
          </li>
          <li>
            <NavLink to="/book" className="block px-4 py-2 hover:bg-indigo-50 rounded-xl">Bookings</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
