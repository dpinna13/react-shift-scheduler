var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  name: {
    type: String
  },
  From: {
    type: String
  },
  To: {
    type: String
  },
  Day: {
    type: String
  },
  active: {
      type: Number,
      default: 1
  }
});

var newSchedule = mongoose.model('Schedule', ScheduleSchema);
module.exports = newSchedule;
