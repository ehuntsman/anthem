angular.module("starwars", ['ui.router'])

angular.module("starwars").config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
        .state("home", {
            url:"/",
            templateUrl:"app/views/homeTemplate.html",
            controller: "homeCtrl"
        })
        .state("starships", {
            url:"/starships",
            templateUrl:"app/views/starshipsTemplate.html",
            controller: "starshipsCtrl"
        })
        .state("starship", {
            url:"/starships/:id",
            templateUrl: "app/views/starshipTemplate.html",
            controller: "starshipCtrl"
        })
    $urlRouterProvider.otherwise('/')
})