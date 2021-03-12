// node imports
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");

// local imports
const connectDB = require("./config/db");

// setup
const app = express();
const PORT = process.env.PORT || 3000;

// parse body
app.use(express.json({ extended: false }));

app.use(helmet()); //set standard http headers for security
app.use(compression()); // compress data

// add header to all responses - allow CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// ROUTES
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/content", require("./routes/api/content"));
app.use("/api/event", require("./routes/api/event"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/petition", require("./routes/api/petition"));

// route not found
// app.use("/", (req, res, next) => {
//   res.status(404).json({ message: "route not found" }) ;
// });

// handling errors
app.use((err, req, res, next) => {
  const status = err.statusCode || 500; // default error code
  const message = err.message || "Server Error";

  res.status(status).json({ message });
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "portal/build")));

  // Handle React routing, return all requests to the front-end
  app.get("/admin/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//Connect DB
connectDB();

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
