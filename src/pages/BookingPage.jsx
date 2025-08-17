import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage2 from "../assets/planeimg.png";
import mockFlights from "../data/mockFlights";

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
      seats: form[2].value
    };

    navigate("/ticket", {
      state: {
        flight,
        user,
      },
    });
  };  


  function getRandomFlights(data, count = 20) {
    return [...data] 
      .sort(() => Math.random() - 0.5)
      .slice(0, count); 
  }
  function formatTime(dateString) {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    return date.toLocaleString("en-IN", options);
  }
  if (!flight) {  
    const randomFlights = getRandomFlights(mockFlights, 21);
    return(
      <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-100">

        <h2 className="text-3xl font-bold mb-4 text-center p-2 text-blue-950">
          Available Flights
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
      {randomFlights.map((flight, index) => (
        <div
          key={flight.flight.iata + flight.flight.number + index}
          className="bg-white m-4 p-4 rounded-xl shadow-md flex flex-col justify-between hover:scale-102 hover:shadow-[0_0_20px_4px_rgba(147,197,253,0.8)] transition duration-300 cursor-default"
        >
          <div>
            <h3 className="text-2xl font-bold py-2 text-blue-800">{flight.airline.name}</h3>
              <p>{flight.departure.iata} → {flight.arrival.iata}</p>
              <p>Departure Time: {formatTime(flight.departure.scheduled)}</p>
              <p>Arrival Time: {formatTime(flight.arrival.scheduled)}</p>
              <p>Flight Number: {flight.flight.iata}</p>
              <p className="text-green-800 font-bold">Flight Price: ₹{flight.price?.toLocaleString("en-IN")}</p>
            </div>
            <button
              onClick={() => navigate("/book", { state: flight })}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}


  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative min-h-screen flex w-full justify-center items-center">
      <div
                className="absolute inset-0 bg-cover bg-fixed"
                style={{ backgroundImage: `url(${bgImage2})` }}>
      </div>
      <div className="max-w-xl mx-auto p-6 rounded-xl bg-white backdrop-blur-sm shadow-md md:px-10 md:my-6" >
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">Confirm Your Booking</h2>

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

        <form onSubmit={handleBooking} className="space-y-1 border-1 p-2 rounded-xl text-center">

          <p className="text-xl font-semibold text-blue-800 mb-2">
            Enter your details:
          </p>
          <input
            type="text"
            placeholder="Enter your Full Name"
            name="fullname"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Enter number of seats to book (maximum 6)"
            name="seats"
            min= "1"
            max= "6"
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-[75%] mt-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
      </div>
    </section>
  );
}

export default Book;