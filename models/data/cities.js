import 'dotenv/config.js';
import "../../config/database.js";
import City from '../City.js';

let cities = [
    {
        name: "Madrid",
        image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
        country: "Spain",
        continent: "Europe",
        description: "Madrid, Spain's vibrant capital, blends historic architecture like the Royal Palace with modern art at the Reina Sofía Museum. Famous for its lively plazas (Puerta del Sol), tapas culture, and the sprawling Retiro Park.",
        currency: "EUR"
    },
    {
        name: "Buenos Aires",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efdd4",
        country: "Argentina",
        continent: "South America",
        description: "Buenos Aires, the 'Paris of South America,' dazzles with its European-style boulevards, tango dance halls in La Boca, and the iconic Obelisco. Don’t miss the Recoleta Cemetery and steak dinners in Palermo.",
        currency: "ARS"
    },
    {
        name: "Tokyo",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        country: "Japan",
        continent: "Asia",
        description: "Tokyo is a futuristic metropolis where neon-lit skyscrapers in Shibuya contrast with serene temples like Sensō-ji. Highlights include sushi at Tsukiji Market, cherry blossoms in Ueno Park, and the scramble crossing at Shibuya.",
        currency: "JPY"
    },
    {
        name: "New York City",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        country: "USA",
        continent: "North America",
        description: "New York City, the 'Big Apple,' is home to Times Square, Central Park, and the Statue of Liberty. A cultural melting pot with Broadway shows, world-class museums (MoMA, MET), and diverse neighborhoods like Chinatown and Harlem.",
        currency: "USD"
    },
    {
        name: "Rome",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198",
        country: "Italy",
        continent: "Europe",
        description: "Rome, the 'Eternal City,' boasts ancient wonders like the Colosseum and Roman Forum, alongside Vatican City’s St. Peter’s Basilica. Enjoy espresso at Piazza Navona and toss a coin into the Trevi Fountain.",
        currency: "EUR"
    },
    {
        name: "Sydney",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
        country: "Australia",
        continent: "Oceania",
        description: "Sydney dazzles with its harborfront Opera House, Bondi Beach’s surf culture, and the Harbour Bridge climb. Explore the Royal Botanic Garden or take a ferry to Manly for coastal hikes.",
        currency: "AUD"
    },
    {
        name: "Cape Town",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        country: "South Africa",
        continent: "Africa",
        description: "Cape Town, nestled beneath Table Mountain, offers stunning beaches (Clifton), penguins at Boulders Beach, and the historic Robben Island. Drive the scenic Chapman’s Peak or explore the V&A Waterfront.",
        currency: "ZAR"
    },
    {
        name: "Rio de Janeiro",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
        country: "Brazil",
        continent: "South America",
        description: "Rio de Janeiro is famed for Christ the Redeemer atop Corcovado Mountain, Copacabana Beach, and Carnival’s samba parades. Hike through Tijuca Forest or ride the cable car to Sugarloaf Mountain for panoramic views.",
        currency: "BRL"
    },
    {
        name: "Beijing",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b",
        country: "China",
        continent: "Asia",
        description: "Beijing, China’s capital, blends ancient history (the Forbidden City, Temple of Heaven) with modern marvels like the Bird’s Nest Stadium. Walk the Great Wall at Mutianyu or explore hutongs (alleyways) by rickshaw.",
        currency: "CNY"
    },
    {
        name: "Paris",
        image: "https://images.unsplash.com/photo-1431274172761-fca41d930114",
        country: "France",
        continent: "Europe",
        description: "Paris, the 'City of Light,' charms with the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll Montmartre’s artistic streets, cruise the Seine, or savor croissants at a sidewalk café.",
        currency: "EUR"
    },
    {
        name: "Mexico City",
        image: "https://images.unsplash.com/photo-1518633629420-e4b51a731fd5",
        country: "Mexico",
        continent: "North America",
        description: "Mexico City, a cultural powerhouse, features the Zócalo square, Frida Kahlo Museum, and ancient Teotihuacán pyramids. Dive into street food (tacos al pastor) and the floating gardens of Xochimilco.",
        currency: "MXN"
    },
    {
        name: "Cairo",
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
        country: "Egypt",
        continent: "Africa",
        description: "Cairo, home to the Pyramids of Giza and Sphinx, is a gateway to ancient wonders. Explore the Egyptian Museum’s mummies or cruise the Nile River at sunset.",
        currency: "EGP"
    },
    {
        name: "Toronto",
        image: "https://images.unsplash.com/photo-1534231140121-3ca808a6d0a9",
        country: "Canada",
        continent: "North America",
        description: "Toronto, Canada’s multicultural hub, boasts the CN Tower, Kensington Market’s eclectic vibe, and Niagara Falls nearby. Catch a baseball game at the Rogers Centre or explore Distillery District’s art galleries.",
        currency: "CAD"
    },
    {
        name: "Bangkok",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed",
        country: "Thailand",
        continent: "Asia",
        description: "Bangkok thrills with golden temples (Wat Arun), floating markets, and bustling Khao San Road. Indulge in street food (pad thai) or take a boat ride along the Chao Phraya River.",
        currency: "THB"
    },
    {
        name: "Berlin",
        image: "https://images.unsplash.com/photo-1587330979470-3595ac045953",
        country: "Germany",
        continent: "Europe",
        description: "Berlin, a city of reinvention, mixes Cold War history (Berlin Wall) with avant-garde art and nightlife. Visit Brandenburg Gate, Museum Island, and currywurst stands.",
        currency: "EUR"
    }
];

City.insertMany(cities)