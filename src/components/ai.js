import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCFEPWXTXAMa9N6ex4XUa_jpQ0L6KyCLsk",
});

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const SYSTEM_PROMPT = 
    "You are an assistant that receives a list of ingredients that a user has and suggests a recipe the user could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients the user didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. Make the title be an H2 element and the instructions and ingredient headers be H3 element. Use --- before the title to put a line at the start of the recipe. Here is the list of ingredints: " +
    ingredientsString;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: SYSTEM_PROMPT,
  });

  return response.text;
}

