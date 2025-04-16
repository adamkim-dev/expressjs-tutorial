import express from "express";
import router from "./route.js";

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, Adam!");
});

app.use("/user", router);

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
