const mongoose = require('mongoose');

module.exports.Tour = mongoose.model(
  'Tour',
   {
    name: String,
    Time: String,
    vehicle: String
   },
   "tours"
  );
  