var expect = require("chai").expect;

// var mongoose = require('mongoose');
var jobModel = require('../models/Job.js');
var jobsData = require("../job-data.js");
var findJobs = jobsData.findJobs;
var connectDB = jobsData.connectDB;
var resetJobs = jobsData.resetJobs;
var Promise = require("bluebird");



// converts the connect function to a promise
// var connectDB = Promise.promisify(mongoose.connect,mongoose);



describe("get jobs",function(){
	var jobsList;
	before (function(done){                                                                                     ('mongodb://localhost/jobfinder')
		connectDB('mongodb://localhost/jobfinder')
		.then(resetJobs()) // then receives a function or a promise
		.then(jobsData.seedJobs)
		.then(findJobs())
		.then(function(jobs){
			jobsList = jobs;
			done();
		});
		
	});
	/*
	it('Should be greater than 3',function(){
		expect(4).to.be.at.least(3);
	});
	*/
	it("Should never be empty since jobs are seeded",function(){
		expect(jobsList.length).to.be.at.least(1);
	});

	it("Should have a job with a title",function(){
		expect(jobsList[0].tittle).to.not.be.empty;
	});

	it("Should have a job with a description",function(){
		expect(jobsList[0].description).to.not.be.empty;
	});



});