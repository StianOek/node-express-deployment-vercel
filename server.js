import express from "express";

const app = express();

app.get("/api/name", (req, res) => {
  res.json({ name: "json", age: "33" });
});

express.static("./client/");

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server will start on http://localhost:` + PORT);
});
