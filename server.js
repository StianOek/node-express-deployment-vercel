import express from "express";
import * as path from "path";

const app = express();

/* app.use(express.static("./client/dist/")); */
app.use(express.static(path.resolve("./", "client", "dist")));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(path.resolve("./client/dist/index.html"));
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
