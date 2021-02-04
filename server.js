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
app.use("/api/articles", require("./routes/api/articles"));

// route not found
app.use("/", (req, res, next) => {
  res.status(404).json({ message: "route not found" });
});

// handling errors
app.use((err, req, res, next) => {
  const status = err.statusCode || 500; // default error code
  const message = err.message;

  res.status(status).json({ message });
});

//Connect DB
connectDB();

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
