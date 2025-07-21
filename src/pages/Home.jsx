import React from "react";
import bgImage from "../assets/bgplane.jpg";
import SearchForm from "../components/SearchForm";

function Home() {
  return (

    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}>
      </div>

      <div className="min-h-screen relative z-10">
        <section className="h-screen flex flex-col justify-center items-center text-blue-800 text-center px-4">
          
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Discover Your Next Destination
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow">
              Book flights at the best prices with ease and speed.
            </p>
            <button 
              onClick={() => {
                document
                  .getElementById("search-form-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition cursor-pointer">
                Book Now
            </button>
        </section>

        <section id="search-form-section" className="h-screen relative z-10 flex items-center justify-center ">
          <SearchForm />
        </section>
        
      </div>

    </div>
  );
}

export default Home;