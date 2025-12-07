import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function PlaceCardItem({place}) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
      place && GetPlacePhoto();
  }, [place])

  const GetPlacePhoto = async () => {
    try {
      const queryText = place?.place || place?.place_name;
      if (!queryText) return;
      const data = { textQuery: queryText };
      await GetPlaceDetails(data).then((resp) => {
        const photos = resp?.data?.places?.[0]?.photos || [];
        const name = photos?.[3]?.name || photos?.[0]?.name;
        if (name) {
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', name);
          setPhotoUrl(PhotoUrl);
        }
      });
    } catch (e) {
      // Swallow errors and keep placeholder
      console.error(e);
    }
  };

  const title = place?.place || place?.place_name || 'Place';
  const details = place?.details || place?.place_details || '';

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(title)} target='_blank'>
      <div className='shadow-sm border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
        <img src={photoUrl ? photoUrl : '/placeholder.jpg'} alt="" className='w-[130px] h-[130px] rounded-xl object-cover' />
        <div>
          <h2 className='font-bold text-lg'>{title}</h2>
          <p className='text-sm text-gray-500'>{details}</p>
          <h2 className='text-xs font-medium mt-2 mb-2'>🏷️Ticket: {place.ticket_pricing || '—'}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PlaceCardItem