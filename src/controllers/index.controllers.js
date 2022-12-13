const { pool } = require("../db.js");

module.exports.ping = async (req, res) => {
  const [result] = await pool.query("SELECT 'pong' AS result");
  res.json(result[0]);
};
