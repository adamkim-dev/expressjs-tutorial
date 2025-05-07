import express from "express";
import multer from "multer";
import { storage } from "./config/multer.js";
import { connectDB } from "./config/db.js";
import router from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

const upload = multer({ storage, limits: { fileSize: 1024000 } });

await connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
// This is needed for form submissions
app.use(express.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(upload.single("image"));

app.use(
  session({
    secret: "sample-secret-id",
    resave: false,
    saveUninitialized: false,
  })
);

const port = 4000;

// // apply middleware for only "/welcome" route
// app.use("/welcome", (req, res, next) => {
//   console.log(`Request Body: ${JSON.stringify(req.body)}`);
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

app.use("/users", router);

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

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/visit", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    res.send(`You visited this page ${req.session.page_views} times`);
  } else {
    req.session.page_views = 1;
    res.send("Welcome to this page for the first time");
  }
});

app.get("/remove-visit", (req, res) => {
  req.session.destroy();
  res.send("Session is destroyed");
});

// app.get("/remove-cookie", (req, res) => {
//   res.clearCookie("name");
//   res.send("Cookie is removed");
// });

// app.get("/fetch", (req, res) => {
// res.cookie("name", "adam", { maxAge: 360000 });
//   res.send("Hello, API Called!");
// });

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Internal Server Error!",
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "Route not found!",
  });
});

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
