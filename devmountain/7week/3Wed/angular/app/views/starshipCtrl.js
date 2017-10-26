angular.module("starwars").controller("starshipCtrl", function($scope, $stateParams, starshipsService){
    // $scope.id = $stateParams.id;
    starshipsService.getStarship($stateParams.id).then(data=>{
        $scope.starship = data
    })
})