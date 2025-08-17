import React from "react";
import { jsPDF } from "jspdf";
import { useLocation, useNavigate } from "react-router-dom";
import bgImage1 from "../assets/bgplane.jpg";
import bgImage2 from "../assets/planeimg.png";

function Ticket() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location?.state?.flight;
  const user = location?.state?.user;


  if (!flight || !user) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center relative min-h-screen flex w-full justify-center items-center">
          <div
                  className="absolute inset-0 bg-cover bg-center opacity-80 bg-fixed"
                  style={{ backgroundImage: `url(${bgImage1})` }}>
          </div>
          <div className="bg-white/60 backdrop-blur-sm text-center p-6 rounded shadow-md md:p-10">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">No Ticket Found</h2>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Go to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  const downloadTicket = () => {
  const doc = new jsPDF("p", "mm", "a4"); 

  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(30, 144, 255); 
  doc.text("FlyHigh", 105, 15, { align: "center" });

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("Flight Ticket Confirmation", 105, 30, { align: "center" });

  doc.setDrawColor(0);     
  doc.setFillColor(240, 248, 255); 
  doc.rect(15, 50, 180, 125, "FD"); 

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Passenger Details", 20, 60);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Name: ${user.name}`, 20, 70);
  doc.text(`Email: ${user.email}`, 20, 78);
  doc.text(`Number of seats: ${user.seats}`, 20, 86);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Flight Information", 20, 100);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(`Airline: ${flight.airline.name}`, 20, 110);
  doc.text(`Flight No: ${flight.flight.iata}`, 20, 118);
  doc.text(`From: ${flight.departure.iata}`, 20, 126);
  doc.text(`To: ${flight.arrival.iata}`, 20, 134);
  doc.text(
    `Departure: ${new Date(flight.departure.scheduled).toLocaleString("en-IN")}`,
    20,
    142
  );
  doc.text(
    `Arrival: ${new Date(flight.arrival.scheduled).toLocaleString("en-IN")}`,
    20,
    150
  );

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 128, 0);
  doc.text(`Price: ${(flight.price* user.seats)?.toLocaleString("en-IN")} Rs`, 20, 170);

  doc.save(`ticket_${flight.flight.iata}.pdf`);
};


  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative min-h-screen flex w-full justify-center items-center">
        <div
            className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
            style={{ backgroundImage: `url(${bgImage2})` }}>
        </div>
        <div className=" backdrop-blur-sm h-max p-6 md:px-20 bg-white md:py-6 rounded-xl shadow-xl ">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              🎫 Ticket Confirmation
          </h2>

          <div className="space-y-1 text-lg md:px-2">
            <p><strong>Passenger:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Number of seats:</strong> {user.seats}</p>
            <p><strong>Airline:</strong> {flight.airline.name}</p>
            <p><strong>Flight No:</strong> {flight.flight.iata}</p>
            <p><strong>From:</strong> {flight.departure.iata}</p>
            <p><strong>To:</strong> {flight.arrival.iata}</p>
            <p><strong>Departure:</strong> {new Date(flight.departure.scheduled).toLocaleString("en-IN")}</p>
            <p><strong>Arrival:</strong> {new Date(flight.arrival.scheduled).toLocaleString("en-IN")}</p>
            <p className="text-green-700 font-bold">
              <strong>Price:</strong> 
              ₹{(flight.price* user.seats)?.toLocaleString("en-IN")}</p>
          </div>

          <div className="mt-6 text-center font-bold">
            <button
              onClick={downloadTicket}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded cursor-pointer mr-1"
            >
              Download Ticket
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="ml-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
