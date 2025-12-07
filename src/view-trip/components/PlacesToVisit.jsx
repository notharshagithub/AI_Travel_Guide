import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
  // Support both original schema and the AI response you posted
  const itinerary = trip?.tripData?.itinerary || trip?.tripData?.travel_plan?.itinerary || [];

  return (
    <div>
      <h2 className='font-bold text-xl'>Places to Visit</h2>
      <div>
        {Array.isArray(itinerary) && itinerary.map((item, index) => (
          <div key={index} className='mt-5'>
            <h2 className='font-bold text-lg'>{item.day || `Day ${index + 1}`}</h2>
            <div className='grid md:grid-cols-2 gap-5'>
              {Array.isArray(item.plan) && item.plan.map((place, idx) => {
                // Normalize place object for the card component
                const normalized = {
                  place: place.place || place.place_name,
                  details: place.details || place.place_details,
                  ticket_pricing: place.ticket_pricing,
                  time: place.time || place.duration_at_location,
                };
                return (
                  <div key={idx} className='my-2'>
                    <h2 className='font-medium text-sm text-orange-600'>{normalized.time || ''}</h2>
                    <PlaceCardItem place={normalized} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit