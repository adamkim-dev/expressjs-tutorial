import express from "express";
import multer from "multer";
import { storage } from "./config/multer.js";
// import router from "./route.js";

const app = express();

const upload = multer({ storage, limits: { fileSize: 1024000 } });

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
// This is needed for form submissions
app.use(express.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(upload.single("image"));

const port = 4000;

// // apply middleware for only "/welcome" route
// app.use("/welcome", (req, res, next) => {
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request URL: ${req.url}`);
//   console.log(`Request Body: ${JSON.stringify(req.body)}`);
//   console.log(`Request Params: ${JSON.stringify(req.params)}`);
//   console.log(`Request Query: ${JSON.stringify(req.query)}`);
//   next();
// });

// app.get("/welcome", (req, res) => {
//   res.send("Welcome, Adam!");
// });

// app.use((req, res, next) => {
//   console.log("Start");
//   res.on("finish", () => {
//     console.log("End");
//   });
//   next();
// });

// app.get("/error", () => {
//   throw new Error("This is an error!");
// });

// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).json({
//     message: "Internal Server Error!",
//   });
// });

// app.use("/public", express.static("public"));
// app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  // const userName = "Adam";
  // res.render("index.ejs", { userName });
  res.send("Hello, World!");
});

app.post("/form", (req, res) => {
  const { email } = req.body;
  res.json({
    message: `Welcome, ${email}!`,
  });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    message: err.message || "Internal Server Error!",
  });
});

// app.use("/users", router);

// app.get("/users/:name/:id([0-9]{5})", (req, res) => {
//   const { name, id } = req.params;
//   if (!name || !id) {
//     return res.status(400).json({
//       message: "Name and ID are required!",
//     });
//   }
//   if (isNaN(id)) {
//     return res.status(400).json({
//       message: "ID must be a number!",
//     });
//   }
//   if (id.length !== 5) {
//     return res.status(400).json({
//       message: "ID must be 5 digits long!",
//     });
//   }
//   res.json({
//     message: `User ${name} with ID ${id} found!`,
//   });
// });

// Catch all invalid routes
app.get("*", (req, res) => {
  res.status(404).json({
    message: "Route not found!",
  });
});

// app.post("/users", (req, res) => {
//   const { username, email } = req.body;
//   res.json({
//     message: `User ${username} created successfully!`,
//     data: {
//       username,
//       email,
//     },
//   });
// });

// app.put("/users/:userId", (req, res) => {
//   const userId = req.params.userId;
//   const { username, email } = req.body;
//   res.json({
//     message: `User ${userId} updated successfully!`,
//     data: {
//       username,
//       email,
//     },
//   });
// });

// app.delete("/users/:userId", (req, res) => {
//   const userId = req.params.userId;
//   res.json({
//     message: `User ${userId} deleted successfully!`,
//   });
// });

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
