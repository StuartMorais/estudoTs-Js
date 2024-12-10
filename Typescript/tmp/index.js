var moment = require('moment'); // require


var test = moment("20111031", "YYYYMMDD").fromNow(); // 13 years ago

console.log('moment test: ', test)