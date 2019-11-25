var express = require('express');
var router = express.Router();
// const pool = require('../utils/pool');
const Mydb = require('../utils/mydb');

/* GET home page. */
router.get('/', function(req, res, next) {
  // let mydb = new Mydb(app.po);
  // mydb.excute(conn => {
  //   conn.query("select count(*) from users_test", (err, ret) => {
  //     res.json(ret);
  //   });
  // });
  res.send('this is api!!!');
});

module.exports = router;
