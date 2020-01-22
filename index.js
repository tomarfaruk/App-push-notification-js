//omar faruk

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

module.exports = {
    ...require("./sell.js"),
    ...require("./buy.js"),
    // ...require("./lib/bar.js") // add as many as you like
  };