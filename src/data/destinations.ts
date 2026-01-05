export interface Destination {
    name: string;
    slug: string;
    image: string;
    description: string;
}

export const destinations: Destination[] = [
    {
        name: "Pulau Puat",
        slug: "pulau-puat",
        image: "/destinations/destination_pulau_puat.webp",
        description: "An isolated paradise where a turquoise lagoon meets the open sea, offering sunrise views over a pristine coral reef edge.",
    },
    {
        name: "Malengue",
        slug: "malengue",
        image: "/destinations/destination_malengue.webp",
        description: "A lush coastline framing a calm bay, perfect for witnessing timeless wooden boats drift by in the warm afternoon glow.",
    },
    {
        name: "Walea Kodi",
        slug: "walea-kodi",
        image: "/destinations/destination_walea_kodi.webp",
        description: "Crystal-clear shallow waters reveal a vibrant coral garden, creating a serene tropical sanctuary for underwater exploration.",
    },
    {
        name: "Una Una",
        slug: "una-una",
        image: "/destinations/destination_una_una.webp",
        description: "A dramatic volcanic silhouette rising from the depths, shrouded in cinematic clouds and elegant moody light at dawn.",
    },
    {
        name: "Kadidiri",
        slug: "kadidiri",
        image: "/destinations/destination_kadidiri.webp",
        description: "White sand beaches meet calm glassy waters, offering a secluded retreat under the golden hour sun with minimal human presence.",
    },
    {
        name: "Bomba",
        slug: "bomba",
        image: "/destinations/destination_bomba.webp",
        description: "Where dense mangrove forests meet the sea, creating a tranquil inlet rich in deep greens and soothing water tones.",
    },
    {
        name: "Luwuk",
        slug: "luwuk",
        image: "/destinations/destination_luwuk.webp",
        description: "A dramatic coastline defined by rugged cliffs and sweeping bright blue seas, illuminated by crisp tropical daylight.",
    },
];
