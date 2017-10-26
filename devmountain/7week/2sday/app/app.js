angular.module("myApp", [])

angular.module("myApp").controller("pancakeCtrl", ($scope)=>{
    $scope.name = "pancakeCtrl";

    const basicPancake = {
        background:"indigo",
        height:'20px',
        width:'200px'
    };
    $scope.newPancake= Object.assign({}, basicPancake);

    $scope.pancakes = [
        {background: 'red', height: '20px', width: '110px'},
        {background: 'orange', height: '20px', width: '120px'},
        {background: 'yellow', height: '20px', width: '130px'},
        {background: 'green', height: '20px', width: '140px'},
        {background: 'blue', height: '20px', width: '150px'},
        {background: 'violet', height: '20px', width: '160px'},
        {background: 'purple', height: '20px', width: '170px'}
    ]

    $scope.addPancake = function(newPancake){
        $scope.pancakes.push($scope.newPancake);
        $scope.newPancake = Object.assign({}, basicPancake);
    }
})