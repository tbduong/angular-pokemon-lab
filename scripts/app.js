console.log("POKEDEX online");
angular
.module('pokedex',[])
.controller('PokemonIndexController', PokemonIndexController);

PokemonIndexController.$inject = [ '$http' ]; //inject use of $http to hit endpoints
function PokemonIndexController( $http ){
  var pm = this;

//GET all PokemonIndexCtrl
$http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    pm.pokemonList = response.data.pokemon;
    console.log("SUCCESS found:", pm.pokemonList);
  }, function errorCallback(response) {
      console.log("ERROR! Error retrieving data,", response);
});

//























}
