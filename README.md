# ForkCast

A React-based web application that generates recipes using Gemini AI based on ingredients users already have on hand.

## Setup and Running

Follow these steps to get Forkcast up and running on your local machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or Yarn (your preferred package manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sophiietran/forkcast.git
    cd forkcast
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install
    ```
3.  **Get Your Google Gemini API Key:**
    *   **Forkcast uses Google's Gemini AI to generate recipes.** To use the application, you'll need to obtain your own API key.
    *   Go to [**Google AI Studio**](https://aistudio.google.com/) and sign in with your Google account.
    *   Once logged in, look for the **"Get API key"** button or navigate to the **"API Keys"** section.
    *   Create a **new API key**.

4.  **Integrate the API Key into the Code:**
    *   Open the file `src/components/ai.js` in your code editor.
    *   Locate the line that looks like this:
        ```javascript
        const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY_HERE");
        ```
    *   **Replace `"YOUR_GEMINI_API_KEY_HERE"`** with the actual API key you just obtained from Google AI Studio. Make sure to keep the quotation marks around the key.

### Running the Development Server

1.  **Start the application:**
    ```bash
    npm run dev # or yarn dev
    ```
2.  Open your browser and navigate to `http://localhost:5173` (or the local address provided in your terminal).

### Using Forkcast

1.  Enter at least four ingredients you have on hand into the input field.
2.  Click "Add Ingredient" for each item.
3.  Once you have enough ingredients, click "Get Recipe" to see your AI-generated meal suggestion!

---
