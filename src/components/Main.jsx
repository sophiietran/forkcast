import React from "react";
import IngredientsList from "./IngredientsList";
import ShowRecipe from "./Recipe"
import { getRecipeFromAI } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const [recipe, setRecipe] = React.useState("");

  const[isLoading, setIsLoading] = React.useState(false);

  // get the new ingredient from user input and add to state array
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function getRecipe() {
      setIsLoading(true);
      setRecipe("");
      
      try{
          const recipeMarkdown = await getRecipeFromAI(ingredients);
          setRecipe(recipeMarkdown);
      }catch(error){
        console.error("Error fetching recipe:", error);
      }finally{
        setIsLoading(false);
      }
      
  }

  return (
    <main>

      <h4 className="description">
        Staring at your pantry with no clue what to make? Forkcast is here to
        help! Just list your ingredients, and our AI will forecast a creative
        recipe tailored for you.
      </h4>

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

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe}
        isLoading = {isLoading} />
      )}

      {recipe && <ShowRecipe recipe={recipe} />}
    </main>
  );
}
