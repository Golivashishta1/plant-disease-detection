const axios = require("axios");

async function getCityName() {
    try {
        // Fetch the IP address of the user (you could also use request-based methods in an actual request)
        const ipResponse = await axios.get("https://api64.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;

        // Use the IP address to fetch location information
        const locationResponse = await axios.get(`https://ipapi.co/${ipAddress}/json/`);
        const city = locationResponse.data.city;

        if (!city) {
            throw new Error("City name not found.");
        }
        console.log(city);

        return city;
    } catch (error) {
        console.error("Error fetching city name:", error.message);
        return "Unknown City";
    }
}

module.exports = { getCityName };
