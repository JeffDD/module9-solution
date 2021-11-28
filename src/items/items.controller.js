(function () {
  "use strict";

  angular.module("MenuApp")
    .controller("ItemsController", ItemsController);

  ItemsController.$inject = ["$stateParams", "items"];

  function ItemsController($stateParams, items) {
    const ctrl = this;
    ctrl.name = items.name;
    ctrl.items = items.items;
  }

})();