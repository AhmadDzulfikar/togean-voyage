// Local Community Experiences Data
// Used for /local-community listing and detail pages

export interface LocalCommunityExperience {
    title: string;
    slug: string;
    image: string;
    shortDescription: string;
    duration: string;
    bestFor: string;
    location: string;
    whatYoullDo: string[];
    goodToKnow: string[];
}

export const localCommunityExperiences: LocalCommunityExperience[] = [
    {
        title: "Bajau Stilt Village Visit",
        slug: "bajau-stilt-village",
        image: "/local-community/community-bajau-village.webp",
        shortDescription: "Walk gently through the stilted homes of the Bajau sea nomads. Observe daily life, meet families, and learn how generations have lived in harmony with the sea.",
        duration: "2 to 3 hours",
        bestFor: "Culture, Slow Travel, Families",
        location: "Togean",
        whatYoullDo: [
            "Arrive by boat and walk the wooden pathways between traditional stilt houses",
            "Meet local families and observe daily routines: net mending, fish drying, children at play",
            "Learn about Bajau history and their deep connection to the ocean",
            "Share tea or snacks with a host family (optional, arranged respectfully)",
            "Leave with a deeper understanding of sustainable coastal living"
        ],
        goodToKnow: [
            "This is an observational visit, not a performance. Please be respectful and quiet.",
            "Dress modestly: cover shoulders and knees.",
            "Photography is welcome but always ask before photographing individuals.",
            "Bring a small gift (coffee, snacks) for the host family if visiting their home.",
            "The village has uneven walkways. Wear sturdy sandals or shoes.",
            "Our guides facilitate introductions and translate as needed."
        ]
    },
    {
        title: "Luwuk Market and Street Food Tasting",
        slug: "luwuk-market-food",
        image: "/local-community/community-market-food.webp",
        shortDescription: "Explore the bustling Luwuk morning market with a local guide. Taste fresh tropical fruits, grilled fish, and regional snacks while supporting small vendors.",
        duration: "2 to 3 hours",
        bestFor: "Foodies, Solo Travelers, Couples",
        location: "Luwuk",
        whatYoullDo: [
            "Meet your guide at sunrise and walk through the vibrant market stalls",
            "Sample fresh tropical fruits, local cakes, and grilled seafood",
            "Learn about regional ingredients and cooking traditions",
            "Chat with friendly vendors and see the daily commerce of Central Sulawesi",
            "End with coffee at a local warung (small eatery)"
        ],
        goodToKnow: [
            "Best experienced in the early morning (6:00 to 8:00 AM) when the market is liveliest.",
            "Bring cash in small denominations to purchase snacks directly from vendors.",
            "Wear comfortable walking shoes and clothes you do not mind getting a bit dusty.",
            "Inform your guide of any food allergies or dietary restrictions in advance.",
            "This is an authentic market, not a tourist zone. Expect crowds and local pace."
        ]
    },
    {
        title: "Island Cooking Session",
        slug: "island-cooking",
        image: "/local-community/community-cooking.webp",
        shortDescription: "Join a local cook in their outdoor kitchen and learn to prepare simple Togean dishes. Use fresh fish, coconut, and island herbs picked that morning.",
        duration: "3 to 4 hours",
        bestFor: "Foodies, Couples, Slow Travel",
        location: "Togean",
        whatYoullDo: [
            "Visit a local home or guest house kitchen",
            "Help prepare ingredients: grate coconut, chop herbs, clean fresh fish",
            "Learn to cook 2 to 3 traditional dishes (varies by season and catch)",
            "Sit down together and enjoy the meal you have created",
            "Receive simple recipe notes to take home"
        ],
        goodToKnow: [
            "Sessions are relaxed and hands on. No prior cooking skill needed.",
            "Dishes vary based on what is fresh and available that day.",
            "Vegetarian options can be arranged with advance notice.",
            "Bring an open mind and appetite.",
            "A portion of the fee goes directly to the host family."
        ]
    },
    {
        title: "Handicraft and Weaving Workshop",
        slug: "handicraft-weaving",
        image: "/local-community/community-handicraft.webp",
        shortDescription: "Spend an afternoon with local artisans learning traditional weaving or simple crafts. Take home a handmade keepsake and support community livelihoods.",
        duration: "2 to 3 hours",
        bestFor: "Creative Travelers, Families, Solo",
        location: "Togean",
        whatYoullDo: [
            "Meet local women artisans in a village setting",
            "Learn basic weaving patterns or basket making techniques",
            "Create your own small item to keep as a memento",
            "Hear stories about traditional crafts and their cultural significance",
            "Purchase handmade goods directly from the makers (optional)"
        ],
        goodToKnow: [
            "Patience is key. Traditional crafts take time to learn.",
            "Workshops support local women's cooperatives.",
            "No experience necessary. Beginners are welcome.",
            "Bring sunscreen and water as some workshops are outdoors.",
            "Children are welcome and often enjoy this activity."
        ]
    },
    {
        title: "Boat Building and Fishing Life Talk",
        slug: "boat-building-fishing",
        image: "/local-community/community-boatlife.webp",
        shortDescription: "Visit a seaside workshop where wooden boats are built by hand. Listen as fishermen share stories of the sea, tides, and traditions passed down through generations.",
        duration: "1.5 to 2 hours",
        bestFor: "Culture, Slow Travel, Photography",
        location: "Togean",
        whatYoullDo: [
            "Walk to a local boat yard and observe craftsmen at work",
            "Learn how traditional boats are constructed without modern tools",
            "Sit with fishermen and hear their stories of life at sea",
            "Ask questions through your guide and gain insight into maritime traditions",
            "Photograph the boats, tools, and coastal scenery"
        ],
        goodToKnow: [
            "This is an observational experience. Boat building continues on its own schedule.",
            "Respectful curiosity is encouraged, but do not interrupt the craftsmen at work.",
            "Best visited in the morning when activity is highest.",
            "Wear sun protection and bring water.",
            "A small donation to the workshop is appreciated but not required."
        ]
    },
    {
        title: "Village Coffee and Storytelling Evening",
        slug: "coffee-storytelling",
        image: "/local-community/community-coffee-story.webp",
        shortDescription: "As the sun sets, gather with locals over freshly brewed island coffee. Listen to folktales, share travel stories, and enjoy the gentle pace of island evenings.",
        duration: "1.5 to 2 hours",
        bestFor: "Slow Travel, Couples, Solo",
        location: "Togean",
        whatYoullDo: [
            "Join a small group at a local home or communal space",
            "Taste traditional Sulawesi coffee prepared over charcoal",
            "Listen to local legends and stories from village elders or hosts",
            "Share your own travel experiences if you wish",
            "Watch the sunset and enjoy unhurried conversation"
        ],
        goodToKnow: [
            "Conversations flow naturally. There is no fixed agenda.",
            "Translation is provided by your guide.",
            "Bring a small gift (snacks or coffee) as a gesture of gratitude.",
            "Dress casually and expect to sit on mats or simple seating.",
            "This experience is best enjoyed with an open heart and no rush."
        ]
    },
    {
        title: "School Visit and Community Support",
        slug: "school-community-support",
        image: "/local-community/community-community-support.webp",
        shortDescription: "Visit a local school to meet students and teachers. Learn about island education, share a simple activity, and contribute meaningfully without disrupting daily life.",
        duration: "1.5 to 2 hours",
        bestFor: "Families, Educators, Mindful Travelers",
        location: "Togean",
        whatYoullDo: [
            "Arrive during a designated visiting period (not during lessons)",
            "Meet the headteacher and learn about education challenges and hopes",
            "Participate in a short, pre-arranged activity: reading, drawing, or games",
            "Donate school supplies if you have brought them (coordinated in advance)",
            "Leave space for genuine, non-performative connection"
        ],
        goodToKnow: [
            "This is not voluntourism. Visits are brief, respectful, and coordinated.",
            "Please do not distribute candy or gifts randomly to children.",
            "If you wish to donate supplies, coordinate with your guide beforehand.",
            "Photography of children requires permission from teachers.",
            "The goal is mutual respect, not a one-sided experience.",
            "We support the school through ongoing partnerships, not one-time visits."
        ]
    },
    {
        title: "Traditional Music and Dance Night",
        slug: "music-dance-night",
        image: "/local-community/community-music-dance.webp",
        shortDescription: "Experience an evening of traditional Sulawesi music and dance. Local performers share their heritage through song, movement, and the rhythms of handmade instruments.",
        duration: "1.5 to 2 hours",
        bestFor: "Culture, Families, Couples",
        location: "Togean",
        whatYoullDo: [
            "Gather at a village hall or outdoor space as evening falls",
            "Watch local performers in traditional dress",
            "Listen to songs and stories told through music",
            "Learn a simple dance step or rhythm if invited",
            "Applaud, appreciate, and connect with the performers afterward"
        ],
        goodToKnow: [
            "Performances are arranged for small groups, not large tour buses.",
            "Dress casually but respectfully.",
            "Tipping the performers is welcome and appreciated.",
            "Photography and video are usually allowed. Ask your guide to confirm.",
            "This is a genuine cultural exchange, not a staged tourist show."
        ]
    }
];
