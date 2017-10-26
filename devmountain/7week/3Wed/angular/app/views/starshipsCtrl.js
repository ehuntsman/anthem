angular.module("starwars").controller("starshipsCtrl", function($scope, starshipsService){
    $scope.name = "starships"
    starshipsService.getStarships().then(data=>{
        $scope.data = data;
    })
})