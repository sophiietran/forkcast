export default function IngredientsList(props) {
// map through items of ingredients and change to unordered list items
  const ingredientsList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
      <section className="ingredient-display">
        <h2>Ingredients on hand:</h2>
        <ul>{ingredientsList}</ul>
      </section>

      {ingredientsList.length > 3 && (
        <div className="get-recipe-container">
          <div className="get-recipe-text">
            <h3>Get your recipe!</h3>
            <p>
              Click the button to generate a recipe from your list of
              ingredients
            </p>
          </div>
          <button onClick={props.getRecipe} className="get-recipe-button">
            Get Recipe
          </button>
        </div>
      )}
    </>
  );
}
