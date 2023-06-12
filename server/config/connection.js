// import mongoose
const mongoose = require('mongoose');
// create connection to mongoose db
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/')

module.exports = mongoose.connection; // export mongoose connection
