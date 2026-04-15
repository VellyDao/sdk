const express = require("express");
const app = express();

app.use(express.json());

let value = 0;

app.get("/value", (req, res) => {
  res.json({ value });
});

app.post("/update", (req, res) => {
  const { amount } = req.body;
  value += amount;
  res.json({ success: true, value });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
