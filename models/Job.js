var mongoose = require("mongoose");

// fetch our schema
var jobSchema = mongoose.Schema({
	tittle:{type:String},
	description:{type:String}
});

var Job = mongoose.model('Job',jobSchema);

exports.seedJobs = function(){
	Job.find({}).exec(function(err,coll){
		if(coll.length === 0){
			Job.create({tittle:'Slave',description:'You will have to work as a programmer'});
			Job.create({tittle:'Master Jedi',description:'you will kill the sith lords'});
			Job.create({tittle:'Sith lord',description:'You will love the Jedi'});

		}
	})
}
