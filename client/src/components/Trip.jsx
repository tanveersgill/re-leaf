export default function Trip ({trip}) {
    const emissionReductionPercentage =
        trip.flight.emissionReduction.split("%")?.[0] / 100;
    
    const emissions = trip.flight.emissions.split(" ")[0];
    
    const emissionsSaved = emissionReductionPercentage * emissions * -1;
    
    const name =
        trip.accommodation.address.split(",")[
          trip.accommodation.address.split(",").length - 1
        ];
    
    
    const photoRef = trip?.accommodation?.photoReference;
    console.log(photoRef)
    const imageURI = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=360&photo_reference=${photoRef}&key=${import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}`
        
    return (
        <div className='w-[100%] max-w-[360px] text-ellipsis h-auto rounded-lg shadow-md inline-block border-gray'>
                <img className='object-cover rounded-lg h-[50%]'
                    src={imageURI}
                ></img>
                <div className='w-[100%] max-w-[360px] px-4 flex justify-between'>
                    <div className='flex-1'>
                        <h4 className='text-lg font-semibold'>Origin</h4>
                        <h5 className='text-sm font-normal break-all'>{trip.origin || 'Toronto, ON'}</h5>
                    </div>
                    <div className='flex-1'>
                        <h4 className='text-lg font-semibold'>Destination</h4>
                        <h5 className='text-sm font-normal break-all'>{trip.destination || 'null'}</h5>
                    </div>
                </div>
                <div className='px-4'>
                    <h4 className='text-lg font-semibold'>Price</h4>
                    <h5 className='text-sm font-normal break-all'>{trip.flight.cost || 'null'}</h5>
                </div>
                <div className='px-4'>
                    <h4 className='text-lg font-semibold'>Emmisions Saved</h4>
                    <h5 className='text-sm font-normal break-all'>{emissionsSaved || 'null'}</h5>
                </div>
        </div>
    )
}