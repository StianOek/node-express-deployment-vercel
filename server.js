import express from "express";

const app = express();
app.use(express.static("./client/index.html"));

app.get("/api/name", (req, res) => {
  res.json({ name: "json", age: "33" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server will start on http://localhost:` + PORT);
});
