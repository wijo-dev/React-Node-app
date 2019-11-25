const util = require('util'),
      Promise = require('bluebird');

const Pool = require('../utils/pool');

const pool = new Pool();

const sql1 = 'select * from users_test';

Promise.using( pool.connect(), conn => {
  conn.queryAsync(sql1, (err, ret) => {
    util.log("sqld1 = ", ret);
  });

  pool.end();
});