const day0 = new Date(); //today
const day1 = new Date(day0);
const day2 = new Date(day0);
const day3 = new Date(day0);
const day4 = new Date(day0);
const day5 = new Date(day0);

day1.setDate(day0.getDate() + 1);
day2.setDate(day0.getDate() + 2);
day3.setDate(day0.getDate() + 3);
day4.setDate(day0.getDate() + 4);
day5.setDate(day0.getDate() + 5);

const days= [day0, day1, day2, day3, day4, day5]

function formatISO(date, hour, minute) {
  const d = new Date(date);
  d.setHours(hour);
  d.setMinutes(minute);
  d.setSeconds(0);
  return d.toISOString(); // Format: 2025-07-06T04:00:00.000Z
}

const cities = [
  "DELHI",
  "CHANDIGARH",
  "MUMBAI",
  "BENGALURU",
  "HYDERABAD",
  "CHENNAI",
  "KOLKATA",
  "AHMEDABAD",
  "KOCHI",
  "PUNE",
  "GUWAHATI",
  "GOA",
  "AMRITSAR",
  "SRINAGAR",
  "JAIPUR",
  "LUCKNOW",
  "BHUBANESWAR",
  "PATNA",
  "RANCHI",
  "DEHRADUN",
  "VARANASI",
  "INDORE",
  "NAGPUR",
  "BHOPAL",
  "COIMBATORE",
  "MADURAI",
  "VISAKHAPATNAM",
  "TIRUCHIRAPPALLI",
  "TRIVANDRUM",
  "PONDICHERRY",
  "SURAT",
  "JODHPUR",
  "UDAIPUR",
  "JAMMU",
  "LEH",
  "AGARTALA",
  "DIMAPUR",
  "AIZAWL",
  "IMPHAL",
  "SILCHAR",
  "SHILLONG",
  "PORT BLAIR",
  "RAIPUR",
  "GAYA",
  "VADODARA",
  "RAJKOT",
  "JAMNAGAR",
  "BAGDOGRA",
  "DHARAMSHALA",
  "KANGRA",
  "TIRUPATI",
  "VIJAYAWADA",
  "HISAR"
];


const routes = [];
for (let i = 0; i < cities.length; i++) {
  for (let j = 0; j < cities.length; j++) {
    if (i !== j) {
      routes.push({ from: cities[i], to: cities[j] });
    }
  }
}

const airlines = [
  { name: "IndiGo", prefix: "6E" },
  { name: "Air India", prefix: "AI" },
  { name: "SpiceJet", prefix: "SG" },
  { name: "Vistara", prefix: "UK" },
  { name: "Air India Express", prefix: "IX" }
]

function getRandomPrice() {
  return Math.floor(Math.random() * 3000) + 5000; // 3000 - 7999
}

const mockFlights = [];

[routes].flat().forEach((route, rIndex) => {
  days.forEach((date, dIndex) => {
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
        },
        price: getRandomPrice()
      });
    });
  });
});

export default mockFlights;
