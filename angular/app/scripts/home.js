'use strict';

angular
  .module('app')
  .controller('HomeController', function($scope, USER, OPEN_KNESSET, $location, $window, $q, modal) {
    var firstTime = true,
        numChosen = 0;
    if (window.sessionStorage.hasOwnProperty('firstTimeHome'))
     firstTime =  eval(window.sessionStorage.getItem('firstTimeHome'));

    $scope.modal = modal;
    $scope.loading = true;
    $scope.chairs = [];

    $scope.reset = function () {
      for (var i=0; i < this.rows.length; i++) {
        var row = $scope.rows[i];
        for (var j=0; j < row.length; j++) {
          $window.sessionStorage.setItem('chair'+row[j].id, null);
          row[j].chosen = null;
        }
      }
    };
    $scope.help = function () {
      modal.show('/views/home-help.html')
    };

    $q.all({
      candidates: OPEN_KNESSET.get_candidates(),
      committees: OPEN_KNESSET.get_committees()
    }).then(function(res) {
      $scope.rows = [[],[]];
      for (var i=0; i < res.committees.length; i++) {
        var c = res.committees[i],
            electedId = eval($window.sessionStorage.getItem('chair'+c.id)),
            row = Math.floor(i/6);
        if (electedId) {
          $scope.rows[row].push ({
            name: c.name, absolute_url: c.absolute_url, id: c.id,
            chosen: res.candidates[electedId]
          })
          numChosen++;
        }
        else
          $scope.rows[row].push ({
            name: c.name, absolute_url: c.absolute_url, id: c.id,
            chosen: null
          });
      }
      $scope.loading = false;
      if (numChosen == 12) {
        window.startFireworks();
        modal.show('/views/finished.html');
      }

    });
    if (firstTime) {
      $window.sessionStorage.setItem('firstTimeHome', "false");
      $scope.help();
    }
  })
;
