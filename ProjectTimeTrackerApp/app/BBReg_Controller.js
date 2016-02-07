//bbregApp.controller("bbregCtrl", function($scope, $firebaseObject) {
//  var ref = new Firebase("https://burning-torch-7069.firebaseio.com/");
  // download the data into a local object
//  $scope.data = $firebaseObject(ref);
  // download the data into a local object
//  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
//  syncObject.$bindTo($scope, "data");
//});
bbregApp.controller("bbregCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://burning-torch-7069.firebaseio.com/ProjectTrackerTimesheets");

  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);

  $scope.SaveTimesheet = function() {

    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(curr.setDate(first));//.toUTCString();
    var lastday = new Date(curr.setDate(last));//.toUTCString();
    alert(firstday);
    alert(lastday)

    $scope.messages.$add({
      Project: "001",
      Monday: 1,
      Tuesday: 1,
      Wednesday: 1,
      Thursday: 1,
      Friday: 1,
      Saturday: 1,
      Sunday: 1,
      TimesheetWeekStart: firstday.toUTCString(),
      TimesheetWeekEnd: lastday.toUTCString()

    });

  };
});
