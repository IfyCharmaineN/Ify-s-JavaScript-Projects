 // Using an API to create a list of sample ingredients
 const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

// Get reference to the datalist element
const suggestionList = document.getElementById('ingredientSuggestion');

// Make a GET request to fetch sample ingredients from TheMealDB API
fetch(apiURL)
     .then(response => response.json())
     .then(data => {
        // Extract the list of ingredients from the API response
        const ingredients = data.meals.map(meal => meal.strIngredient);
        // Populate the dropdown list of suggestions with the extracted ingredients
        ingredients.forEach(ingredient => {
            const option = document.createElement('option');
            option.value = ingredient;
            suggestionList.appendChild(option);
        });
     })
     .catch(error => {
        console.error('Error', error);
     });