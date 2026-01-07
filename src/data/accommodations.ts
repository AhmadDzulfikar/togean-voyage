export type Accommodation = {
    id: string;
    destination: "Pulau Puat" | "Malengue" | "Walea Kodi";
    title: string;
    description: string;
    image: string;
};

export const accommodations: Accommodation[] = [
    {
        id: "pp-1",
        destination: "Pulau Puat",
        title: "The Deck House",
        description: "Perched over the water with direct lagoon access. Sleep to the sound of gentle waves.",
        image: "/accommodation/accom-pulau-puat-1.png"
    },
    {
        id: "pp-2",
        destination: "Pulau Puat",
        title: "Garden Villa",
        description: "Tucked into the palms for complete privacy. A cool, shaded retreat steps from the sand.",
        image: "/accommodation/accom-pulau-puat-2.png"
    },
    {
        id: "ma-1",
        destination: "Malengue",
        title: "Sunrise Room",
        description: "East-facing for golden mornings. Airy, light-filled, and simply furnished for clarity.",
        image: "/accommodation/accom-malengue-1.png"
    },
    {
        id: "ma-2",
        destination: "Malengue",
        title: "The Loft",
        description: "Elevated views of the canopy and sea. High ceilings and cross-breezes keep it cool naturally.",
        image: "/accommodation/accom-malengue-2.png"
    },
    {
        id: "wk-1",
        destination: "Walea Kodi",
        title: "Veranda Suite",
        description: "Life lived outside. A massive private terrace becomes your living room, dining area, and nap station.",
        image: "/accommodation/accom-walea-kodi-1.png"
    },
    {
        id: "wk-2",
        destination: "Walea Kodi",
        title: "Reef Edge Cottage",
        description: "The closest you can get to the drop-off. Watch turtles pass by from your morning coffee spot.",
        image: "/accommodation/accom-walea-kodi-2.png"
    }
];
