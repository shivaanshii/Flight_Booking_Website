const apiKey= import.meta.env.VITE_API_KEY;

export async function fetchFlights(from,to) {
    const url = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&dep_iata=${from}&arr_iata=${to}&limit=10`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const flightsWithPrices = (data.data || []).map(flight => ({
                                ...flight,
                                price: Math.floor(Math.random() * 4000) + 3000, // ₹3000–₹5999
        }));
        return flightsWithPrices;
    } catch (error) {
        console.error("Flight data retrieval error", error);
        return[];
    }

    
}