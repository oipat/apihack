// Controllers

var hackathonControllers = angular.module('hackathonControllers', []);

hackathonControllers.controller('MainController', ['$scope',function( $scope){
	

}]);


hackathonControllers.controller('mainCtrl', ['$scope', function( $scope ){
	
}]);

;

hackathonControllers.controller('helpCtrl', ['$scope', function( $scope){
	
}]);


hackathonControllers.controller('restaurantCtrl', ['$scope','$http', function( $scope, $http){
	var location
	//Get current location from gps
	navigator.geolocation.getCurrentPosition(function(pos){
		location = pos.coords;
		//Call api to get restaurants
		$http.get('/api/restaurants/' + location.latitude + '/' + location.longitude + '/').success(function(data){
			$scope.restaurants = data;
		});
	});
	
}]);
