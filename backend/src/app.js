const express = require("express");

const app = express();

const indexRoutes = require("./routes");
const authRoutes = require("./routes/auth.routes");


app.use(express.json());


app.use("/", indexRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;