angular.module('app',[]);

angular.module('app').controller('testCtrl',function($scope){
	$scope.jobs = [
		{title: "Sales Person",description:'Ventas de persona'},
		{title: "Account",description:'Usaras el teclado'},
	]
})