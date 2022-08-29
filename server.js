import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ name: "json", age: "33" });
});

const PORT = 4444;

app.listen(PORT, () => {
  console.log(`Server will start on http://localhost:` + PORT);
});
