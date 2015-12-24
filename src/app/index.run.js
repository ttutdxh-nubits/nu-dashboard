(function() {
  'use strict';

  angular
    .module('nuDashboard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
