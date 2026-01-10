export interface Destination {
    name: string;
    slug: string;
    image: string;
    description: string;
}

export const destinations: Destination[] = [
    {
        name: "Pulau Puah",
        slug: "pulau-puah",
        image: "/destinations_real/destination_pulau_puah.webp",
        description: "A secluded island offering absolute tranquility, untouched white-sand beaches, and thriving coral reefs far from the crowds.",
    },
    {
        name: "Malenge",
        slug: "malenge",
        image: "/destinations_real/destination_malengue.webp",
        description: "A tropical paradise of dense jungles and unspoiled beaches, home to the fascinating Bajo sea gypsy culture.",
    },
    {
        name: "Walea Kodi",
        slug: "waleakodi",
        image: "/destinations_real/destination_waleakodi.webp",
        description: "An isolated hideaway with pristine coral reefs and eco-friendly resorts, perfect for a private castaway experience.",
    },
    {
        name: "Una Una",
        slug: "una-una",
        image: "/destinations_real/destination_una_una.webp",
        description: "A volcanic jewel with unique black sands and nutrient-rich waters teeming with spectacular marine life.",
    },
    {
        name: "Kadidiri",
        slug: "kadidiri",
        image: "/destinations_real/destination_kadidiri.webp",
        description: "The travel hub of the Togeans, featuring powdery white beaches, vibrant house reefs, and a friendly atmosphere.",
    },
    {
        name: "Bomba",
        slug: "bomba",
        image: "/destinations_real/destination_bomba.webp",
        description: "A quiet southern retreat with idyllic beaches, mangrove forests, and glorious sunsets over the bay.",
    },
    {
        name: "Luwuk",
        slug: "luwuk",
        image: "/destinations_real/destination_luwuk.webp",
        description: "The scenic mainland gateway to the Togeans, offering dramatic coastal views and modern conveniences before your island adventure.",
    },
];
