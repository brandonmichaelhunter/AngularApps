
projects.controller("projectsCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://burning-torch-7069.firebaseio.com/ProjectTrackerTimesheets/Projects");

  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);
  $scope.DeleteProject = function(Project){
    var result = confirm("Money!!! Are you sure you really want to trash this project?");
    if (result) {
        $scope.messages.$remove(Project);
    }

  };
  $scope.SaveProject = function() {
    
    $scope.messages.$add({
      ProjectName: $scope.ProjectName,
      IsBillable: $scope.IsBillable,
      Rate: $scope.Rate,
      PeoplesoftCode: $scope.PeoplesoftCode,
      IsActive: $scope.IsActive,
      CreatedDate: moment().format('L')
    });
    $scope.ProjectName = null;
    $scope.IsBillable = false;
    $scope.Rate = null;
    $scope.PeoplesoftCode = null;
    $scope.IsActive = false;
  };
});
