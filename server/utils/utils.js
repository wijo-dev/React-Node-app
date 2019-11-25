const ogs = require('open-graph-scraper'),
      Crypto = require('crypto-js');

const EKey = "bigbit13@a";

module.exports = {
  SHA256(data, key) {
    if(!data) return null;
    key = key || EKey;

    try {
      return Crypto.SHA256(data + key).toString();
    } catch (error) {
      
    }
  },
  encrypt(data, key) {
    return Crypto.AES.encrypt(data, key || EKey).toString();
  },
  decrypt(data, key) {
    return Crypto.AES.decrypt(data, key || EKey).toString(Crypto.enc.Utf8);
  },
  ogsinfo(url, fn) {
    return ogs({url: url}, (err, ret) => {
      fn(err, ret);
    });
  }
};