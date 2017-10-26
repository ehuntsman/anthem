angular.module("starwars").service("starshipsService", function($http){
    this.staticData = "Is there morning in space?"

    this.getStarships = function(){
        return $http.get('https://swapi.co/api/starships/').then((response)=>{
            return response.data.results.map(e => {
                e.url.slice(31, e.url.length-1) *1;
                return e;
            })
        }).catch(err=>console.log(err));
    }
    this.getStarship = function(id){
        return $http.get(`https://swapi.co/api/starships/${id}/`).then((response)=>{
            return response.data
        }).catch(err=>console.log(err));
    }  
})