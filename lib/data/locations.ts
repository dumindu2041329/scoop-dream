export interface Location {
    id: string;
    name: string;
    neighborhood: string;
    address: string;
    city: string;
    phone: string;
    hours: {
        weekday: string;
        weekend: string;
    };
    openHour: number; // 24h format
    closeHour: number; // 24h format
    mapsUrl: string;
}

export const locations: Location[] = [
    {
        id: "downtown",
        name: "ScoopDream Downtown",
        neighborhood: "The Old Quarter",
        address: "142 Elm Street",
        city: "Portland, OR 97201",
        phone: "(503) 555-0147",
        hours: {
            weekday: "11:00 AM – 10:00 PM",
            weekend: "10:00 AM – 11:00 PM",
        },
        openHour: 11,
        closeHour: 22,
        mapsUrl: "https://maps.google.com",
    },
    {
        id: "pearl-district",
        name: "ScoopDream Pearl",
        neighborhood: "Pearl District",
        address: "823 NW Flanders St",
        city: "Portland, OR 97209",
        phone: "(503) 555-0283",
        hours: {
            weekday: "12:00 PM – 10:00 PM",
            weekend: "11:00 AM – 11:00 PM",
        },
        openHour: 12,
        closeHour: 22,
        mapsUrl: "https://maps.google.com",
    },
    {
        id: "hawthorne",
        name: "ScoopDream Hawthorne",
        neighborhood: "Hawthorne",
        address: "3456 SE Hawthorne Blvd",
        city: "Portland, OR 97214",
        phone: "(503) 555-0391",
        hours: {
            weekday: "11:00 AM – 9:00 PM",
            weekend: "10:00 AM – 10:00 PM",
        },
        openHour: 11,
        closeHour: 21,
        mapsUrl: "https://maps.google.com",
    },
];
