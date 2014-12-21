var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job.js');

var app = express();

app.set('views',__dirname);
app.set('view engine','jade');

app.use(express.static(__dirname+'/public'))

app.get('/api/jobs',function(req,res){
	// res.send('test');
	// query mongose fore jobs
	mongoose.model('Job').find({}).exec(function(err,coll){
		res.send(coll);
	});
});

app.get('*',function(req,res){
	res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder')
 mongoose.connect('mongodb://savashito:rtopdfrtio@ds027771.mongolab.com:27771/jobfinder');

var con = mongoose.connection;

con.once('open',function(){
	console.log('Connected succesfully :)');
	// create the entrys default
	jobModel.seedJobs();
})

app.listen(3000);