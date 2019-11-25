const util = require('util');
const utils = require('../utils/utils');

let str = "nodejs";
util.log("enc = ", utils.encrypt(str));

let encStr = utils.encrypt(str);
util.log("dec = ", utils.decrypt(encStr));

util.log("sha = ", utils.SHA256(str));