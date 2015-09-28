app.controller('CourseMController', function($scope, sharedProperties) { 
  $scope.variable = sharedProperties.getProperty();
  $scope.var2 = "yo";

});