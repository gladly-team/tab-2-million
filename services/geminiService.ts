import { GoogleGenAI, Type } from "@google/genai";
import { Charity } from "../types";

// Initialize the Gemini client
// NOTE: In a real production app, you might proxy this through a backend to protect the key,
// but for this demo we use the env variable directly as requested.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateImpactStory = async (charity: Charity, userDonationAmount?: number): Promise<{ story: string; headline: string }> => {
  const model = 'gemini-2.5-flash';
  
  const prompt = `
    You are a passionate and empathetic storyteller for "Tab for a Cause".
    We have raised money for ${charity.name}. 
    Their mission: ${charity.description}.
    Their impact metric: ${charity.impactStatement}.
    
    ${userDonationAmount ? `A user just hypothetically donated $${userDonationAmount}.` : `We are celebrating the total impact raised.`}

    Write two things in JSON format:
    1. "headline": A short, punchy, 5-7 word headline summarizing the specific impact of this donation.
    2. "story": A 2-3 sentence inspiring paragraph visualizing exactly what this money achieves in the real world. Be concrete. Mention trees, water, books, or animals specifically.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            story: { type: Type.STRING },
          },
          required: ["headline", "story"],
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating story:", error);
    return {
      headline: `Making a difference with ${charity.name}`,
      story: "Your contributions act as a catalyst for change, bringing resources and hope to those who need it most. Together, we are building a better world."
    };
  }
};

