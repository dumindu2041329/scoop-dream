export interface Flavor {
    id: string;
    name: string;
    description: string;
    tastingNotes: string[];
    price: number;
    color: string;
    colorDark: string;
    bgGradient: string;
    bgGradientDark: string;
    emoji: string;
    image: string;
}

export const flavors: Flavor[] = [
    {
        id: "tahitian-vanilla",
        name: "Tahitian Vanilla Bean",
        description:
            "Pure Madagascar vanilla beans steeped into our signature cream base for 24 hours. Floral, aromatic, timeless.",
        tastingNotes: ["Classic", "Floral", "Pure"],
        price: 6.5,
        color: "#F5E6C8",
        colorDark: "#D4C5A8",
        bgGradient: "linear-gradient(135deg, #FFF8E7, #F5E6C8)",
        bgGradientDark: "linear-gradient(135deg, #2A2520, #3D352A)",
        emoji: "🍦",
        image: "/images/vanilla-bean.jpg",
    },
    {
        id: "salted-caramel",
        name: "Salted Caramel Pretzel",
        description:
            "House-made caramel swirled with Maldon sea salt and crushed artisan pretzel pieces for the perfect sweet-salty crunch.",
        tastingNotes: ["Sweet", "Salty", "Crunchy"],
        price: 7.0,
        color: "#D4A574",
        colorDark: "#B8895E",
        bgGradient: "linear-gradient(135deg, #F5DEB3, #D4A574)",
        bgGradientDark: "linear-gradient(135deg, #2D2318, #3D2E1F)",
        emoji: "🍮",
        image: "/images/salted-caramel.jpg",
    },
    {
        id: "mango-cardamom",
        name: "Mango Cardamom",
        description:
            "Alphonso mangoes meet toasted green cardamom in this exotic fusion, finished with a golden saffron thread swirl.",
        tastingNotes: ["Tropical", "Warm", "Exotic"],
        price: 7.5,
        color: "#FFB347",
        colorDark: "#E09830",
        bgGradient: "linear-gradient(135deg, #FFE0A5, #FFB347)",
        bgGradientDark: "linear-gradient(135deg, #2D2515, #3D3118)",
        emoji: "🥭",
        image: "/images/mango-cardamom.jpg",
    },
    {
        id: "dark-chocolate",
        name: "Dark Chocolate Truffle",
        description:
            "Single-origin 72% cacao from Ghana, hand-tempered into a dense, velvety truffle base. For the true chocolate devotee.",
        tastingNotes: ["Intense", "Velvety", "Rich"],
        price: 7.5,
        color: "#4A2C2A",
        colorDark: "#6B4540",
        bgGradient: "linear-gradient(135deg, #8B6F6E, #4A2C2A)",
        bgGradientDark: "linear-gradient(135deg, #1E1515, #2D1E1C)",
        emoji: "🍫",
        image: "/images/dark-chocolate.jpg",
    },
    {
        id: "strawberry-basil",
        name: "Strawberry Basil Sorbet",
        description:
            "Sun-ripened strawberries balanced with fresh Thai basil — dairy-free, light, and impossibly refreshing.",
        tastingNotes: ["Fresh", "Herbaceous", "Light"],
        price: 6.5,
        color: "#E8406B",
        colorDark: "#FF6B9D",
        bgGradient: "linear-gradient(135deg, #FFB3C6, #E8406B)",
        bgGradientDark: "linear-gradient(135deg, #2D1520, #3D1C2A)",
        emoji: "🍓",
        image: "/images/strawberry-sorbet.jpg",
    },
    {
        id: "brown-butter-pecan",
        name: "Brown Butter Pecan",
        description:
            "Slowly browned French butter folded with candied Georgia pecans. Warm, nutty, and completely irresistible.",
        tastingNotes: ["Nutty", "Caramel", "Warm"],
        price: 7.0,
        color: "#A0785A",
        colorDark: "#C8986A",
        bgGradient: "linear-gradient(135deg, #D4B896, #A0785A)",
        bgGradientDark: "linear-gradient(135deg, #251E17, #352A1F)",
        emoji: "🥜",
        image: "/images/brown-butter-pecan.jpg",
    },
];
