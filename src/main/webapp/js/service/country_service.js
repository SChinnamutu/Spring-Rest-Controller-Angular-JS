'use strict';
var StudentService = angular.module('StudentService', []);
	StudentService.factory('StudentDataOp', ['$http', function ($http) {
    var urlBase = 'http://localhost:8082/SpringStudentRestServices/rest/countries';
    var StudentDataOp = {};
    StudentDataOp._refreshCountryData = function () {
        //return $http.get(urlBase);
    	return $http({
            method : 'GET',
            url :  'rest/countries'
        });
    };
    StudentDataOp.addCountry = function (country) {
       return $http.post(urlBase,country);
    };
    
    StudentDataOp.deleteCountry = function (id) {
         return $http({
              method : 'DELETE',
              url :  'rest/country/'  + id
          });
    };
    
    StudentDataOp.editCountry = function (id) {
        return $http({
             method : 'GET',
             url :  'rest/country/'  + id
         });
   };
    return StudentDataOp;
}]);