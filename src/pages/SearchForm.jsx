import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bgplane.jpg";


function SearchForm() {
  const [tripType, setTripType] = useState("round"); 
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travelClass, setTravelClass] = useState("Economy");
  const navigate = useNavigate();

  
  function formatDate(inputDate) {
    const d = new Date(inputDate);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function handleSearch(e) {
    e.preventDefault(); 
    navigate("/searchresult", {
      state: {
        from: from.toUpperCase(),
        to: to.toUpperCase(),
        date: departure, 
        returnDate: tripType === "round" ? formatDate(returnDate) : null,
        travelClass,
        tripType
      }
    });
  }

  return (
    <div className=" relative min-h-screen flex w-full justify-center items-center">
      <div
          className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
          style={{ backgroundImage: `url(${bgImage})` }}>
    </div>
    <form
      onSubmit={handleSearch}
      className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto text-blue-950 font-semibold"
    > 
    
    <div className="flex justify-center gap-6 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tripType"
            value="round"
            checked={tripType === "round"}
            onChange={() => setTripType("round")}
          />
          Round-trip
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />
          One-way
        </label>
    </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4 ">
        
        <div className="">
          <p>From:</p>
          <input
            type="text"
            name="from"
            placeholder="(e.g. Delhi)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-2 md:text-2xl w-full rounded border focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
        </div>

        <div className="">
          <p>Departure Date:</p>
          <input
            type="date"
            value={departure}
            name="departure"
            placeholder="Departure"
            min={new Date().toISOString().split("T")[0]} 
            max={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
            onChange={(e) => setDeparture(e.target.value)}
            className="p-2 md:text-2xl w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        
        <div className="">
          <p>To:</p>
          <input
            type="text"
            name="to"
            placeholder="(e.g. Srinagar)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-2 md:text-2xl w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
      </div>

      {tripType==="round" && (<div className=""
            >
          <p>Return Date:</p>
            <input
              type="date"
              name="returndate"
              placeholder="return date"
              value={returnDate}
              min={new Date().toISOString().split("T")[0]} 
              max={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
              onChange={(e) => setReturnDate(e.target.value)}
              className="p-2 md:text-2xl w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-300"
            />  
        </div>)}

        <div className={` ${ tripType === "round" ? "md:mx-[25%] md:col-span-2" : ""}`}>
          <p>Travel Class:</p>
          <select
            value={travelClass}
            name="travelClass"
            onChange={(e) => setTravelClass(e.target.value)}
            className={`p-2 md:text-2xl w-full rounded border focus:outline-none focus:ring-2 focus:ring-blue-300 `}
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold cursor-pointer text-lg "
        >
          Search Flights
        </button>
      </div>
    </form>
    </div>
  );
}

export default SearchForm