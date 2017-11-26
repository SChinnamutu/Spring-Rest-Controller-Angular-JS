'use strict';
module.controller('CountryController', function ($scope, StudentDataOp) {
	
	$scope.status; 
	$scope.countries = [];
    
     _refreshCountryData();
     
    function _refreshCountryData() {
    	StudentDataOp._refreshCountryData()
            .success(function (countries) {
            	$scope.countries = countries;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };
    
    
    
    $scope.addCountry = function () {
    	$scope.countryForm = { 
    	         id : $scope.countryForm.countryId,
    	         countryName : $scope.countryForm.countryName,
    	         population :  $scope.countryForm.population
    	};
    	
    	StudentDataOp.addCountry($scope.countryForm)
            .success(function (countries) {
            	$scope.countries = countries;
            	$scope.countryForm.countryId = "";
            	$scope.countryForm.countryName= "" ;
            	$scope.countryForm.population = "";
            })
            .error(function (error) {
                $scope.status = 'Unable to load country data: ' + error.message;
            });
    };
    
    $scope.deleteCountry = function (id) {
    	StudentDataOp.deleteCountry(id)
            .success(function (countries) {
                $scope.status = 'Inserted Student! Refreshing Student list.';
                $scope.countries = countries;
            }).
            error(function (error) {
                $scope.status = 'Unable to insert Student: ' + error.message;
            });
    };
    
    $scope.editCountry = function (id) {
    	StudentDataOp.editCountry(id)
        .success(function (country) {
            $scope.status = 'Inserted Student! Refreshing Student list.';
            $scope.countryForm.countryId = country.id;
            $scope.countryForm.countryName = country.countryName;
            $scope.countryForm.population = country.population;
        }).
        error(function (error) {
            $scope.status = 'Unable to insert Student: ' + error.message;
        });
    };

    $scope.reset = function () {
    	$scope.countryForm.countryId = "";
    	$scope.countryForm.countryName= "" ;
    	$scope.countryForm.population = "";
    };
 
    
   
});

