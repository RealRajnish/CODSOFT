const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const airportRoutes = require("./routes/Flights/airportRoutes");
const trainRoutes = require("./routes/Trains/trainRoutes");
const stationRoutes = require("./routes/Trains/stationRoutes");
const trainFareRoutes = require("./routes/Trains/trainFareRoutes");
const trainTicketRoutes = require("./routes/Trains/ticketRoutes");
const trainmissRoutes = require("./routes/Trains/missRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //for resolving cors error

dotenv.config();
const PORT = process.env.PORT;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(cookieParser());

// adding routes
app.use("/api/auth", userRoutes);
app.use(airportRoutes);
app.use(trainRoutes);
app.use(stationRoutes);
app.use(trainFareRoutes);
app.use(trainTicketRoutes);
app.use(trainmissRoutes);

// database connection
require("./db/conn");

// serving static build
app.use(express.static(path.join(__dirname, "./client/", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

// starting the server on the given port
app.listen(PORT, () => {
  console.log(`server connected successfully at port : ${PORT}`);
});
