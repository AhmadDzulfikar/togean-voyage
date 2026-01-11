export interface Program {
    name: string;
    slug: string;
    image: string;
    dateLabel: string;
    description: string;
    overview: string;
    whatYoullDo: string;
    bestTime: string;
    notes: string;
}

export const programs: Program[] = [
    {
        name: "Snorkeling & diving",
        slug: "snorkeling-diving",
        image: "/programs_real/snorkeling.webp",
        dateLabel: "Togean Voyages",
        description: "Explore coral gardens, walls, and wrecks across Kadidiri, Una Una, and Walea Kodi, with warm waters and high biodiversity.",
        overview: "Guided sessions for beginners to advanced divers, prioritizing safety, reef-friendly habits, and the best-visibility sites in the Togeans.",
        whatYoullDo: "Snorkel house reefs, dive drop-offs and the B-24 wreck, practice buoyancy, and learn local marine ecology from instructors.",
        bestTime: "Year-round, but calmest seas usually April-October; many guides rate March-December best for diving.",
        notes: "Suitable for most fitness levels. Bring rashguard and reef-safe sunscreen. Gear can be arranged at resorts; schedules may shift with seasonal winds."
    },
    {
        name: "Relaxing & sunbathing",
        slug: "relaxing-sunbathing",
        image: "/programs_real/sunbathing.webp",
        dateLabel: "Togean Voyages",
        description: "Slow down on palm-fringed beaches in Kadidiri, Malenge, Puat, and Bomba—clear lagoons, soft sand, and uninterrupted island quiet.",
        overview: "A comfort-first beach program with flexible pacing: swim, read, nap in hammocks, and reset between boat days and adventure activities.",
        whatYoullDo: "Choose morning swims, lazy lunches, beach walks, and sunset sessions; optional massages or yoga where available at resorts.",
        bestTime: "Best during drier months April-October for more sun and smoother sea crossings, though beach time is possible year-round.",
        notes: "Bring high-SPF sunscreen, hat, and reusable water bottle. Midday sun is intense; take shade breaks, hydrate, and protect your skin daily."
    },
    {
        name: "Hiking & viewpoints",
        slug: "hiking-viewpoints",
        image: "/programs_real/hiking.webp",
        dateLabel: "Togean Voyages",
        description: "Trade reefs for ridgelines: jungle walks on Malenge and Batudaka, plus Mount Colo’s volcanic trek on Una Una for sweeping bay views.",
        overview: "Short to moderate hikes matched to your pace, with local guides highlighting geology, flora, and the best sunrise or sunset lookout points.",
        whatYoullDo: "Volcano summit hike, forest trails, village-to-beach footpaths, and cliff viewpoints (including around Luwuk); plenty of photo stops and cooling swims afterward.",
        bestTime: "April-October is typically drier for trails; avoid windier months when boat transfers and hike plans can change.",
        notes: "Wear closed shoes, bring insect repellent and 1-2 liters of water. Start early for cooler temperatures; guides are recommended for Mount Colo."
    },
    {
        name: "Local community immersion",
        slug: "local-community-immersion",
        image: "/programs_real/localcommunity.webp",
        dateLabel: "Togean Voyages",
        description: "Meet island communities: Bajau sea-gypsy villages near Malenge, fishing hamlets like Bomba, and everyday life in Luwuk’s markets and cafés.",
        overview: "Low-impact cultural visits focused on respect: learn customs, share stories, support local livelihoods, and understand how the islands depend on the sea.",
        whatYoullDo: "Walk village boardwalks, join home-cooked meals, watch fishing and boatbuilding, shop local produce, and practice simple Bahasa greetings with hosts.",
        bestTime: "Year-round. Choose calmer months for easier boat transfers, and plan visits around community routines (fishing, school, prayer times).",
        notes: "Dress modestly in villages, ask before photos, and bring small cash for crafts or donations. Your guide will help with etiquette and translation."
    },
    {
        name: "Wildlife spotting",
        slug: "wildlife-spotting",
        image: "/programs_real/wildlifespotting.webp",
        dateLabel: "Togean Voyages",
        description: "Spot island endemics and marine megafauna: Togean macaques, coconut crabs, sea turtles, and (with luck) dugongs—always at a respectful distance.",
        overview: "Guided wildlife-focused outings combining reef time, forest walks, and night searches, prioritizing ethical viewing and conservation awareness.",
        whatYoullDo: "Snorkel for turtles, scan seagrass bays for dugongs, join dusk beach walks, and take guided night walks to look for coconut crabs.",
        bestTime: "Year-round, but calmer seas April-October improve boat access and visibility; night spotting often improves after rain.",
        notes: "Use red light at night, keep noise low, never feed wildlife, and follow guides’ instructions. Bring long sleeves and insect repellent for forest walks."
    },
    {
        name: "Beach exploration & hidden coves",
        slug: "beach-exploration-hidden-coves",
        image: "/programs_real/beachexplor.webp",
        dateLabel: "Togean Voyages",
        description: "Explore quiet bays, sandbars, and secret coves by boat or kayak—perfect for photography, swimming, and discovering beaches with almost no footprints.",
        overview: "A flexible island-hopping program designed around tides and weather, combining short transfers with long beach stops on Puat, Malenge, Kadidiri, and Bomba.",
        whatYoullDo: "Boat-hop to uninhabited islets, picnic on sandbars, snorkel between stops, and walk coastlines scouting the best swim entries and sunset angles.",
        bestTime: "April-October for calmer crossings and clearer water; plan around tides for sandbars and shallow lagoons.",
        notes: "Pack a dry bag, water shoes, and extra drinking water. Remote beaches have no services; leave nothing behind and avoid collecting coral or shells."
    },
    {
        name: "Stargazing",
        slug: "stargazing",
        image: "/programs_real/stargazing.webp",
        dateLabel: "Togean Voyages",
        description: "Enjoy dark-sky nights on remote islands: see the Milky Way, meteor showers, and bright constellations from quiet beaches with minimal light pollution.",
        overview: "An unplugged evening program pairing beach relaxation with skywatching, storytelling, and optional astrophotography tips from guides.",
        whatYoullDo: "Set up on a west-facing beach, learn key constellations, watch satellites and shooting stars, and capture long-exposure photos using a tripod or phone.",
        bestTime: "Clearest skies are common in drier months April-October; schedule around moon phases for darker skies, and avoid windiest transfer nights.",
        notes: "Bring a headlamp (red mode), light jacket for sea breezes, and insect repellent. Respect quiet hours; keep lights low to protect night vision."
    }
];
