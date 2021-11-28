angular.module("data")
  .service("MenuDataService", MenuDataService)
  .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ["$http", "ApiBasePath"];

function MenuDataService($http, ApiBasePath) {
  let service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ApiBasePath + "/categories.json",
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log("Something went wrong: " + error);
        return [];
      });
  };

  service.getItemsForCategory = function (shortName) {
    return $http({
      method: "GET",
      url: ApiBasePath + "/menu_items.json",
      params: {category: shortName}
    })
      .then(function (response) {
        return {
          name: response.data["category"]["name"],
          items: response.data["menu_items"]
        };
      })
      .catch(function (error) {
        console.log("Something went wrong: " + error);
        return {};
      });
  };

}