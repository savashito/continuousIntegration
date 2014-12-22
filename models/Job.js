var mongoose = require("mongoose");
// var Promise = require("bluebird");
// var jobsData = require("../job-data.js");
// var findJobs = jobsData.findJobs;
// var connectDB = jobsData.connectDB;



// fetch our schema
var jobSchema = mongoose.Schema({
	tittle:{type:String},
	description:{type:String}
});
mongoose.model('Job',jobSchema);
