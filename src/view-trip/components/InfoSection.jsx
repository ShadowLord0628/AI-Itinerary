import { Button } from "@/components/ui/button";
import { GetPlaceDetails, GetPlacePhotoUrl } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        if (trip) {
            GetPlacePhoto();
        }
    }, [trip]);

    const GetPlacePhoto = async () => {
        const query = trip?.userSelection?.location;

        try {
            const result = await GetPlaceDetails(query);

            // Assuming that SerpAPI returns a photo reference for Google Maps
            const photoReference = result?.local_results?.photos?.[0]?.photo_reference;
            if (photoReference) {
                const photoUrl = GetPlacePhotoUrl(photoReference);
                setPhotoUrl(photoUrl);
            } else {
                console.error("No photo reference found for the location.");
            }
        } catch (error) {
            console.error("Error fetching place details or photo:", error);
        }
    };

    return (
        <div>
            <img
                src={photoUrl ? photoUrl : '../../placeholder.jpg'}
                className="h-[340px] w-full object-cover rounded-xl"
                alt="Place"
            />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">
                        {trip?.userSelection?.location}
                    </h2>
                    <div className="flex gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            📅{trip?.userSelection?.noOfDays} Days
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            💰{trip?.userSelection?.budget} Budget
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            🥂No. Of Travelers: {trip?.userSelection?.travelers}
                        </h2>
                    </div>
                </div>
                <Button>
                    <IoIosSend className="h-5 w-5" />
                </Button>
            </div>
        </div>
    );
}

export default InfoSection;
