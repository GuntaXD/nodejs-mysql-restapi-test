const { Router } = require("express");
const { getEmployees } = require("../controllers/employees.controllers.js");
const { getEmployeeById } = require("../controllers/employees.controllers.js");
const { createEmployees } = require("../controllers/employees.controllers.js");
const { updateEmployees } = require("../controllers/employees.controllers.js");
const { deleteEmployees } = require("../controllers/employees.controllers.js");

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployeeById);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

module.exports = router;
