// import React from 'react'

// function PlaceCarditem({place}) {
//   return (
//     <div className='border rounded-xl p-3 mt-5'> 
//         <img src="/placeholder.jpeg" className="w-[150px] h-[110px]  rounded-2xl" />
    
    
//     </div>
//   )
// }

// export default PlaceCarditem







import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCarditem({ place }) {
    // const [photoUrl, setPhotoUrl] = useState();

    // useEffect(() => {
    //     place && GetPlaceImg();
    // }, [place])

    // const GetPlaceImg = async () => {
    //     const data = {
    //         textQuery: place.place_name
    //     }
    //     const result = await GetPlaceDetails(data).then(resp => {
    //         const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
    //         setPhotoUrl(PhotoUrl);

    //     })
    // }
    return (
      <div>
        <Link
          to={
            "https://www.google.com/maps/search/?api=1&query=" +
            place?.place_name +
            "," +
            place?.geo_coordinates
          }
          target="_blank"
        >
          <div className="my-4 bg-gray-50 p-2 gap-2 border rounded-lg flex flex-cols-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer ">
            <div className="py-2 mx-3">
              <img
                src="/placeholder.jpeg"
                // src={photoUrl ? photoUrl : '/public/road-trip-vacation.jpg'}

                className="w-[140px] h-[140px] rounded-xl object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold pt-3">{place.place_name}</h2>
              <h2 className="font-medium text-sm text-orange-600 pt-5">
                {place.time_travel}
              </h2>

              <p className="text-sm text-gray-500">{place.place_details}</p>
              <h2 className="text-blue-700 text-sm">{place.ticket_pricing}</h2>
              <h2 className="text-sm text-yellow-500 pt-3">⭐{place.rating}</h2>
            </div>
            <div className="mt-36">
              <Button>
                <FaLocationDot />
              </Button>
            </div>
          </div>
        </Link>
      </div>
    );
}

export default PlaceCarditem