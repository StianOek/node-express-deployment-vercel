import express from "express";
import * as path from "path";

const app = express();

app.use(express.static("./client/index.html"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("./client/index.html"));
  } else {
    next();
  }
});

app.get("/api/name", (req, res) => {
  res.json({ name: "json", age: "33" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server will start on http://localhost:` + PORT);
});
