export interface WildlifeSpecies {
    id: number;
    name: string;
    localName: string;
    image: string;
    habitat: "sea" | "land";
    slug: string;
}

export const wildlifeSpecies: WildlifeSpecies[] = [
    // SEA WILDLIFE
    {
        id: 1,
        name: "Green Sea Turtle",
        localName: "Penyu Hijau",
        image: "/wildlife/species/01-green-sea-turtle.webp",
        habitat: "sea",
        slug: "green-sea-turtle",
    },
    {
        id: 2,
        name: "Hawksbill Turtle",
        localName: "Penyu Sisik",
        image: "/wildlife/species/02-hawksbill-turtle.webp",
        habitat: "sea",
        slug: "hawksbill-turtle",
    },
    {
        id: 3,
        name: "Napoleon Wrasse",
        localName: "Ikan Napoleon",
        image: "/wildlife/species/03-napoleon-wrasse.webp",
        habitat: "sea",
        slug: "napoleon-wrasse",
    },
    {
        id: 4,
        name: "Dugong",
        localName: "Duyung",
        image: "/wildlife/species/04-dugong.webp",
        habitat: "sea",
        slug: "dugong",
    },
    {
        id: 5,
        name: "Giant Clam",
        localName: "Kima",
        image: "/wildlife/species/05-giant-clam.webp",
        habitat: "sea",
        slug: "giant-clam",
    },
    {
        id: 6,
        name: "Seahorse",
        localName: "Kuda Laut",
        image: "/wildlife/species/06-seahorse.webp",
        habitat: "sea",
        slug: "seahorse",
    },
    {
        id: 7,
        name: "Stingless Jellyfish",
        localName: "Ubur-ubur tak menyengat",
        image: "/wildlife/species/07-stingless-jellyfish.webp",
        habitat: "sea",
        slug: "stingless-jellyfish",
    },

    // LAND WILDLIFE
    {
        id: 8,
        name: "Togian Monkey",
        localName: "Monyet Togean",
        image: "/wildlife/species/08-togian-monkey.webp",
        habitat: "land",
        slug: "togian-monkey",
    },
    {
        id: 9,
        name: "Togean Tarsier",
        localName: "Tarsius Togean",
        image: "/wildlife/species/09-togean-tarsier.webp",
        habitat: "land",
        slug: "togean-tarsier",
    },
    {
        id: 10,
        name: "Togian Babirusa",
        localName: "Babirusa Togean",
        image: "/wildlife/species/10-togian-babirusa.webp",
        habitat: "land",
        slug: "togian-babirusa",
    },
    {
        id: 11,
        name: "Knobbed Hornbill",
        localName: "Rangkong Sulawesi",
        image: "/wildlife/species/11-knobbed-hornbill.webp",
        habitat: "land",
        slug: "knobbed-hornbill",
    },
    {
        id: 12,
        name: "Togian Water Monitor",
        localName: "Biawak Togean",
        image: "/wildlife/species/12-togian-water-monitor.webp",
        habitat: "land",
        slug: "togian-water-monitor",
    },
    {
        id: 13,
        name: "Coconut Crab",
        localName: "Kepiting Kenari",
        image: "/wildlife/species/13-coconut-crab.webp",
        habitat: "land",
        slug: "coconut-crab",
    },
    {
        id: 14,
        name: "Burung Maleo",
        localName: "Maleo Senkawor",
        image: "/wildlife/species/14-burung-maleo.webp",
        habitat: "land",
        slug: "burung-maleo",
    },
    {
        id: 15,
        name: "Togian Boobook",
        localName: "Togian Hawk-owl / Ninox Togian",
        image: "/wildlife/species/15-togian-boobook.webp",
        habitat: "land",
        slug: "togian-boobook",
    },
];
