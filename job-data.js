var mongoose = require("mongoose");
var Promise = require("bluebird");
// defines how we get our data for the test
var findJobs = function(query){
	// wrap the query
	// console.log('finding jobs');
	// console.log(query);
	return Promise.cast(mongoose.model('Job').find(query).exec());
};
exports.findJobs = findJobs;
exports.connectDB = Promise.promisify(mongoose.connect,mongoose);
/*function(){
	return Promise.promisify(mongoose,mongoose.connect);
	// ('mongodb://savashito:rtopdfrtio@ds027771.mongolab.com:27771/jobfinder');
};
*/




var Job = mongoose.model('Job');



// promisify the creation of jobs of the data base
var createJob = Promise.promisify(Job.create,Job);

exports.seedJobs = function(){
	// return new Promise(function(res,rej){
	var jobs = [
		{tittle:'Slave',description:'You will have to work as a programmer'},
		{tittle:'Master Jedi',description:'you will kill the sith lords'},
		{tittle:'Sith lord',description:'You will love the Jedi'}
	];
		var a= findJobs()
		.then(function(coll){
			// console.log('len '+coll.length)
			if(coll.length === 0){
				// console.log('jobs have been creates :)\n');
				// maps the array jobd
				// returns the a promise
				// the done is executed when the last job inside the array returns
				
				return Promise.map(jobs,function(job){
					return createJob(job);
				});
			}else{
				// console.log('jobs found '+coll.length);
				// console.log(coll);
			}
		});
		// console.log('MIauuu');
		return a;
}

exports.resetJobs = function (){
	// mongoose.connect.collections['jobs'].drop(call);
	return new Promise(function (res,rej){
		//jobModel.seedJobs()
		//.then(
			//function(){
				if(mongoose.connection.collections['jobs']){
					// res();
					// console.log('Jobs have been deleted')
					mongoose.connection.collections['jobs'].drop(res,rej);
					// console.log('jobs have been reset :)');
					// res();
				}
				else
					res();
		//	}
		//);
	});
};

