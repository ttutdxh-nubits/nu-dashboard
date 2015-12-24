(function() {
  'use strict';

  angular
    .module('nuDashboard')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdIconProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    $mdIconProvider
       .defaultFontSet( 'material-icons' ); 

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
