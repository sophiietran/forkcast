import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "salmon",
    "spinach",
    "pasta",
    "tomatoes",
  ]);

  // map through items of ingredients and change to unordered list items
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipeShown, setRecipeShown] = React.useState("false");

  // get the new ingredient from user input and add to state array
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  function getRecipe() {
    setRecipeShown((prev) => !prev);
    console.log(recipeShown);
  }

  return (
    <main>
      {/* form to input ingredients */}
      <form action={addIngredient} className="ingredients-form">
        <input
          type="text"
          placeholder="e.g. chicken"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>

      <p className="minimum-ingredients">
        Please enter at least 4 ingredients to get a recipe!
      </p>

      {ingredientsList.length > 0 && (
        <section className="ingredient-display">
          <h2>Ingredients on hand:</h2>
          <ul>{ingredientsList}</ul>
        </section>
      )}

      {ingredientsList.length > 3 && (
        <div className="get-recipe-container">
          <div className="get-recipe-text">
            <h3>Get your recipe!</h3>
            <p>
              Click the button to generate a recipe from your list of
              ingredients
            </p>
          </div>
          <button onClick={getRecipe} className="get-recipe-button">
            Get Recipe
          </button>
        </div>
      )}
      {recipeShown === false ? <h2>show recipe right herrreee</h2> : null}
    </main>
  );
}
