const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const airportRoutes = require("./routes/airportRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors"); //for resolving cors error

dotenv.config();
const PORT = process.env.PORT;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", userRoutes);
app.use(airportRoutes);

// database connection
require("./db/conn");

app.listen(PORT, () => {
  console.log(`server connected successfully at port : ${PORT}`);
});
