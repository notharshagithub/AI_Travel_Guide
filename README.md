# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







# AI Trip Planner Web Application

## Overview
The AI Trip Planner is a dynamic web application built with React and React Router, designed to simplify travel planning. Users can answer a series of questions to generate a tailored day-by-day itinerary and hotel recommendations based on their preferences.

## Key Features
- **Interactive Questionnaire**: Collects user inputs such as location, number of days, budget, and travel type.
- **Personalized Itineraries**: Powered by the Google Gemini API to create detailed trip plans.
- **Hotel Recommendations**: Displays a list of hotels matching the user's budget.
- **Google Maps Integration**: Utilizes Google Maps APIs for location input, auto-suggestions, and interactive maps for attractions and hotels.

## How It Works
1. **Landing Page**: Users begin by clicking the \"Get Started\" button.
2. **Questionnaire**: Users provide travel details like:
   - Location (via Maps Auto-Suggest API).
   - Number of days.
   - Budget category: Cheap, Moderate, Expensive.
   - Travel group type: Solo, Couple, Friends, or Family.
3. **Trip Generation**: Using the Google Gemini API, the application generates a day-wise travel plan with hotel options and places to visit.
4. **Interactive Map Links**: Clicking on a hotel or attraction photo redirects users to its Google Maps location.

## APIs Used
### Google Maps API
- **Auto-Suggest API**: Provides real-time location suggestions.
- **Location API**: Displays hotel and attraction locations on maps.
### Google Gemini API
- Generates personalized trip plans and itineraries based on user inputs.

## Project Structure
- **Frontend**: Built with React, styled using Tailwind, and optimized with Vite.
- **APIs**: Integrated directly into the frontend for dynamic responses.
- **Routing**: Handled with React Router for seamless navigation across pages.
- **packages for styling** shadcn

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/ai-trip-planner.git
   cd ai-trip-planner
   

- **Install dependencies**:
  
  ```bash
  npm install
- **Run using**:
  ```bash
   npm run dev
