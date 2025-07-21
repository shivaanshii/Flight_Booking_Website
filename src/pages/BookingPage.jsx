import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage from "../assets/bgplane.jpg";


function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location?.state;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      name: form[0].value,
      email: form[1].value,
    };

    navigate("/ticket", {
      state: {
        flight,
        user,
      },
    });
  };  

  if (!flight) {
    return (
        
      <section className="min-h-screen flex items-center justify-center">
        <div className=" relative min-h-screen flex w-full justify-center items-center">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
                style={{ backgroundImage: `url(${bgImage})` }}>
            </div>
            <div className="bg-white/60 backdrop-blur-sm text-center p-6 rounded shadow-md md:p-10">
                <h2 className="text-2xl font-semibold mb-4 md:text-3xl">No Flight Selected</h2>
                <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-4 py-2 rounded md:text-2xl md:m-3"
                >
                Go to Home
                </button>
            </div>
        </div>
      </section>
     
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Confirm Your Booking</h2>

        <div className="mb-6">
          <p><strong>Airline:</strong> {flight.airline.name}</p>
          <p><strong>Flight No:</strong> {flight.flight.iata}</p>
          <p><strong>Route:</strong> {flight.departure.iata} → {flight.arrival.iata}</p>
          <p><strong>Departure:</strong> {new Date(flight.departure.scheduled).toLocaleString("en-IN")}</p>
          <p><strong>Arrival:</strong> {new Date(flight.arrival.scheduled).toLocaleString("en-IN")}</p>
          <p className="text-green-700 font-semibold mt-2">
            <strong>Price:</strong> ₹{flight.price?.toLocaleString("en-IN")}
          </p>
        </div>

        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default Book;