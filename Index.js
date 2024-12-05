const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("newsapp");
});
app.get("/news", (req, res) => {
  axios.get("https://newsapi.org/v2/top-headlines",
    {
      params: {
        country: "us",
        category: req.query.category,
        apiKey: req.query.apiKey,
      },
    }).then((response)=>res.json(response.data)).catch((error)=>res.status(500).send('error fetching news'));
});
const port = 8080;
app.listen(port, () => {
  console.log("server is running on port 8080");
});
