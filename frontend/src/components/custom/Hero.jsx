import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import GradientText from "./GradientText.jsx";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-60 gap-9">
      <h1 className="font-extrabold text-7xl mt-16">
        <span className="text-blue-600">
          Discover Your Next Adventure with AI:{" "}
        </span>
        Personalized Itineraries at Your Fingers
      </h1>
      <p className="text -xl text -gray-500 text-center">
        Your personal trip planner and travel curator, creating custom
        itineraries tailoured to your preferences and budget
      </p>
      <Link to="/create-trip">
        <Button>Get Started</Button>
      </Link>

      <img className="w-full" src="Untilted.jpeg" />

      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
       Made By Harsha Shetty
      </GradientText>
    </div>
  );
}

export default Hero