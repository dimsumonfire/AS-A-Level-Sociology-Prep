import { GoogleGenAI, Type } from '@google/genai';

async function test() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('No API key');
    return;
  }

  const ai = new GoogleGenAI({ 
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
  const randomSeed = Math.floor(Math.random() * 1000000);
  const selectedPaper = "Paper 1";
  
  const paperTopicGuidance = {
    "Paper 1": "Socialisation, Identity, Methods, and Theory (Mead, Cooley, Goffman, Positivism vs Interpretivism)",
    "Paper 2": "The Family (Murdock, Parsons, Zaretsky, Oakley, Family Diversity, Childhood, Demography)",
    "Paper 3": "Education (Durkheim, Parsons, Bowles & Gintis, Althusser, Achievement, Policy, Hidden Curriculum)",
    "Paper 4": "Globalisation, Media, and Religion (Wallerstein, Baudrillard, Galtung & Ruge, Weber, Secularisation)"
  };

  const prompt = `Generate a UNIQUE, ORIGINAL, and highly realistic A Level Sociology ${selectedPaper} exam paper. 
            Random Seed: ${randomSeed}. Ensure questions are different from previous generations.
            
            TOPIC GUIDANCE: This paper MUST focus ONLY on: ${paperTopicGuidance[selectedPaper as keyof typeof paperTopicGuidance]}.
            DO NOT include topics from other papers (e.g., if Paper 1 is selected, do not include Education or Family).
            
            Provide:
            1. The full paper structure (Title, Duration, Total Marks, Series e.g. "May/June 2024", Paper Code e.g. "9699/11").
            2. A detailed marking scheme for ALL questions including indicative content and examiner guidance.
            
            CRITICAL: Ensure the output is a valid JSON object. Escape all double quotes and newlines within string values correctly.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            duration: { type: Type.STRING },
            totalMarks: { type: Type.NUMBER },
            series: { type: Type.STRING },
            paperCode: { type: Type.STRING },
            sections: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  instruction: { type: Type.STRING },
                  questions: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        text: { type: Type.STRING },
                        marks: { type: Type.NUMBER }
                      },
                      required: ["id", "text", "marks"]
                    }
                  }
                },
                required: ["name", "instruction", "questions"]
              }
            },
            markingScheme: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionId: { type: Type.STRING },
                  indicativeContent: { type: Type.ARRAY, items: { type: Type.STRING } },
                  guidance: { type: Type.STRING }
                },
                required: ["questionId", "indicativeContent", "guidance"]
              }
            }
          },
          required: ["title", "duration", "totalMarks", "sections", "markingScheme"]
        }
      }
    });

    console.log(response.text);
  } catch (err) {
    console.error(err);
  }
}

test();
