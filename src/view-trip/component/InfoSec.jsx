import { Button } from '@/components/ui/button';

import { BsSendFill } from "react-icons/bs";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import {IoIosSend} from 'react-icons/io'


// const PHOTO_REF_URL =
//   "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
//   import.meta.env.VITE_GOOGLE_PLACE_API_KEY;n

function InfoSec({trip}) {
  // const [photoUrl, setPhotoUrl] = useState();
  // useEffect(() => {
  //   trip && GetPlaceImg();
  // }, [trip]);

  // const GetPlaceImg = async () => {
  //   const data = {
  //     textQuery: trip?.userSelection?.location?.label,
  //   };
  //   const result = await GetPlaceDetails(data).then((resp) => {
  //     // console.log(resp.data.places[0].photos[3].name)
  //     const PhotoUrl = PHOTO_REF_URL.replace(
  //       "{NAME}",
  //       resp.data.places[0].photos[3].name
  //     );
  //     setPhotoUrl(PhotoUrl);
  //   });
  // };

  return (
    <div className="flex-wrap">
      <div>
        <img src = '/placeholder.jpeg'
          // src={photoUrl ? photoUrl : "/placeholder.jpeg"}
          className="h-[350px] w-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex justify-between items-center flex-wrap">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              📅 {trip.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              💰 {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-sm">
              🥂 No of Travelers : {trip.userSelection?.travels} people
            </h2>
          </div>
        </div>

        <Button>
          <BsSendFill />
        </Button>
      </div>
    </div>
  );
}

export default InfoSec;
