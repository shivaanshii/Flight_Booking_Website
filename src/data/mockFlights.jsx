const today = new Date();
const tomorrow = new Date(today);
const dayAfterTomorrow = new Date(today);

tomorrow.setDate(today.getDate() + 1);
dayAfterTomorrow.setDate(today.getDate() + 2);

function formatISO(date, hour, minute) {
  const d = new Date(date);
  d.setHours(hour);
  d.setMinutes(minute);
  d.setSeconds(0);
  return d.toISOString(); // Format: 2025-07-06T04:00:00.000Z
}

const routes = [
  { from: "DEL", to: "PNQ" },
  { from: "DEL", to: "BOM" },
  { from: "DEL", to: "BLR" },
  { from: "BOM", to: "DEL" },
  { from: "BOM", to: "PNQ" },
  { from: "BOM", to: "BLR" },
  { from: "PNQ", to: "DEL" },
  { from: "PNQ", to: "BOM" },
  { from: "PNQ", to: "BLR" },
  { from: "BLR", to: "DEL" },
  { from: "BLR", to: "BOM" },
  { from: "BLR", to: "PNQ" },
];

const airlines = [
  { name: "IndiGo", prefix: "6E" },
  { name: "Air India", prefix: "AI" },
  { name: "SpiceJet", prefix: "SG" },
];

const mockFlights = [];

[routes].flat().forEach((route, rIndex) => {
  [today, tomorrow, dayAfterTomorrow].forEach((date, dIndex) => {
    airlines.forEach((airline, aIndex) => {
      const depHour = 6 + (aIndex * 3); // 6:00, 9:00, 12:00
      const arrHour = depHour + 2;

      mockFlights.push({
        airline: { name: airline.name },
        flight: {
          iata: `${airline.prefix}${rIndex}${dIndex}${aIndex}`,
          number: `${rIndex}${dIndex}${aIndex}`
        },
        departure: {
          iata: route.from,
          scheduled: formatISO(date, depHour, 0)
        },
        arrival: {
          iata: route.to,
          scheduled: formatISO(date, arrHour, 15)
        }
      });
    });
  });
});

export default mockFlights;
