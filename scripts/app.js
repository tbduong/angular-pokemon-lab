console.log("POKEDEX online");
angular
.module('Pokedex, []')
.controller('PokemonIndexCtrl', PokemonIndexCtrl);

PokemonIndexCtrl.$inject = ['$http']; //inject use of $http to hit endpoints

function PokemonIndexCtrl( $http){

var pk = this;
pk.newPokemon = {};







}
