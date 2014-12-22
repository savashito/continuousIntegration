var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job.js');
var jobsData = require("./job-data.js");
var findJobs = jobsData.findJobs;
var connectDB = jobsData.connectDB;
var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname+'/public'))

app.get('/api/jobs',function(req,res){
	// res.send('test');
	// query mongose fore jobs
	findJobs({})
	.then(function(coll){
		res.send(coll);
	});
});

app.get('*',function(req,res){
	res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder')
 connectDB('mongodb://localhost/jobfinder')
 .then(function(){
	console.log('Connected succesfully :)');
	// create the entrys default
	jobModel.seedJobs();
});
// var con = mongoose.connection;


app.listen(3000);