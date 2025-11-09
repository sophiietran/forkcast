import React from "react";

export default function Main(){
    const [ingredients, setIngredients] = React.useState([])

    // map through items of ingredients and change to unordered list items
    const ingredientsList = ingredients.map((ingredient) =>
    <li key = {ingredient}>{ingredient}</li>)


    // get the new ingredient from user input and add to state array
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prev => [...prev, newIngredient])
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

        {ingredientsList.length > 0 && 
        <section>
            <h2>Ingredients on hand:</h2>
            <ul>{ingredientsList}</ul>
        </section>
        }

        {ingredientsList.length > 3 && "get recipe"}
      </main>
    );
}