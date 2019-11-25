const mysql = require('mysql'),
      util = require('util'),
      Promise = require('bluebird');

Promise.promisifyAll(mysql);
Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);

const DB_INFO = {
  
};

module.exports = class {
  constructor(dbinfo) {
    console.log("====== Create Pool ======");
    dbinfo = dbinfo || DB_INFO;
    this.pool = mysql.createPool(dbinfo);
  }

  connect() {
    return this.pool.getConnectionAsync().disposer(conn => {
      return conn.release();
    });
  }

  end() {
    this.pool.end (function(err) {
      util.log(">>>>>>>>>>>>> End of Pool!!");
      if(err) {
        util.log('ERR pool ending!!');
      }
    });
  }
}
