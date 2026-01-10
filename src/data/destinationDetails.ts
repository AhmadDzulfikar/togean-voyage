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
        tagline: "A pristine barrier reef standing guard over the open ocean.",
        intro: "Located at the furthest edge of the archipelago, Pulau Puah offers a rare glimpse into a healthy, thriving reef system where the ocean feels practically untouched. The lagoon waters remain calm and clear, providing exceptional visibility for those willing to venture this far.",
        whyItMatters: [
            "Home to one of the most diverse coral gardens in the region with vibrant marine life",
            "Offers sheltered snorkeling conditions even when the open sea is restless",
            "A quiet refuge for nature lovers, far from the busy main boat channels"
        ],
        experiences: [
            {
                title: "Barrier Reef Snorkeling",
                text: "Drift along the reef edge where the shallow coral gardens meet the deep blue drop-off, observing schools of fish in their natural habitat."
            },
            {
                title: "Lagoon Exploration",
                text: "Paddle through the silent turquoise waters of the inner lagoon, sheltered from open sea swells and perfect for a peaceful morning."
            },
            {
                title: "Sandbar Walks",
                text: "Walk along the untouched stretch of white sand that appears only at low tide, revealing a path through the sea."
            },
            {
                title: "Coastal Bird Watching",
                text: "Spot sea eagles and other coastal birds nesting in the dense vegetation that fringes the island's rocky shores."
            }
        ],
        signatureMoment: "Watching the sunrise illuminate the underwater coral garden from the surface, revealing a world of color beneath the waves.",
        routeFit: {
            idealTiming: "Morning for the clearest water and calmest seas",
            suggestedDuration: "2 to 3 hours",
            pairsWellWith: ["Bomba", "Malenge"],
            notes: [
                "Accessible only by boat, requiring a short journey from the main islands",
                "Best visited during high tide for easier beach access and swimming"
            ]
        },
        practicalNotes: [
            "Bring reef-safe sunscreen to protect the delicate corals",
            "No facilities on the island, so bring plenty of water and snacks",
            "Respect the silence; this is a sanctuary for nature",
            "Wear rash guards for sun protection while snorkeling for long periods"
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
        tagline: "A lush, green sanctuary where the jungle meets the sea.",
        intro: "Malenge is defined by its dense tropical foliage that spills right down to the water's edge, creating a sense of absolute seclusion. The island is a haven for those seeking a deeper connection with the land and the simple rhythm of island life.",
        whyItMatters: [
            "Features a unique blend of dense jungle trekking and coastal exploration",
            "Known for its calm bays that are perfect for swimming and paddleboarding",
            "Home to traditional Bajau settlements that offer a glimpse into local culture"
        ],
        experiences: [
            {
                title: "Jungle Trekking",
                text: "Follow narrow paths through the dense canopy to discover hidden viewpoints that offer sweeping vistas of the archipelago."
            },
            {
                title: "Village Visit",
                text: "Spend time in a local Bajau settlement, observing the traditional boat-building techniques passed down through generations."
            },
            {
                title: "Bay Cruising",
                text: "Take a slow boat ride around the sheltered bays, watching for wildlife along the mangrove-lined shores."
            },
            {
                title: "Traditional Fishing",
                text: "Join a local fisherman for a morning outing to learn sustainable fishing methods using handlines and simple nets."
            }
        ],
        signatureMoment: "The sound of the jungle waking up at dawn, a symphony of birds and insects greeting the new day.",
        routeFit: {
            idealTiming: "Late morning to early afternoon",
            suggestedDuration: "3 to 4 hours",
            pairsWellWith: ["Pulau Puah", "Waleakodi"],
            notes: [
                "Wear comfortable walking shoes if you plan to trek inland",
                "Respect local customs when visiting villages by dressing modestly"
            ]
        },
        practicalNotes: [
            "Insect repellent is recommended for jungle walks",
            "Carry small denominations of cash for purchasing local crafts",
            "Ask permission before taking photos of people or their homes",
            "Stay on marked paths to avoid disturbing the local flora"
        ],
        images: {
            hero: "/destinations/malengue/hero.webp",
            secondary: "/destinations/malengue/experience.webp",
            mood: "/destinations/malengue/mood.webp"
        }
    },
    "waleakodi": {
        slug: "waleakodi",
        name: "Waleakodi",
        tagline: "Crystal clear waters and untouched coral flats stretching to the horizon.",
        intro: "Waleakodi is famous for its breathtaking clarity, where the water is so transparent that boats appear to float on air. This destination is a paradise for underwater enthusiasts, offering some of the best visibility in the entire Togeans.",
        whyItMatters: [
            "Renowned for exceptional water clarity and visibility often exceeding 30 meters",
            "Hosts a vibrant marine ecosystem with high chances of spotting pelagic species",
            "A peaceful retreat with limited foot traffic, ensuring a private experience"
        ],
        experiences: [
            {
                title: "Deep Reef Diving",
                text: "Explore the deeper sections of the reef where larger schools of fish and pelagic species congregate in the currents."
            },
            {
                title: "Snorkeling the Flats",
                text: "Drift over the shallow coral flats that teem with colorful reef fish and intricate coral formations."
            },
            {
                title: "Glass Bottom Boat",
                text: "Experience the underwater world without getting wet, perfect for those who prefer to stay dry."
            },
            {
                title: "Sunset Drift",
                text: "Let the gentle current carry you along the reef edge as the sun begins to set, casting golden rays through the water."
            }
        ],
        signatureMoment: "The sensation of hovering weightlessly over the reef edge, staring down into the infinite blue deep.",
        routeFit: {
            idealTiming: "Midday when the sun is highest for maximum visibility",
            suggestedDuration: "2 to 4 hours",
            pairsWellWith: ["Malenge", "Una Una"],
            notes: [
                "Currents can be strong, so fins are highly recommended for snorkelers",
                "Best enjoyed when the sun is overhead to fully appreciate the water color"
            ]
        },
        practicalNotes: [
            "Bring a rash guard or wetsuit for longer sessions in the water",
            "Don't touch the coral or marine life to protect the ecosystem",
            "Hydrate well after spending time in the salt water and sun",
            "Check current conditions with your guide before entering deep water"
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
        tagline: "A dramatic volcanic island offering a landscape unlike any other.",
        intro: "Dominated by the active Colo volcano, Una Una stands apart with its black sand beaches and lush, nutrient-rich soils. The underwater topography here is dramatic, with deep walls and huge sponges that thrive in the volcanic waters.",
        whyItMatters: [
            "Unique black sand coastline creates a striking contrast to other islands",
            "Incredible wall diving sites with huge schools of barracuda and jacks",
            "A raw, powerful landscape that feels wild and untamed compared to the limestone islands"
        ],
        experiences: [
            {
                title: "Volcano Trekking",
                text: "Hike up the slopes of Mount Colo to witness the steaming vents and panoramic views of the surrounding sea."
            },
            {
                title: "Black Sand Diving",
                text: "Discover the unique macro life that creates a home against the stark black volcanic sand bottom."
            },
            {
                title: "Wall Exploration",
                text: "Drift along vertical drop-offs covered in massive sponge formations and vibrant soft corals."
            },
            {
                title: "Village Culture",
                text: "Visit the resilient communities that have adapted to life in the shadow of the volcano."
            }
        ],
        signatureMoment: "Watching the silhouette of the volcano catch the first light of dawn, rising majestically from the sea.",
        routeFit: {
            idealTiming: "Early morning for trekking or midday for diving",
            suggestedDuration: "Full day excursion",
            pairsWellWith: ["Waleakodi", "Kadidiri"],
            notes: [
                "Requires a longer boat ride, so plan for a full day trip",
                "Hiking requires good fitness and appropriate footwear"
            ]
        },
        practicalNotes: [
            "Wear sturdy shoes for walking on volcanic rock and trails",
            "Bring plenty of water as it can get hot on the exposed slopes",
            "Be prepared for a different aesthetic with dark sand beaches",
            "Respect the local beliefs regarding the volcano's spirit"
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
        tagline: "The quintessential tropical paradise with powder-soft white sands.",
        intro: "Kadidiri is the postcard-perfect image of the Togeans, featuring rows of coconut palms leaning over blindingly white beaches. It is a place to slow down completely, where the biggest decision of the day is which hammock to choose.",
        whyItMatters: [
            "Famous for its long stretch of white sandy beach and crystal clear shallows",
            "Excellent house reef accessible directly from the shore",
            "A social hub where travelers from around the world gather to share stories"
        ],
        experiences: [
            {
                title: "Beach relaxation",
                text: "Spend hours lounging on the soft sand, reading a book or simply watching the clouds drift by."
            },
            {
                title: "House Reef Snorkel",
                text: "Step off the beach and immediately into a vibrant coral garden teeming with life."
            },
            {
                title: "Sunset Cocktails",
                text: "Enjoy a refreshing drink at a beachside bar as the sky turns into a canvas of oranges and purples."
            },
            {
                title: "Night Snorkeling",
                text: "Venture into the shallows after dark with a torch to see nocturnal marine creatures come alive."
            }
        ],
        signatureMoment: "The golden hour glow reflecting off the calm water as the day quietly transitions into night.",
        routeFit: {
            idealTiming: "Afternoon to sunset",
            suggestedDuration: "Overnight or late afternoon",
            pairsWellWith: ["Una Una", "Bomba"],
            notes: [
                "Can get busier than other islands, so book accommodation in advance",
                "Perfect for socializing and meeting other travelers"
            ]
        },
        practicalNotes: [
            "Sand flies can be present at dusk, so bring repellent",
            "Water is precious; conserve it when showering",
            "Cash is necessary as there are no ATMs on the island",
            "Internet signal is intermittent, perfect for a digital detox"
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
        tagline: "Where the maze of mangroves opens up to hidden sandy retreats.",
        intro: "Bomba offers a different kind of beauty, defined by its extensive mangrove forests and secluded beaches hidden within coves. It is a place of quiet exploration, where the water is calm and the atmosphere is deeply restorative.",
        whyItMatters: [
            "Features extensive mangrove systems that are vital to the marine ecosystem",
            "Home to some of the most private and secluded beaches in the archipelago",
            "Offers a mix of cultural interaction and pure natural isolation"
        ],
        experiences: [
            {
                title: "Mangrove Kayaking",
                text: "Paddle silently through the winding mangrove channels, observing the complex root systems and wildlife."
            },
            {
                title: "Hidden Beach Picnic",
                text: "Take a boat to a secluded cove for a private picnic on a beach that feels entirely your own."
            },
            {
                title: "Cave Exploration",
                text: "Visit the nearby limestone caves that hold secrets of the island's geological past."
            },
            {
                title: "Village Immersion",
                text: "Walk through the sleepy village of Bomba to see the daily rhythm of island life unfold."
            }
        ],
        signatureMoment: "Drifting in a kayak through a narrow mangrove tunnel, surrounded only by the sounds of nature.",
        routeFit: {
            idealTiming: "Morning or late afternoon",
            suggestedDuration: "3 to 4 hours",
            pairsWellWith: ["Kadidiri", "Pulau Puah"],
            notes: [
                "Mosquitoes can be active near the mangroves, so cover up",
                "Tides affect access to some mangrove channels"
            ]
        },
        practicalNotes: [
            "Bring insect repellent for mangrove areas",
            "Wear sun protection even when shaded by trees",
            "Respect the local community as you pass through their village",
            "Keep noise to a minimum to observe wildlife effectively"
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
        tagline: "The gateway to the wonders of the Togean Islands.",
        intro: "Often just a transit point, Luwuk surprises with its dramatic coastal cliffs and stunning vistas over the deep blue sea. It serves as the bridge between the mainland and the island paradise, offering a hint of the adventure to come.",
        whyItMatters: [
            "The primary gateway and logistics hub for accessing the Togean Islands",
            "Offers spectacular coastal scenery with elevated viewpoints",
            "A bustling town that provides a contrast to the quiet island life"
        ],
        experiences: [
            {
                title: "Coastal Drive",
                text: "Take a drive along the coastal road that hugs the cliffs, offering panoramic views of the ocean."
            },
            {
                title: "Kilo Lima Beach",
                text: "Relax at this popular local beach known for its clear water and lively atmosphere on weekends."
            },
            {
                title: "Local Market Visit",
                text: "Explore the central market to see the abundance of fresh produce and seafood from the region."
            },
            {
                title: "Sunset Viewpoint",
                text: "Head to a high point in the city to watch the sun dip below the horizon, painting the sky in gold."
            }
        ],
        signatureMoment: "Standing on the cliff edge looking out at the vast ocean, anticipating the journey to the islands.",
        routeFit: {
            idealTiming: "Transit day or overnight stay",
            suggestedDuration: "1 day",
            pairsWellWith: ["Bomba", "Una Una"],
            notes: [
                "Use this as your stocking up point for supplies",
                "ATMs and better medical facilities are available here"
            ]
        },
        practicalNotes: [
            "Stock up on cash and essentials before leaving for the islands",
            "Book your boat tickets in advance during peak season",
            "Enjoy the variety of food options available in the town",
            "Traffic can be busy, so allow extra time for travel"
        ],
        images: {
            hero: "/destinations/luwuk/hero.webp",
            secondary: "/destinations/luwuk/experience.webp",
            mood: "/destinations/luwuk/mood.webp"
        }
    }
};
