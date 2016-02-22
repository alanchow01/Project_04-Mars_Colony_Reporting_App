(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('red'));

    it('should work!', inject(function($controller, $rootScope) {

      var $scope = $rootScope.$new();

      var mainController = $controller('MainController', { $scope: $scope });
      expect(mainController.online).toBe(true);

    }));
  });
})();
