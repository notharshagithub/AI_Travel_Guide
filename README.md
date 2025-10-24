# 🌍 AI Travel Guide - Full Stack MVC Architecture

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.1.0-orange.svg)](https://firebase.google.com/)
[![Google AI](https://img.shields.io/badge/Google%20AI-Gemini%202.0-green.svg)](https://ai.google.dev/)
[![Express](https://img.shields.io/badge/Express-4.18.2-black.svg)](https://expressjs.com/)
[![MVC](https://img.shields.io/badge/Architecture-MVC-red.svg)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
[![Render](https://img.shields.io/badge/Backend%20Hosted%20on-Render.com-46E3B7.svg)](https://render.com/)
[![Live API](https://img.shields.io/badge/API-Live%20Production-brightgreen.svg)](https://ai-travel-guide-backend.onrender.com)

## 📋 Table of Contents
- [Project Structure](#project-structure)
- [Architecture Overview](#architecture-overview)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Development Workflow](#development-workflow)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🌐 Live Deployment

### Production Backend API
**🔗 Live Backend:** [https://ai-travel-guide-backend.onrender.com](https://ai-travel-guide-backend.onrender.com)

- **Platform**: Render.com (Cloud hosting)
- **Status**: ✅ Production Ready
- **SSL**: Enabled with automatic HTTPS
- **Auto-scaling**: Handles traffic spikes
- **Monitoring**: Real-time logs and performance metrics

### API Endpoints
```
Base URL: https://ai-travel-guide-backend.onrender.com/api

Health Check: GET /api/health
Trip Management: /api/trips/*
User Management: /api/users/*
AI Services: /api/ai/*
```

### Deployment Features
- ✅ **Zero-downtime deployments** from GitHub
- ✅ **Automatic SSL/HTTPS** security
- ✅ **Environment variable management**
- ✅ **Auto-scaling** for high availability
- ✅ **Real-time monitoring** and logging
- ✅ **Custom domain** support

## 🏗 Project Structure

```
AI_Travel_Guide/
├── backend/                    # Backend API (Node.js + Express)
│   ├── models/                # Data Models (MVC Pattern)
│   │   ├── Trip.js           # Trip data model
│   │   └── User.js           # User data model
│   ├── controllers/           # Business Logic Controllers
│   │   ├── tripController.js # Trip business logic
│   │   └── userController.js  # User business logic
│   ├── routes/               # API Routes
│   │   ├── tripRoutes.js     # Trip endpoints
│   │   ├── userRoutes.js     # User endpoints
│   │   └── aiRoutes.js       # AI service endpoints
│   ├── services/             # External Services
│   │   └── aiService.js      # Google AI integration
│   ├── middleware/           # Custom Middleware
│   │   └── validation.js    # Request validation
│   ├── config/              # Configuration
│   │   ├── firebase.js      # Firebase setup
│   │   └── serviceAccountKey.json.example
│   ├── utils/               # Utility Functions
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── env.example        # Backend environment variables
├── frontend/                 # Frontend SPA (React)
│   ├── src/
│   │   ├── components/      # Reusable UI Components
│   │   │   ├── custom/      # Custom components
│   │   │   └── ui/         # UI component library
│   │   ├── pages/          # Page Components
│   │   │   ├── create-trip/
│   │   │   └── view-trip/
│   │   ├── services/       # API Services
│   │   │   └── api.js      # API client
│   │   ├── hooks/          # Custom React Hooks
│   │   │   ├── useAuth.js  # Authentication hook
│   │   │   └── useTrip.js  # Trip management hook
│   │   ├── utils/          # Utility Functions
│   │   ├── constants/      # Application Constants
│   │   ├── assets/         # Static Assets
│   │   ├── App.jsx         # Main App Component
│   │   └── main.jsx        # Application Entry Point
│   ├── public/             # Static Files
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS config
│   └── env.example         # Frontend environment variables
├── package.json            # Root package.json
└── README.md              # This file
```

## 🏛 Architecture Overview

### MVC Pattern Implementation

#### **Backend (Server-side)**
- **Models**: Data layer with Firebase Firestore integration
- **Views**: JSON API responses (RESTful endpoints)
- **Controllers**: Business logic and request handling

#### **Frontend (Client-side)**
- **Models**: React state management and custom hooks
- **Views**: React components and UI
- **Controllers**: Custom hooks for business logic

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   External      │
│   (React SPA)   │◄──►│   (Express API) │◄──►│   Services      │
│                 │    │                 │    │                 │
│ • React 18      │    │ • Express.js    │    │ • Google AI     │
│ • Tailwind CSS  │    │ • MVC Pattern   │    │ • Places API    │
│ • Vite Build    │    │ • Firebase     │    │ • OAuth 2.0     │
│ • Custom Hooks  │    │ • JWT Auth      │    │ • Firestore     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠 Technology Stack

### Backend Technologies
- **Node.js 18+** - JavaScript runtime
- **Express.js 4.18.2** - Web application framework
- **Firebase Admin SDK 12.0.0** - Backend Firebase integration
- **Google Generative AI 0.21.0** - AI model integration
- **Joi 17.11.0** - Data validation
- **Helmet 7.1.0** - Security middleware
- **CORS 2.8.5** - Cross-origin resource sharing

### Frontend Technologies
- **React 18.3.1** - UI library
- **Vite 6.0.7** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router DOM 7.1.1** - Client-side routing
- **Axios 1.7.9** - HTTP client
- **Firebase 11.1.0** - Client-side Firebase integration

### Database & External Services
- **Firebase Firestore** - NoSQL document database
- **Google Gemini 2.0 Flash** - AI model for trip generation
- **Google Places API** - Location and place data
- **Google OAuth 2.0** - User authentication

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Google Cloud Console account
- Firebase project setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/notharshagithub/AI_Travel_Guide.git
cd AI_Travel_Guide
```

### Step 2: Install All Dependencies
```bash
# Install root dependencies
npm install

# Install all project dependencies (backend + frontend)
npm run install:all
```

### Step 3: Environment Configuration

#### Backend Environment Setup
```bash
cd backend
cp env.example .env
# Edit .env with your actual values
```

#### Frontend Environment Setup
```bash
cd frontend
cp env.example .env
# Edit .env with your actual values
```

### Step 4: Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Authentication with Google provider
4. Download service account key and place in `backend/config/serviceAccountKey.json`

### Step 5: Start Development Servers
```bash
# Start both backend and frontend in development mode
npm run dev

# Or start them separately:
# Backend only
npm run dev:backend

# Frontend only
npm run dev:frontend
```

## ⚙️ Environment Configuration

### Backend Environment Variables
```env
# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173

# Firebase Configuration
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com

# Google AI Configuration
GOOGLE_GEMINI_API_KEY=your_gemini_api_key_here

# Google Places API Configuration
GOOGLE_PLACES_API_KEY=your_places_api_key_here
```

### Frontend Environment Variables
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Firebase Configuration (Client-side)
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id

# Google Places API Configuration
VITE_GOOGLE_PLACE_API_KEY=your_places_api_key_here
VITE_GOOGLE_PLACES_API_KEY=your_places_api_key_here

# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## 🔄 Development Workflow

### Backend Development
```bash
cd backend
npm run dev          # Start with nodemon
npm test            # Run tests
npm start           # Production start
```

### Frontend Development
```bash
cd frontend
npm run dev         # Start Vite dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### Full Stack Development
```bash
# Root directory
npm run dev         # Start both backend and frontend
npm run build       # Build frontend
npm start           # Start production backend
```

## 📚 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://your-domain.com/api
```

### Trip Endpoints
```javascript
// Create a new trip
POST /api/trips
Body: {
  userSelection: {
    location: "Paris, France",
    noOfDays: 3,
    budget: "Moderate",
    travels: "Couple"
  },
  userEmail: "user@example.com"
}

// Get trip by ID
GET /api/trips/:tripId

// Get user trips
GET /api/trips/user/:userEmail

// Update trip
PUT /api/trips/:tripId
Body: { /* update data */ }

// Delete trip
DELETE /api/trips/:tripId
```

### User Endpoints
```javascript
// Create or update user
POST /api/users
Body: {
  email: "user@example.com",
  name: "John Doe",
  picture: "https://...",
  provider: "google"
}

// Get user by email
GET /api/users/:email

// Get user statistics
GET /api/users/:email/stats
```

### AI Endpoints
```javascript
// Generate trip with AI
POST /api/ai/generate-trip
Body: {
  userSelection: {
    location: "Tokyo, Japan",
    noOfDays: 5,
    budget: "Expensive",
    travels: "Family"
  }
}

// AI service health check
GET /api/ai/health
```

## 🗄 Database Schema

### Firestore Collections

#### `AITrips` Collection
```javascript
{
  id: "auto_generated_id",
  userSelection: {
    location: "string",
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
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### `Users` Collection
```javascript
{
  id: "auto_generated_id",
  email: "string",
  name: "string",
  picture: "string",
  provider: "google",
  createdAt: timestamp,
  lastLogin: timestamp,
  tripCount: number
}
```

## 🚀 Deployment

### Backend Deployment (Render.com)
The backend API is hosted on **Render.com** for production deployment:

**Live Backend API:** `https://ai-travel-guide-backend.onrender.com`

#### Render Deployment Configuration:
- **Platform**: Render.com
- **Runtime**: Node.js 18+
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment**: Production
- **Auto-Deploy**: Enabled from GitHub repository

#### Backend Environment Variables on Render:
```env
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://your-frontend-domain.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
GOOGLE_PLACES_API_KEY=your_places_api_key
```

#### Render Deployment Features:
- ✅ **Automatic SSL/HTTPS** - Secure API endpoints
- ✅ **Auto-scaling** - Handles traffic spikes
- ✅ **Zero-downtime deployments** - Continuous integration
- ✅ **Environment management** - Secure variable storage
- ✅ **Monitoring & Logs** - Real-time application monitoring
- ✅ **Custom domains** - Professional API endpoints

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy the 'dist' folder to your hosting service
```

#### Recommended Frontend Hosting:
- **Vercel** - Optimized for React applications
- **Netlify** - Static site hosting with CI/CD
- **Firebase Hosting** - Integrated with Firebase services
- **GitHub Pages** - Free hosting for open source projects

### Production API Endpoints
```
Base URL: https://ai-travel-guide-backend.onrender.com/api

Health Check: GET /api/health
Trip Endpoints: /api/trips/*
User Endpoints: /api/users/*
AI Endpoints: /api/ai/*
```

### Environment Variables for Production
- Set all environment variables in your hosting platform
- Ensure Firebase service account key is properly configured
- Update CORS settings for production domain
- Configure production database connections
- Set up monitoring and logging services

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow MVC architecture patterns
- Write comprehensive tests
- Update documentation
- Follow coding standards
- Use meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using React, Node.js, Firebase, and Google AI**

*Full-stack MVC architecture for intelligent travel planning.*