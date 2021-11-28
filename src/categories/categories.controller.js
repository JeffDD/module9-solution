(function () {
  "use strict";

  angular.module("MenuApp")
    .controller("CategoriesController", CategoriesController);

  CategoriesController.$inject = ["categories"];

  function CategoriesController(categories) {
    const ctrl = this;
    ctrl.categories = categories;
  }
})();