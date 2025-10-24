import React from 'react'
import { Link } from 'react-router-dom'
function Hotel({trip}) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-5">Hotel Recomendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotel_options?.map((hotel, index) => (
          <div>
            <Link
              to={
                "https://www.google.com/maps/search/?api=1&query=" +
                hotel.hotel_name +
                hotel.hotel_address
              }
              target="_blank"
            >
              <div className="hover:scale-105 transition-all cursor-pointer">
                <img src="/placeholder.jpeg" className="rounded-xl" />
              </div>
            </Link>
            <div className="my-2 flex flex-col gap-2">
              <h2 className="font-medium">{hotel.hotel_name}</h2>
              <h2 className="text-xs text-gray-500">
                📍 {hotel.hotel_address}
              </h2>
              <h2 className="text-sm">💰 {hotel.hotel_price}</h2>
              <h2 className="text-sm">⭐ {hotel.rating} stars</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotel