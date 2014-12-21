angular.module('app',['ngResource']);

angular.module('app').controller('testCtrl',function($scope,$resource){
	$scope.jobs = $resource('/api/jobs').query();
	// [
	// 	{title: "Sales Person",description:'Ventas de persona'},
	// 	{title: "Account",description:'Usaras el teclado'},
	// ]
})