app.controller('MainController', function($scope) { 
  $scope.professor = {
  	name: 'Ze Chen',
  	courses: [{	
  			name: 'CS 1331',
  			section: "A",
  			numOfStudents: 1
  		},
  		{
  			name: 'ENGL 1101',
  			section: "C",
  			numOfStudents: 1
  		},
  		{
  			name: 'PHYS 2211',
  			section: "C05",
  			numOfStudents: 1
  		}] 
  };

});