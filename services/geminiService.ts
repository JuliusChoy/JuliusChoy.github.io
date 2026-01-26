import { GoogleGenAI } from "@google/genai";

export const generateSummary = async (text: string): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not defined");
    return "API Key missing. Cannot generate summary.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a concise, 2-sentence summary of the following text, focusing on the political implications: "${text}"`,
    });
    
    return response.text || "No summary available.";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Failed to generate summary. Please try again later.";
  }
};