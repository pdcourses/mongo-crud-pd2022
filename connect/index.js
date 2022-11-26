const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongotest", (error) => {
  error
    ? console.error("Error conection with mongod")
    : console.log("Connection with mondo db is success!!! ");
});

module.exports = mongoose.connection;