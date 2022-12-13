const express = require("express");
const employeesRoutes = require("./routes/employees.routes.js");
const indexRoutes = require("./routes/index.routes.js");

const app = express();

app.use(express.json());
app.use(indexRoutes);
app.use("/api", employeesRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

module.exports.app = app;
