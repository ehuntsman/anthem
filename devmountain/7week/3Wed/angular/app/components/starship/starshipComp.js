angular.module("starwars").component("starship", {
    controller: function(){
        this.goToHyperSpace = ()=>{
            alert(`${this.details.name} goes wweeeeeeeeeoooooOOOOOOOOOOOO`);
        }
    },
    bindings:{
        owner: '@', //string binding
        details: '<', // one way binding
        onPurchase: '&', //actiong binding
        fullDetails: '<'
    },
    controllerAs:'ship',
    templateUrl: 'app/components/starship/starshipTemplate.html'
})