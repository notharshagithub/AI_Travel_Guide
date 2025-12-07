import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        hotel&&GetPlacePhoto();
    }, [hotel])

    const GetPlacePhoto = async () => {
      try {
        const queryText = hotel?.name || hotel?.hotel_name;
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
        console.error(e);
      }
    };

    const name = hotel?.name || hotel?.hotel_name || 'Hotel';
    const address = hotel?.address || hotel?.hotel_address || '';
    const price = hotel?.price || hotel?.price_per_night_vnd || hotel?.price_per_night_usd_approx || '';

    return (
      <Link to={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${name}, ${address}`)} target='_blank'>
        <div className='hover:scale-110 transition-all cursor-pointer mt-5 mb-8'>
          <img src={photoUrl ? photoUrl : '/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover' />
          <div className='my-2'>
            <h2 className='font-medium'>{name}</h2>
            <h2 className='text-xs text-gray-500'>📍{address}</h2>
            <h2 className='text-sm'>💰{price}</h2>
            <h2 className='text-sm'>⭐{hotel?.rating || '—'}</h2>
          </div>
        </div>
      </Link>
    )
}

export default HotelCardItem