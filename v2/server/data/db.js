const initOptions = {};
const pgp = require("pg-promise")(initOptions);
const cn = {
  host: "localhost", // 'localhost' is the default;
  port: 5432, // 5432 is the default;
  database: "eventonica",
  user: "tpl5_2021h1",
  password: "zxcvbnm",
};
const db = pgp(cn);

module.exports = db;
