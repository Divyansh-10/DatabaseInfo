const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
  title :
  {
    type : String,
    required : [true, "Value of title is null"]
  },
  name :
  {
    type : String,
    required : [true, "Value of name is null"]
  },
  content : [],
  type : String
});

module.exports = mongoose.model('infoDB', dbSchema);
