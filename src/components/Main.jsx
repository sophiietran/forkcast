import React from "react";
import IngredientsList from "./IngredientsList";
import ShowRecipe from "./Recipe"
import { getRecipeFromAI } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "salmon",
    "spinach",
    "pasta",
    "tomatoes",
  ]);

  const [recipe, setRecipe] = React.useState("");

  // get the new ingredient from user input and add to state array
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromAI(ingredients)
    //console.log(recipeMarkdown)
    setRecipe(recipeMarkdown)
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

      {ingredients.length > 0 && <IngredientsList 
      ingredients = {ingredients} 
      getRecipe = {getRecipe}
      />}

      {recipe && <ShowRecipe recipe = {recipe}/>}
      
    </main>
  );
}
