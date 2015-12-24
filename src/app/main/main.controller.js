(function() {
  'use strict';

  angular
    .module('nuDashboard')
    .controller('MainController', MainController)
    .controller('LineVMController', ChartController);

  /** @ngInject */
  function MainController($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  }

  function ChartController($scope) {
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      var patches = [
         {op:"replace", path:"/0/0", value:54 },
         {op:"replace", path:"/0/0", value:35 },
         {op:"replace", path:"/0/0", value:41 },
         {op:"replace", path:"/0/0", value:43 },
         {op:"replace", path:"/0/0", value:34 },
         {op:"replace", path:"/0/0", value:24 },
         ];
      jsonpatch.apply( $scope.data, [patches] );

      $scope.data = [
        $scope.data[1],
        $scope.data[0]
      ];
      console.log($scope.data);
    };
  }

})();
