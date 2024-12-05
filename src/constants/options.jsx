export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '🚵',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '5 to 8 people'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill seekers',
        icon: '🛳️',
        people: '5 to 10 people'
    },
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '🪙',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Keep cost on the average',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: "Don't worry about cost",
        icon: '💸',
    },
]

export const AI_PROMPT = `Generate a detailed travel plan in JSON format for the location {location} for {noOfDays} days for {travelers travelers within a budget of {budget}. The output should be structured as follows:  

1. Hotels:  
   Provide a list of hotel options, with each hotel including:  
   - hotelName: Name of the hotel.  
   - hotelAddress: Address of the hotel.  
   - price: Price per night or total cost.  
   - hotelImageUrl: Image URL of the hotel.  
   - geoCoordinates: Geographic coordinates of the hotel.  
   - rating: Rating of the hotel.  
   - description: Brief description of the hotel.  

2. Itinerary:  
   Generate an array of objects where each key represents a specific day (e.g., day1, day2), and its value is the plan for that day. Each day's plan should include:  
   - places: A list of places to visit on that day, with each place including:  
     - placeName: Name of the place.  
     - placeDetails: Description of the place.  
     - placeImageUrl: Image URL of the place.  
     - geoCoordinates: Geographic coordinates of the place.  
     - ticketPricing: Ticket cost or entry fee.  
     - rating: Rating of the place.  
     - timeTravel: Estimated travel time between locations.  
     - bestTime: The best time to visit the place.  
`