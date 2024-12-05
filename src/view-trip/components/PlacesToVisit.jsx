import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {

    console.log(trip);
    const itinerary = Object.entries(trip.tripData.itinerary).map(([key, value]) => ({
        day: key,
        ...value
    }));

    console.log("itinerary:" + itinerary);
    return (
        <div>
            <h2 className='font-bold text-lg'>Places to Visit</h2>

            <div>
                {itinerary.map((item, dayIndex) => {
                    return (
                        <div className='mt-5' key={item.day || dayIndex}> {/* Use unique key for day */}
                            <h2 className='font-medium text-lg'>Day {item.day}</h2>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {item?.plan.map((place, placeIndex) => {
                                    return (
                                        <div className='' key={place.id || placeIndex}> {/* Use unique key for place */}
                                            <h2 className='font-medium text-sm text-orange-600'>{place.bestTime}</h2>
                                            <PlaceCardItem place={place} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PlacesToVisit;
