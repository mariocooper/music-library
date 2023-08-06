const { Pool } = require("pg");
const dotenv = require("dotenv");

const environment = process.env.NODE_ENV || "development";
const envFile = environment === "test" ? ".env.test" : ".env";
dotenv.config({ path: envFile });

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
