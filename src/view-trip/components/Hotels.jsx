import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({ trip }) {
  // Support both original schema and the AI response you posted
  const rawHotels = trip?.tripData?.hotel_options || trip?.tripData?.travel_plan?.hotels_options || [];

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl-grid-cols-4 gap-5'>
        {Array.isArray(rawHotels) && rawHotels.map((hotel, index) => {
          const normalized = {
            name: hotel.name || hotel.hotel_name,
            address: hotel.address || hotel.hotel_address,
            price: hotel.price || hotel.price_per_night_vnd || hotel.price_per_night_usd_approx,
            rating: hotel.rating,
          };
          return <HotelCardItem key={index} hotel={normalized} />;
        })}
      </div>
    </div>
  );
}

export default Hotels