// api/test.js
// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { city } = req.body;

//   if (!city) {
//     return res.status(400).json({ error: "City is required" });
//   }

//   try {
//     const apiKey = process.env.OPENWEATHER_API_KEY;
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     if (response.status !== 200) {
//       return res.status(response.status).json({ error: data.message });
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// }

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { city } = req.body;
    if (!city) return res.status(400).json({ error: "City is required" });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API key not found" });

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.status !== 200) {
      console.log("OpenWeather error:", data);
      return res.status(response.status).json({ error: data.message });
    }

    res.status(200).json(data);

  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
}
 
