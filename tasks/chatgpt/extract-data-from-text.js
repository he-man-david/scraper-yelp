import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (text) {
  if (text.length > 4000) {
    throw new Error("Text cannot exceed 4000 chars");
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [
        {
          role: "system",
          content:
            "You are an expert at analyzing long texts scraped from business website HTML DOM, and extracting the exact info I need in JSON format.",
        },
        {
          role: "user",
          content: generatePrompt(text),
        },
      ],
      temperature: 0,
      max_tokens: 10154,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const { choices, usage } = response;

    return {
      result: JSON.parse(choices[0].message.content),
      usage,
    };
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      console.error("An error occurred during your request.");
    }
  }
}

function generatePrompt(text) {
  return `
    ${text}

    Given the text above, extract info into JSON using below sample as example. JSON needs to be same structure and type values as below JSON. For tags, select from below list of tags. Only return result for field you are over 95% confident in. If you are not confident, the value should be "NOT_CONFIDENT" for each field.
    
    type Tag = "outdoors" | "sports" | "icebreaker" | "social" | "adrenaline" | "creative" | "problem solving" | "collaboration" | "trust building" | "teamwork" | "competitive" | "physical" | "mental" | "technology" | "foodie" | "arts" | "crafts" | "cooking" | "drinks" | "party" | "culinary" | "nature" | "adventure" | "exploration" | "puzzle" | "challenge" | "brain teaser" | "intellectual" | "water activities" | "thriller" | "mystery" | "brainstorming" | "educational" | "communication" | "strategic" | "creativity" | "fitness" | "wellness" | "relaxation" | "inspiring" | "energizing" | "challenging" | "learning" | "networking" | "indoor games" | "music" | "group class";
    
    {
        name: "MoltenWorks Glass Studio",
        shortDesc: "Glass Fusing Studio", // short 3-8 word description of the activity and business
        description:
          "MoltenWorks Glass Studio offers a variety of classes introducing the art of glass fusing. They host team building events, birthday parties and have a growing membership program.", // long form description that summarizes what the business is about.
        tags: ["creative", "teamwork", "arts", "party", "social"], // tags are list of single words that help in search indexing. Should describe the type of business this is and activity. Max 5 tags.
        minDurationHour: 2, //  min duration of the activity
        maxDurationHour: 3, //  max duration of the activity
        minPeople: 1, // min number of people can do activity at one time
        maxPeople: 40, // max number of people can do activity at one time
        minCostPerPerson: 45, // min cost per person to do activity
        maxCostPerPerson: 55, // max cost per person to do activity
        address: "12602 NE 178th St Suite A, Woodinville, WA 98072, USA",
        city: "Seattle",
        phone: "(425) 999-2596",
        hours: [
          {
            openHour: 11,
            openMinute: 0,
            closeHour: 15,
            closeMinute: 30,
            day: "MONDAY",
          },
          {
            openHour: 11,
            openMinute: 0,
            closeHour: 18,
            closeMinute: 30,
            day: "THURSDAY",
          },
          {
            openHour: 11,
            openMinute: 0,
            closeHour: 18,
            closeMinute: 30,
            day: "FRIDAY",
          },
          {
            openHour: 11,
            openMinute: 0,
            closeHour: 18,
            closeMinute: 30,
            day: "SATURDAY",
          },
          {
            openHour: 11,
            openMinute: 0,
            closeHour: 18,
            closeMinute: 30,
            day: "SUNDAY",
          },
        ],
        faq: [
            {
                "question": "Are you a bar where we can just come & have drinks?",
                "answer": "Yes! Get your axe in here and have a drink, some food and chill on our patio or in our lodge-like bar lounge. We have fun games, like Jenga, Connect 4 and throwback board games to help you chill-axe (see what we did there?)."
            }
        ],
      }

      example of NOT_CONFIDENT

      {
        "name": "NOT_CONFIDENT",
        "shortDesc": "NOT_CONFIDENT",
        "description": "NOT_CONFIDENT",
        "tags": "NOT_CONFIDENT",
        "minDurationHour": "NOT_CONFIDENT",
        "maxDurationHour": "NOT_CONFIDENT",
        "minPeople": "NOT_CONFIDENT",
        "maxPeople": "NOT_CONFIDENT",
        "minCostPerPerson": "NOT_CONFIDENT",
        "maxCostPerPerson": "NOT_CONFIDENT",
        "address": "NOT_CONFIDENT",
        "city": "NOT_CONFIDENT",
        "phone": "NOT_CONFIDENT",
        "hours": "NOT_CONFIDENT",
        "faq": "NOT_CONFIDENT"
      }
      
    `;
}
