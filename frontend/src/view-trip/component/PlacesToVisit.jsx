import React from "react";
import PlaceCarditem from "./PlaceCarditem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-20">Ready To Explore</h2>
      <h2 className="font-bold text-sm text-gray-800 mt-2">Day Wise Plan 🏖️</h2>

      <div>
        {trip?.tripData?.itinerary?.map((item, index) => (
          <div key={index}>
            <h2 className="font-medium text-lg">Day {item.day}</h2>
            {item.activities.map((place, activityIndex) => (
              <div key={activityIndex} className="my-5">
                <PlaceCarditem place={place} />
                
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
