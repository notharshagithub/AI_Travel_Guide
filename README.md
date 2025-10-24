# 🌍 AI Travel Guide - Intelligent Trip Planning Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.1.0-orange.svg)](https://firebase.google.com/)
[![Google AI](https://img.shields.io/badge/Google%20AI-Gemini%202.0-green.svg)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF.svg)](https://vitejs.dev/)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Database Design](#database-design)
- [API Integration](#api-integration)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Usage Guide](#usage-guide)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [AI Integration](#ai-integration)
- [Firebase Services](#firebase-services)
- [Authentication Flow](#authentication-flow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

**AI Travel Guide** is a comprehensive, intelligent trip planning platform that leverages cutting-edge artificial intelligence to create personalized travel itineraries. The application combines Google's Gemini AI model with Firebase backend services to deliver a seamless, user-centric travel planning experience.

### Key Highlights
- 🤖 **AI-Powered Planning**: Utilizes Google Gemini 2.0 Flash for intelligent itinerary generation
- 🔥 **Firebase Integration**: Complete backend infrastructure with Firestore database
- 🎨 **Modern UI/UX**: Built with React 18 and Tailwind CSS for responsive design
- 🔐 **Secure Authentication**: Google OAuth integration for user management
- 📱 **Cross-Platform**: Responsive design supporting desktop, tablet, and mobile devices
- 🌐 **Real-time Data**: Integration with Google Places API for accurate location data

## ✨ Features

### Core Functionality
- **Intelligent Trip Planning**: AI-generated personalized itineraries based on user preferences
- **Multi-Criteria Selection**: Budget, duration, travel companions, and destination preferences
- **Interactive UI**: Modern, responsive interface with smooth animations
- **Real-time Validation**: Form validation and error handling
- **User Authentication**: Secure Google OAuth integration
- **Data Persistence**: Firebase Firestore for reliable data storage

### Advanced Features
- **Dynamic Itinerary Generation**: AI creates detailed day-by-day plans
- **Hotel Recommendations**: Curated accommodation options with pricing
- **Place Details**: Comprehensive information about attractions and activities
- **Geographic Integration**: GPS coordinates and location-based services
- **Budget Optimization**: Cost-effective recommendations based on user budget
- **Social Sharing**: Trip sharing capabilities with unique URLs

## 🛠 Technology Stack

### Frontend Technologies
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **Vite 6.0.7** - Fast build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router DOM 7.1.1** - Client-side routing
- **Axios 1.7.9** - HTTP client for API requests

### Backend & Database
- **Firebase 11.1.0** - Complete backend-as-a-service platform
- **Firestore** - NoSQL document database
- **Firebase Analytics** - User behavior tracking and analytics
- **Firebase Authentication** - User management and security

### AI & External Services
- **Google Generative AI 0.21.0** - Gemini 2.0 Flash model integration
- **Google Places API** - Location data and place information
- **Google OAuth 2.0** - Secure user authentication

### UI Components & Libraries
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notification system
- **Class Variance Authority** - Component variant management
- **React Google Places Autocomplete** - Location input with autocomplete

## 🏗 Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   (React SPA)   │◄──►│   (Firebase)    │◄──►│   Services      │
│                 │    │                 │    │                 │
│ • React 18      │    │ • Firestore     │    │ • Google AI     │
│ • Tailwind CSS  │    │ • Authentication│    │ • Places API    │
│ • Vite Build    │    │ • Analytics     │    │ • OAuth 2.0     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Component Architecture
- **Modular Design**: Reusable components with clear separation of concerns
- **Custom Hooks**: Logic abstraction for better code organization
- **Context Management**: Global state management for user data
- **Route-based Code Splitting**: Optimized bundle loading

## 🗄 Database Design

### Firestore Collections

#### `AITrips` Collection
```javascript
{
  id: "timestamp_string",
  userSelection: {
    location: "Destination name",
    noOfDays: number,
    budget: "Cheap|Moderate|Expensive",
    travels: "Solo|Couple|Family|Friends"
  },
  tripData: {
    location: "string",
    duration: "string",
    budget: "string",
    travelers: "string",
    hotel_options: [
      {
        hotel_name: "string",
        hotel_address: "string",
        hotel_image_url: "string",
        geo_coordinates: {
          latitude: number,
          longitude: number
        },
        rating: number,
        description: "string"
      }
    ],
    itinerary: {
      day1: {
        theme: "string",
        best_time_to_visit: "string",
        activities: [
          {
            place_name: "string",
            place_details: "string",
            place_image_url: "string",
            geo_coordinates: {
              latitude: number,
              longitude: number
            },
            ticket_pricing: "string",
            time_travel: "string"
          }
        ]
      }
    }
  },
  userEmail: "string",
  createdAt: timestamp
}
```

## 🔌 API Integration

### Google Generative AI Integration
- **Model**: Gemini 2.0 Flash Experimental
- **Configuration**: Optimized for travel planning with JSON response format
- **Temperature**: 1.0 for creative yet consistent responses
- **Max Tokens**: 8192 for comprehensive itinerary generation

### Google Places API
- **Places Search**: Location-based place discovery
- **Photo References**: High-quality place images
- **Geographic Data**: Precise coordinates and addresses

### Firebase Services
- **Firestore**: Real-time database for trip storage
- **Authentication**: Google OAuth integration
- **Analytics**: User behavior tracking

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Google Cloud Console account
- Firebase project setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/notharshagithub/AI_Travel_Guide.git
cd AI_Travel_Guide
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Environment Configuration
Create a `.env` file in the root directory:
```env
VITE_GOOGLE_GEMINI_API_KEY=your_gemini_api_key
VITE_GOOGLE_PLACE_API_KEY=your_places_api_key
VITE_GOOGLE_PLACES_API_KEY=your_places_api_key
```

### Step 4: Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Authentication with Google provider
4. Copy your Firebase configuration to `src/service/firebaseConfig.jsx`

### Step 5: Development Server
```bash
npm run dev
# or
yarn dev
```

## ⚙️ Environment Configuration

### Required Environment Variables
```env
# Google AI Services
VITE_GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Google Places API
VITE_GOOGLE_PLACE_API_KEY=your_places_api_key_here
VITE_GOOGLE_PLACES_API_KEY=your_places_api_key_here

# Firebase Configuration (if using environment variables)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### API Key Setup
1. **Google AI Studio**: Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/)
2. **Google Cloud Console**: Enable Places API and get your API key
3. **Firebase Console**: Configure your Firebase project settings

## 📖 Usage Guide

### Creating a Trip
1. **Destination Selection**: Use the Google Places autocomplete to select your destination
2. **Trip Duration**: Specify the number of days for your trip
3. **Budget Selection**: Choose from Cheap, Moderate, or Expensive options
4. **Travel Companions**: Select who you're traveling with (Solo, Couple, Family, Friends)
5. **Authentication**: Sign in with Google to save your trip
6. **AI Generation**: The system generates a personalized itinerary

### Viewing Your Trip
- **Trip Overview**: Complete trip details with recommendations
- **Hotel Options**: Curated accommodation suggestions
- **Daily Itinerary**: Day-by-day activity plans
- **Interactive Maps**: Geographic information for all locations

## 📁 Project Structure

```
AI_Travel_Guide/
├── public/                     # Static assets
│   ├── logo.svg
│   ├── placeholder.jpeg
│   └── road-trip-vacation.jpg
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── custom/           # Custom components
│   │   │   ├── GradientText.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Hero.jsx
│   │   └── ui/               # UI component library
│   │       ├── button.jsx
│   │       ├── dialog.jsx
│   │       ├── input.jsx
│   │       └── sonner.jsx
│   ├── constant/             # Application constants
│   │   └── options.jsx       # Selection options and AI prompts
│   ├── create-trip/          # Trip creation module
│   │   └── index.jsx
│   ├── view-trip/            # Trip viewing module
│   │   ├── [tripid]/         # Dynamic route for trip viewing
│   │   │   └── index.jsx
│   │   └── component/        # Trip view components
│   │       ├── Footer.jsx
│   │       ├── Hotel.jsx
│   │       ├── InfoSec.jsx
│   │       ├── PlaceCarditem.jsx
│   │       └── PlacesToVisit.jsx
│   ├── service/              # External service integrations
│   │   ├── AIModel.jsx       # Google AI integration
│   │   ├── firebaseConfig.jsx # Firebase configuration
│   │   └── GlobalApi.jsx     # API utilities
│   ├── lib/                  # Utility functions
│   │   └── utils.js
│   ├── assets/               # Application assets
│   ├── App.jsx               # Main application component
│   ├── App.css               # Global styles
│   ├── index.css             # Base styles
│   └── main.jsx              # Application entry point
├── components.json            # Component configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite build configuration
└── README.md                 # Project documentation
```

## 🧩 Key Components

### Core Components
- **Hero**: Landing page hero section with call-to-action
- **CreateTrip**: Main trip creation interface with form handling
- **ViewTrip**: Trip display with detailed itinerary
- **Hotel**: Hotel recommendations display
- **PlacesToVisit**: Daily itinerary visualization

### UI Components
- **Button**: Customizable button component with variants
- **Dialog**: Modal dialog for authentication
- **Input**: Form input with validation
- **Sonner**: Toast notification system

### Service Components
- **AIModel**: Google Gemini AI integration
- **FirebaseConfig**: Firebase service configuration
- **GlobalApi**: External API utilities

## 🤖 AI Integration

### Google Gemini 2.0 Flash
The application leverages Google's latest Gemini 2.0 Flash model for intelligent trip planning:

```javascript
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
```

### AI Prompt Engineering
The system uses sophisticated prompt engineering to generate structured travel plans:

```javascript
export const AI_PROMPT = 
"Generate Travel Plan for Location : {location} for {totalDays} Days for {traveles} with a {budget} budget, Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary array with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for {totalDays} days with each day plan with best time to visit and the iliterary should be in array formate and the entire in JSON format.";
```

### Response Processing
- **JSON Parsing**: Structured response handling
- **Data Validation**: Input sanitization and error handling
- **Fallback Mechanisms**: Graceful degradation for API failures

## 🔥 Firebase Services

### Firestore Database
- **Real-time Updates**: Live data synchronization
- **Scalable Storage**: NoSQL document-based architecture
- **Query Optimization**: Efficient data retrieval
- **Security Rules**: Role-based access control

### Authentication
- **Google OAuth**: Seamless user authentication
- **Session Management**: Persistent user sessions
- **Security**: Industry-standard security practices

### Analytics
- **User Behavior**: Track user interactions
- **Performance Metrics**: Application performance monitoring
- **Custom Events**: Trip creation and viewing analytics

## 🔐 Authentication Flow

### Google OAuth Integration
1. **User Initiation**: User clicks "Sign In with Google"
2. **OAuth Flow**: Redirect to Google authentication
3. **Token Exchange**: Exchange authorization code for access token
4. **Profile Retrieval**: Fetch user profile information
5. **Local Storage**: Store user data securely
6. **Session Management**: Maintain authenticated state

### Security Features
- **Token Validation**: Secure token handling
- **CORS Configuration**: Cross-origin request security
- **Input Sanitization**: XSS prevention
- **HTTPS Enforcement**: Secure data transmission

## 🚀 Deployment

### Build Process
```bash
# Production build
npm run build

# Preview build
npm run preview
```

### Deployment Options
- **Vercel**: Recommended for React applications
- **Netlify**: Static site hosting
- **Firebase Hosting**: Integrated with Firebase services
- **AWS S3**: Scalable cloud hosting

### Environment Variables
Ensure all environment variables are configured in your deployment platform:
- Google AI API keys
- Firebase configuration
- Google Places API keys

## 🤝 Contributing

We welcome contributions to improve the AI Travel Guide platform:

1. **Fork the Repository**: Create your own fork
2. **Create Feature Branch**: `git checkout -b feature/amazing-feature`
3. **Commit Changes**: `git commit -m 'Add amazing feature'`
4. **Push to Branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**: Submit your changes for review

### Development Guidelines
- Follow React best practices
- Use TypeScript for type safety
- Write comprehensive tests
- Update documentation
- Follow coding standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google AI**: For providing the Gemini AI model
- **Firebase**: For backend infrastructure
- **React Community**: For the amazing ecosystem
- **Tailwind CSS**: For the utility-first CSS framework
- **Open Source Contributors**: For the various libraries used

## 📞 Support

For support and questions:
- **GitHub Issues**: [Create an issue](https://github.com/notharshagithub/AI_Travel_Guide/issues)
- **Email**: [Your email here]
- **Documentation**: [Project Wiki](https://github.com/notharshagithub/AI_Travel_Guide/wiki)

---

**Built with ❤️ using React, Firebase, and Google AI**

*Transform your travel planning experience with the power of artificial intelligence.*