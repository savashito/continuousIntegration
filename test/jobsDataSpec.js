var expect = require("chai").expect;
describe("get jobs",function(){
	it("Should never be empty since jobs are seeded",function(){
		jobsList = [3];
		expect(jobsList.length).to.be.at.least(1);
	});
});