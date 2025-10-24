import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate Travel Plan for Location :las Vegas, for 3 Days for couple with cheap budget , give me a hotel options list with hotel name, hotel adress ,hotel price ,hotel image url , geo coordinates , rating ,description and suggest itineary with placename ,place details ,place image url , geo coordinates , ticket pricing , time travel each of location for 3 days with each day plan with best time to visit in json formate dont forget to give hotel list and all the details should be in json formate dont forget hotel price"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n{\n  \"location\": \"Las Vegas, Nevada\",\n  \"duration\": \"3 Days\",\n  \"budget\": \"Cheap\",\n  \"travelers\": \"Couple\",\n  \"hotel_options\": [\n    {\n      \"hotel_name\": \"Circus Circus Hotel & Casino\",\n      \"hotel_address\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/72/6d/2a/exterior.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1378,\n        \"longitude\": -115.1696\n      },\n      \"rating\": 3.5,\n       \"description\": \"A classic Vegas hotel with affordable rates, a circus theme, and a variety of entertainment options including the Adventuredome theme park.\"\n\n    },\n    {\n      \"hotel_name\": \"Excalibur Hotel & Casino\",\n       \"hotel_address\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/19/d3/76/6e/excalibur-hotel-casino.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.0987,\n        \"longitude\": -115.1742\n      },\n      \"rating\": 4.0,\n      \"description\": \"A medieval-themed hotel offering budget-friendly rooms, pools, and a variety of dining choices. Good location at the south end of the Strip.\"\n    },\n   {\n      \"hotel_name\": \"OYO Hotel and Casino Las Vegas\",\n       \"hotel_address\": \"115 E Tropicana Ave, Las Vegas, NV 89109\",\n      \"hotel_image_url\": \"https://media-cdn.tripadvisor.com/media/photo-s/15/2f/20/71/oyo-hotel-and-casino-las.jpg\",\n       \"geo_coordinates\": {\n        \"latitude\": 36.1014,\n        \"longitude\": -115.1671\n      },\n       \"rating\": 3.0,\n      \"description\": \"Budget-friendly option with basic amenities, located near the Las Vegas Strip. Offers decent value for those on a tight budget.\"\n   }\n\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Exploring the Strip (South)\",\n      \"best_time_to_visit\": \"Morning and Evening\",\n      \"activities\": [\n        {\n          \"place_name\": \"Welcome to Fabulous Las Vegas Sign\",\n          \"place_details\": \"Iconic photo opportunity, must-visit for first-timers.\",\n          \"place_image_url\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Welcome_to_Fabulous_Las_Vegas_sign.JPG/1280px-Welcome_to_Fabulous_Las_Vegas_sign.JPG\",\n           \"geo_coordinates\": {\n            \"latitude\": 36.0827,\n            \"longitude\": -115.1726\n          },\n          \"ticket_pricing\": \"Free\",\n          \"time_travel\": \"Walking distance from southern end of the strip.\"\n        }\n      ]\n    }\n  }\n}\n```"},
      ],
    },
  ],
});

export const generateTripWithAI = async (userSelection) => {
  try {
    const { location, noOfDays, budget, travels } = userSelection;
    
    const prompt = `Generate Travel Plan for Location: ${location} for ${noOfDays} Days for ${travels} with a ${budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary array with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${noOfDays} days with each day plan with best time to visit and the itinerary should be in array format and the entire in JSON format.`;
    
    const result = await chatSession.sendMessage(prompt);
    const responseText = result.response.text();
    
    // Parse JSON response
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[1]);
    } else {
      // Try to parse the entire response as JSON
      return JSON.parse(responseText);
    }
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error(`Failed to generate trip with AI: ${error.message}`);
  }
};

export const validateUserSelection = (userSelection) => {
  const requiredFields = ['location', 'noOfDays', 'budget', 'travels'];
  const missingFields = requiredFields.filter(field => !userSelection[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
  
  if (userSelection.noOfDays < 1 || userSelection.noOfDays > 30) {
    throw new Error('Trip duration must be between 1 and 30 days');
  }
  
  return true;
};
