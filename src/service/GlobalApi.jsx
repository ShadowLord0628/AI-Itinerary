import axios from "axios";

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json';


export const GetPlaceDetails = async (query) => {
    const config = {
        params: {
            engine: 'google_maps',
            q: query, // Correct parameter name
            type: 'search',
            api_key: import.meta.env.VITE_SERP_API_KEY
        }
    };
    try {
        const response = await axios.get(BASE_URL, config);
        return response.data;
    } catch (error) {
        console.error("Error fetching place details from SerpAPI:", error);
        throw error;
    }
};

export const GetPlacePhotoUrl = (photo_reference) => {
    return `https://serpapi.com/search.json?engine=google_maps_photos&photo_reference=${photo_reference}&api_key=${SERP_API_KEY}`;
}