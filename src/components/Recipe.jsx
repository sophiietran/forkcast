export default function Recipe(props){

    return (
      <>
        {props.recipeShown === false ? (
          <h2>show recipe right herrreee</h2>
        ) : null}
      </>
    );
}