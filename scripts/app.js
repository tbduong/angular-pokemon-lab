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

// //POST new pokemon

//DELETE poke
pm.deletePoke = function(pokemon) {
    $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id
    }).then(function successCallback(json) {
        var pokeIndex = pm.pokemonList.indexOf(pokemon);
        pm.pokemonList.splice(pokeIndex, 1);
    }, function errorCallback(response) {
        console.log("ERROR! Could not delete this pokemon.", response);
    });
  };

  //EDIT poke























}
