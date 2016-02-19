const moment = require("moment");
moment.locale("zh_CN");
var date = new moment();
console.log(date.format("LLLL"));