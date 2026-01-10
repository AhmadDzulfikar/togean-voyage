export interface DestinationDetail {
    slug: string;
    name: string;
    tagline: string;
    intro: string;
    whyItMatters: string[];
    experiences: { title: string; text: string }[];
    signatureMoment: string;
    routeFit: {
        idealTiming: string;
        suggestedDuration: string;
        pairsWellWith: string[];
        notes: string[];
    };
    practicalNotes: string[];
    images: {
        hero: string;
        secondary: string;
        mood: string;
    };
}

export const destinationDetails: Record<string, DestinationDetail> = {
    "pulau-puah": {
        slug: "pulau-puah",
        name: "Pulau Puah",
        tagline: "A secluded island of absolute tranquility and pristine nature.",
        intro: "Pulau Puah is a largely undeveloped gem in the southeastern Togeans, boasting untouched white-sand beaches and thriving coral reefs. Far from crowds, it offers a rare chance to enjoy nature’s silence on a pristine tropical shore where tranquility reigns supreme.",
        whyItMatters: [
            "A true off-the-beaten-path escape with empty beaches ideal for private swimming.",
            "Surrounded by healthy coral gardens, making it a dream for snorkelers to spot turtles.",
            "Offers an exclusive private island feel, perfect for picnics without another soul in sight."
        ],
        experiences: [
            {
                title: "Deserted Beach Picnic",
                text: "Enjoy a BBQ picnic of fresh seafood on the powdery sand, with just you, the palms, and the gentle waves."
            },
            {
                title: "Coral Reef Snorkeling",
                text: "Swim right off the beach to encounter vibrant coral formations and diverse marine life in remarkably clear waters."
            },
            {
                title: "Jungle Stroll",
                text: "Take a short walk inland beneath towering coconut palms to glimpse the untouched rainforest ecosystem thriving in silence."
            },
            {
                title: "Sunset on the Boat",
                text: "Linger offshore to watch the sunset paint the sky in breathtaking orange and purple hues over the silhouetted island."
            }
        ],
        signatureMoment: "Enjoying a deserted beach picnic on powdery white sand, realizing you have the entire island to yourself.",
        routeFit: {
            idealTiming: "Midday stopover on an island-hopping route.",
            suggestedDuration: "Half-day (lunch or swim).",
            pairsWellWith: ["Malenge", "Walea Kodi"],
            notes: [
                "Accessible only by private boat or tour; no public ferries.",
                "No shops or facilities—bring all water and supplies.",
                "Visit in calm seas for a safe landing."
            ]
        },
        practicalNotes: [
            "Leave no trace to preserve the pristine condition.",
            "Snorkel with a buddy and avoid stepping on coral.",
            "Visits are weather- and tide-dependent; check with guides."
        ],
        images: {
            hero: "/destinations/pulau-puat/hero.webp",
            secondary: "/destinations/pulau-puat/experience.webp",
            mood: "/destinations/pulau-puat/mood.webp"
        }
    },
    "malenge": {
        slug: "malenge",
        name: "Malenge",
        tagline: "Tropical jungle paradise meets authentic sea gypsy culture.",
        intro: "Malenge is a haven of dense jungles and unspoiled beaches, connected to the fascinating Bajo sea gypsy village by a long wooden bridge. Time slows here, inviting you to snorkel vibrant reefs and experience authentic life in a tranquil setting.",
        whyItMatters: [
            "Home to a traditional sea gypsy community living in stilt houses on Pulau Papan.",
            "Offers stunning beaches like Sera Beach with coral gardens just offshore for easy snorkeling.",
            "Lush forests shelter rare Togean macaques and coconut crabs, ideal for easy nature hikes."
        ],
        experiences: [
            {
                title: "Pulau Papan Bridge Walk",
                text: "Stroll across the iconic 1.8km wooden bridge connecting Malenge to the traditional Bajo village over crystal-clear water."
            },
            {
                title: "Sera Beach Retreat",
                text: "Relax on one of the archipelago’s best beaches, featuring white sand and excellent snorkeling just steps away."
            },
            {
                title: "Jungle & Wildlife Trek",
                text: "Hike through the rainforest to spot endemic Togean macaques and enjoy panoramic island views from the hills."
            },
            {
                title: "Cultural Homestay",
                text: "Stay in a simple guesthouse to experience daily island life and warm local hospitality firsthand."
            }
        ],
        signatureMoment: "Walking the wooden bridge to Pulau Papan, suspended over turquoise water, on your way to meet the Bajo people.",
        routeFit: {
            idealTiming: "Mid-journey escape in the eastern Togeans.",
            suggestedDuration: "2–3 days.",
            pairsWellWith: ["Walea Kodi", "Pulau Puah"],
            notes: [
                "Remote with no ATMs or shops; bring essential supplies.",
                "Electricity is limited to night hours; signal is weak.",
                "Check ferry schedules as boats may run infrequently."
            ]
        },
        practicalNotes: [
            "Dress modestly when visiting villages.",
            "Accommodation is basic; bring snacks if you have dietary needs.",
            "Nightlife is stargazing; enjoy the silence and dark skies."
        ],
        images: {
            hero: "/destinations/malengue/hero.webp",
            secondary: "/destinations/malengue/experience.webp",
            mood: "/destinations/malengue/mood.webp"
        }
    },
    "waleakodi": {
        slug: "waleakodi",
        name: "Walea Kodi",
        tagline: "A far-flung tropical hideaway for ultimate seclusion.",
        intro: "Walea Kodi is an isolated sanctuary on the northern fringe, offering quiet white-sand beaches and rich protected coral reefs. With minimal development, it’s the perfect place to disconnect and enjoy an exclusive castaway experience far from civilization.",
        whyItMatters: [
            "One of the most isolated spots, perfect for travelers seeking peace and privacy.",
            "Surrounded by pristine protected reefs, offering world-class snorkeling and diving with minimal crowds.",
            "Untouched island scenery where dense greenery meets the shore and reefs remain undisturbed."
        ],
        experiences: [
            {
                title: "“Robinson Crusoe” Beach Day",
                text: "Lounge on a private beach with soft white sand and the gentle sound of waves for a deserted island feel."
            },
            {
                title: "Coral Garden Snorkeling",
                text: "Explore the nearby marine reserve to encounter spectacular coral formations and abundant sea life like turtles."
            },
            {
                title: "Village Visit in Dolong",
                text: "Stroll into the tiny fishing hamlet to meet locals and witness an authentic slice of island life."
            },
            {
                title: "Sunset & Stargazing",
                text: "Climb a small hill at dusk to watch a fiery sunset, then stay out to gaze at the Milky Way."
            }
        ],
        signatureMoment: "Gazing at the Milky Way from a quiet beach, miles from the nearest town, in total silence.",
        routeFit: {
            idealTiming: "End-of-itinerary off-grid escape.",
            suggestedDuration: "2 days (2 nights).",
            pairsWellWith: ["Malenge", "Pulau Puah"],
            notes: [
                "Reachable by infrequent ferries or resort transfers.",
                "No ATM, shops, or reliable signal—bring sufficient cash.",
                "Electricity is limited to generator hours."
            ]
        },
        practicalNotes: [
            "Reserve accommodation and transport in advance.",
            "Practice eco-conscious behavior to protect the marine reserve.",
            "Embrace the digital detox; Wi-Fi is generally unavailable."
        ],
        images: {
            hero: "/destinations/walea-kodi/hero.webp",
            secondary: "/destinations/walea-kodi/experience.webp",
            mood: "/destinations/walea-kodi/mood.webp"
        }
    },
    "una-una": {
        slug: "una-una",
        name: "Una Una",
        tagline: "A volcanic jewel with spectacular marine life.",
        intro: "Una Una is a dramatic volcanic island where black sands meet lush greenery, dominated by the active Mount Colo. Its nutrient-rich waters foster some of the region’s most spectacular marine life, making it a top destination for adventure and diving.",
        whyItMatters: [
            "Offers the rare chance to trek an active volcano and see its ancient crater.",
            " cited as the best diving in the Togeans, with healthy reefs and big fish schools.",
            "A raw, authentic island experience with friendly villagers and no roads or vehicles."
        ],
        experiences: [
            {
                title: "Volcano Hike to Mount Colo",
                text: "Trek up the volcano’s slopes to peer into the verdant caldera and enjoy sweeping ocean views."
            },
            {
                title: "Diving or Snorkeling",
                text: "Dive into an underwater wonderland to see huge fish schools and endless coral gardens in clear water."
            },
            {
                title: "Beachcombing Black Sands",
                text: "Explore unique beaches where black volcanic sand mingles with white, creating beautiful patterns."
            },
            {
                title: "Sunset at the Resort",
                text: "Relax beachfront as the sun dips, painting the sky in brilliant colors, followed by a bonfire."
            }
        ],
        signatureMoment: "Standing on the rim of Mount Colo, feeling the volcanic steam, with the endless blue ocean below.",
        routeFit: {
            idealTiming: "Dedicated adventure segment in your itinerary.",
            suggestedDuration: "2–4 days.",
            pairsWellWith: ["Kadidiri", "Bomba"],
            notes: [
                "Access via infrequent ferry or resort transfer; coordinate carefully.",
                "No ATMs or shops; bring cash and necessities.",
                "Electricity is generator-run, usually in the evening."
            ]
        },
        practicalNotes: [
            "Book dive resorts in advance, especially for transfers.",
            "Bring travel insurance and a first aid kit.",
            "Use a rash guard when snorkeling to avoid plankton stings."
        ],
        images: {
            hero: "/destinations/una-una/hero.webp",
            secondary: "/destinations/una-una/experience.webp",
            mood: "/destinations/una-una/mood.webp"
        }
    },
    "kadidiri": {
        slug: "kadidiri",
        name: "Kadidiri",
        tagline: "The vibrant travel hub with perfect white sands.",
        intro: "Kadidiri is the Togeans’ beloved travel hub, famous for its powder-soft white beaches and vibrant house reefs. It offers a perfect balance of rustic charm and social vibe, where you can dive world-class sites or simply laze in a hammock.",
        whyItMatters: [
            "A tourist-friendly base with a nice social vibe, ideal for beginning your exploration.",
            "Surrounded by rich coral reefs just off the shore, perfect for easy snorkeling.",
            "Features storybook tropical scenery with turquoise lagoons and spectacular sunsets."
        ],
        experiences: [
            {
                title: "House Reef Snorkeling",
                text: "Step right off the beach into gin-clear water to float above a thriving coral garden."
            },
            {
                title: "WWII Bomber Dive",
                text: "Dive to the B-24 “Liberator” wreck, an eerie history museum encrusted with coral and life."
            },
            {
                title: "Kayaking & Island Hopping",
                text: "Paddle to hidden coves or join a boat trip to nearby islets like Bolilanga for more snorkeling."
            },
            {
                title: "Sunset Pier Gathering",
                text: "Gather on the wooden pier with a cold drink to watch the sky ignite at sunset."
            }
        ],
        signatureMoment: "Watching the sunset from the pier with other travelers, as the sky turns purple and the stars come out.",
        routeFit: {
            idealTiming: "First stop to adjust to island time.",
            suggestedDuration: "2–4 days.",
            pairsWellWith: ["Una Una", "Bomba"],
            notes: [
                "20-30 minute boat ride from Wakai (main port).",
                "Cash only economy; no ATM on the island.",
                "Electricity and internet are limited; plan accordingly."
            ]
        },
        practicalNotes: [
            "Book ahead in high season as popular spots fill up.",
            "Communal dining is a great way to meet fellow travelers.",
            "Secure food in your room to avoid tempting local wildlife."
        ],
        images: {
            hero: "/destinations/kadidiri/hero.webp",
            secondary: "/destinations/kadidiri/experience.webp",
            mood: "/destinations/kadidiri/mood.webp"
        }
    },
    "bomba": {
        slug: "bomba",
        name: "Bomba",
        tagline: "A quiet southern retreat of mangroves and sunsets.",
        intro: "Bomba is a peaceful coastal village at the southern tip of Batudaka Island, known for its idyllic white-sand beaches and pristine reefs. It offers a laid-back atmosphere with easy access to snorkeling sites and a glimpse of authentic daily life.",
        whyItMatters: [
            "An important southern gateway, easily accessible from the mainland port of Ampana.",
            "Offers stunning scenery with sandy beaches, jungle outcrops, and breathtaking sunsets.",
            "A hotspot for diving and snorkeling rich reefs that are quieter than northern sites."
        ],
        experiences: [
            {
                title: "Poya Lisa Island Escape",
                text: "Spend a day on this tiny private islet to play Robinson Crusoe on its single circle of beach."
            },
            {
                title: "Snorkeling the Atolls",
                text: "Tour nearby shallow atolls like Hotel California Reef to see neon clams and schooling fish."
            },
            {
                title: "Sunset Sandbar Trip",
                text: "Take a boat to a fleeting sandbar for a magical 360° sunset panorama in the middle of the sea."
            },
            {
                title: "Village Stroll",
                text: "Wander through the village to see friendly locals, traditional houses, and the slow pace of island life."
            }
        ],
        signatureMoment: "Standing on a temporary sandbar in the middle of the sea, watching the sun dip below the horizon.",
        routeFit: {
            idealTiming: "Transit point or wind-down spot.",
            suggestedDuration: "1–2 days.",
            pairsWellWith: ["Kadidiri", "Luwuk"],
            notes: [
                "Accessed by boat from Ampana or Wakai.",
                "No ATMs and very limited signal; bring cash.",
                "Electricity usually available only at night."
            ]
        },
        practicalNotes: [
            "Book homestays in advance during high season.",
            "Coordinate diving with resorts regarding schedules.",
            "Dress modestly in the village and respect local customs."
        ],
        images: {
            hero: "/destinations/bomba/hero.webp",
            secondary: "/destinations/bomba/experience.webp",
            mood: "/destinations/bomba/mood.webp"
        }
    },
    "luwuk": {
        slug: "luwuk",
        name: "Luwuk",
        tagline: "The scenic coastal gateway to your island adventure.",
        intro: "Luwuk is a pleasant coastal city and the primary logistics hub for the Togeans, nestled between green hills and the blue bay. It offers dramatic coastal views, modern amenities, and a chance to recharge before or after your remote island journey.",
        whyItMatters: [
            "The closest airport and primary staging point for organizing travel to the islands.",
            "Boasts gorgeous coastal scenery, especially from high viewpoints overlooking the bay.",
            "Provides modern conveniences like ATMs and markets, contrasting with rustic island life."
        ],
        experiences: [
            {
                title: "Coastal Drive & Panorama",
                text: "Drive to Kilo Lima Viewpoint for a thrilling cliffside journey and sweeping views of the town and bay."
            },
            {
                title: "Kilo Lima Beach",
                text: "Relax at this popular local beach with clear water, perfect for a dip and a fresh coconut."
            },
            {
                title: "Traditional Market Visit",
                text: "Wander through the central market to see fresh exotic fruits, seafood, and the sensory buzz of local commerce."
            },
            {
                title: "Waterfall Excursion",
                text: "Take a trip to Salodik Waterfall for a refreshing swim in natural pools beneath the jungle canopy."
            }
        ],
        signatureMoment: "Looking out from Kilo Lima Viewpoint at sunrise, seeing the town wake up against the calm blue bay.",
        routeFit: {
            idealTiming: "Transit stay before or after the islands.",
            suggestedDuration: "1 day (1-2 nights).",
            pairsWellWith: ["Bomba", "Una Una"],
            notes: [
                "Stock up on cash and essentials here before departing.",
                "Daily flights available; arrange transport to Ampana for the ferry.",
                "Traffic can be busy; allow time for travel."
            ]
        },
        practicalNotes: [
            "Try local Sulawesi specialties like grilled fish.",
            "Use the good signal to download maps and contact family.",
            "Do last-minute shopping for snorkeling gear or toiletries."
        ],
        images: {
            hero: "/destinations/luwuk/hero.webp",
            secondary: "/destinations/luwuk/experience.webp",
            mood: "/destinations/luwuk/mood.webp"
        }
    }
};
