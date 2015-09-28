app.controller('CourseController', function($scope, sharedProperties) { 
  $scope.course = {
    name: '',
    desc: ''
  };
  $scope.variable = sharedProperties.getProperty();
  $scope.course.doClick = function() {
    sharedProperties.setProperty($scope.course.name);
    $scope.variable = sharedProperties.getProperty();
    var desc = $scope.course.desc;
    alert(sharedProperties.getProperty());
  };

});