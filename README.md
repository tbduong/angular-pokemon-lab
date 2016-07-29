

# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60">  Angular-pokemon-lab
## Gotta CRUD em all!
| **Objectives** |
| :---- |
| Get practice building an Angular client side |
| Use $http to access a RESTful API |


> NOTE: For ease of coding, a singular pokemon will be called a poke; the plural form will be pokemon.  

In this lab, you'll be creating a simple pokemon app to keep track of pokemon.  We will provide you with the API endpoint; you will only need to work with an `index.html`, `app.js`, and `main.css`

When a user goes to `/`, they should see a list of all of the pokemon in the API. When a user goes to `/pokemon/:id`, they should see a single poke. On the `/pokemon/:id` page a user should be able to edit or delete a poke.

Here is an example of a `$http` call to fetch an index all pokemon:

```javascript
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemon = response.data.pokemon;
    console.log(vm.pokemon);
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

```

Your data (a list of pokemon) is available at `https://super-crud.herokuapp.com/pokemon`. You and your classmates will all be working with this database, so things might get a little crazy. If there are no pokemon left or far too many pokemon, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your classmates though, otherwise they might be puzzled why their newly created poke resources aren't appearing in the database.

## Expectations

Your finished product will

  1. Successfully navigate to an index.html *(hint: no serving!)*. That page will:
    * display all of the pokemon.
    * show the image, name, element, strength, and weakness for each poke.
    * include a link to the show poke page on the name of each poke.
  2. For each pokemon in the index have the following:
    * a delete button that deletes the specific poke from the database and, when successfully deleted, removes that pokemon entry from the pokemon index page.
    * an edit button that reveals a form for the user to edit the attributes of the poke.
    	* The edit form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

## Getting Started

1. Fork this repo, and clone it into your `wdi` folder on your local machine.
2. Change directories into `angular-pokemon-lab`.
3. If you see no errors, you're ready to start CRUDing! Build your layout, build your controllers, catch a Squirtle, win.
4. Research the Pokemon API Endpoint [here](https://github.com/SF-WDI-LABS/super-crud-api)

## Stretch Challenges

2. **Allow the user to edit the poke image:** allow the user to change the URL for the poke image.
3. **Add filters to organize the pokemon index page:** add a search bar to filter the pokemon by your search, or buttons to sort them alphabetically by name or element.
4. **Add a button to reverse the pokemon display** Searching by name? Research toggle state and toggle the results in reverse order. 
5. **Form validation** Check for quality poke-info before a pokmeon is allowed to enter the Pokemon database.

## Submission

Make a pull request with a 0 - 5 rating of your comfort of the assignment, a 0 - 5 rating of your completeness on the assignment, and a note on your experience completing the lab. Make sure your pull request is going to `sf-wdi-30/angular-pokemon-lab`. *Check the base fork before you submit!*
