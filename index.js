import express from "express";
import router from "./route.js";

const app = express();

app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, Adam!");
});

app.use("/users", router);

app.get("/users/:name/:id([0-9]{5})", (req, res) => {
  const { name, id } = req.params;
  if (!name || !id) {
    return res.status(400).json({
      message: "Name and ID are required!",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      message: "ID must be a number!",
    });
  }
  if (id.length !== 5) {
    return res.status(400).json({
      message: "ID must be 5 digits long!",
    });
  }
  res.json({
    message: `User ${name} with ID ${id} found!`,
  });
});

// Catch all invalid routes
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Route not found!",
  });
});

app.post("/users", (req, res) => {
  const { username, email } = req.body;
  res.json({
    message: `User ${username} created successfully!`,
    data: {
      username,
      email,
    },
  });
});

app.put("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const { username, email } = req.body;
  res.json({
    message: `User ${userId} updated successfully!`,
    data: {
      username,
      email,
    },
  });
});

app.delete("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.json({
    message: `User ${userId} deleted successfully!`,
  });
});

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
