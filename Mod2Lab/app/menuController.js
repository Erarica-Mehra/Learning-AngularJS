app.controller('menuController', ['$scope', function($scope) {
    $scope.model={title : "Our Menu"};
    $scope.changeMainDish = function (item, price) {
        $scope.model.mainDish = item;
        $scope.model.price = price;
    }
    $scope.$watch('model.mainDish', function(newValue, oldVValue) {
        if(newValue ==='BBQ Chicken Pizza') {
            alert('You have selected the BBQ Chicken Pizza!');
        }
    } )
}]);