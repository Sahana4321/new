const { createPool } = require("mysql");

/** Connection pool creation - START */

const db = createPool({

  port: 3306,

  host: "127.0.0.1",

  user: "root",

  password: "root",

  database: "welcome",

  

});

/** Connection pool creation - END */



module.exports = db;