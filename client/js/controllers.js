var controllers = angular.module('myApp.controllers', []);

controllers.controller('contactViewcontroller', ['$scope', 'Contacts', '$location', function($scope, Contacts, $location) {
    
    $scope.getContacts = function() {
        Contacts.query().$promise.then(function(data) {
            $scope.contacts = data;
        })
    }
    
    $scope.clearName = function() {
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
    }
    
    $scope.submitName = function() {
        var newContact = {
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone
        }
        
        Contacts.save(newContact).$promise.then(function() {
            $scope.clearName()
        }).then(function() {
            $location.path('#/')
        });
    }
    
    $scope.getContacts();
    
}]);

controllers.controller('SingleContactControl', ['$scope', '$routeParams', 'Contacts', function($scope, $routeParams, Contacts) {
    var contactId = $routeParams.id;
    console.log('Here is the Contact that you requested...');
    console.log(contactId)
    $scope.getContacts = function() {
        Contacts.get({id: contactId}).$promise.then(function(data) {
            $scope.contact = data;
        })
    }
    
    $scope.getContacts();
}]);