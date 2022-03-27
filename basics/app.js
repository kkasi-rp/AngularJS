var appModule = angular.module("myApp", []);

appModule.controller("GreetCtrl", function ($scope, $rootScope) {
    $scope.greetMessage = "Welcome to Angular JS Tutorial";
    $rootScope.parent_scope_var = "Family Members : ";
});

appModule.controller("ListCtrl", function ($scope) {
    $scope.names = ["pushpa", "purvi", "ruthvik"];
});

appModule.controller("ClockCtrl", function ($scope) {
    $scope.clock = new Date();
    $scope.count = 1;
    var updateClock = function () {
        $scope.clock = new Date();
        $scope.count++;
        if ($scope.count == 5) {
            clearInterval(intv);
        }
    };
    updateClock();
    intv = setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);
});
