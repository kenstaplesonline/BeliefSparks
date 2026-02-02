import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini with API key from environment
const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_GEMINI_API_KEY environment variable is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);

// Get the model - using gemini-1.5-flash for speed or gemini-1.5-pro for quality
export const getModel = () => {
  return genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
};

// Helper function to generate text
export async function generateText(prompt: string): Promise<string> {
  try {
    const model = getModel();
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating text with Gemini:", error);
    throw new Error("Failed to generate content with Gemini AI");
  }
}

// Helper for neighborhood-related queries
export async function askAboutNeighborhood(neighborhood: string, query: string): Promise<string> {
  const prompt = `You are a helpful assistant for a Calgary neighborhood discovery platform called "The Neighbourhoods".
  Provide authentic, data-driven insights about ${neighborhood} neighborhood in Calgary, Alberta.
  
  Query: ${query}
  
  Focus on:
  - Specific examples (businesses, landmarks, parks)
  - Real data where possible
  - What makes the neighborhood unique
  - Celebratory, community-focused tone
  
  Keep response concise (under 150 words) and helpful.`;

  return generateText(prompt);
}
