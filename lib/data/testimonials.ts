export interface Testimonial {
    id: number;
    name: string;
    quote: string;
    rating: number;
    initials: string;
    color: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Elena M.",
        quote: "The Tahitian Vanilla is like nothing I've ever tasted. Pure, complex, and absolutely dreamy.",
        rating: 5,
        initials: "EM",
        color: "#E8406B",
    },
    {
        id: 2,
        name: "Marcus T.",
        quote: "Salted Caramel Pretzel is dangerous — I've gone through three pints this week alone.",
        rating: 5,
        initials: "MT",
        color: "#FFB347",
    },
    {
        id: 3,
        name: "Sophie L.",
        quote: "Finally, a sorbet that doesn't compromise on flavor! Strawberry Basil is divine.",
        rating: 5,
        initials: "SL",
        color: "#7EC8A4",
    },
    {
        id: 4,
        name: "James K.",
        quote: "My kids ask to go to ScoopDream every single weekend. I don't blame them one bit.",
        rating: 5,
        initials: "JK",
        color: "#9B7ED8",
    },
    {
        id: 5,
        name: "Aria N.",
        quote: "The Dark Chocolate Truffle is a masterpiece. It's like eating a fine Belgian truffle in ice cream form.",
        rating: 5,
        initials: "AN",
        color: "#E8406B",
    },
    {
        id: 6,
        name: "David R.",
        quote: "I drove 45 minutes for the Mango Cardamom and it was absolutely worth every mile.",
        rating: 5,
        initials: "DR",
        color: "#FFB347",
    },
    {
        id: 7,
        name: "Priya S.",
        quote: "The attention to quality here is unreal. You can taste the difference real ingredients make.",
        rating: 5,
        initials: "PS",
        color: "#7EC8A4",
    },
    {
        id: 8,
        name: "Oliver W.",
        quote: "Brown Butter Pecan on a waffle cone — that's my definition of a perfect afternoon.",
        rating: 5,
        initials: "OW",
        color: "#D4A574",
    },
];
