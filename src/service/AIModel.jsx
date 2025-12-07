import { GoogleGenerativeAI } from "@google/generative-ai";

// Read API key from Vite env
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
if (!apiKey) {
  throw new Error("Missing VITE_GOOGLE_GEMINI_AI_API_KEY. Add it to your .env file.");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Allow overriding the model via env; default to Gemini 2.5 Flash
// Example: VITE_GEMINI_MODEL=gemini-2.5-flash
const modelName = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-flash";
const model = genAI.getGenerativeModel({ model: modelName });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // Keep history empty; the app sends a fresh prompt built from the user's inputs
  history: [],
});
