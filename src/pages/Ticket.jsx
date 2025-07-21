import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location?.state?.flight;
  const user = location?.state?.user;

  if (!flight || !user) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">No Ticket Found</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Go to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-blue-100 p-10 flex items-center justify-center">
      <div className="h-max p-6 md:px-20 bg-white md:py-6 rounded-xl shadow-xl ">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            🎫 Ticket Confirmation
        </h2>

        <div className="space-y-1 text-lg md:px-2">
          <p><strong>Passenger:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Airline:</strong> {flight.airline.name}</p>
          <p><strong>Flight No:</strong> {flight.flight.iata}</p>
          <p><strong>From:</strong> {flight.departure.iata}</p>
          <p><strong>To:</strong> {flight.arrival.iata}</p>
          <p><strong>Departure:</strong> {new Date(flight.departure.scheduled).toLocaleString("en-IN")}</p>
          <p><strong>Arrival:</strong> {new Date(flight.arrival.scheduled).toLocaleString("en-IN")}</p>
          <p className="text-green-700 font-bold"><strong>Price:</strong> ₹{flight.price?.toLocaleString("en-IN")}</p>
        </div>

        <div className="mt-6 text-center font-bold">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
