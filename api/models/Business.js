// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  employee_name: {
    type: String
  },
  job_position: {
    type: String
  },
  payrate: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Business', Business);
