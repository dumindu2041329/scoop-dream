"use client";

import { motion } from "framer-motion";
import { locations } from "@/lib/data/locations";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

function isStoreOpen(openHour: number, closeHour: number): boolean {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= openHour && currentHour < closeHour;
}

export function FindAScoop() {
    return (
        <section
            id="locations"
            style={{
                padding: "6rem 0",
                position: "relative",
            }}
        >
            <div className="container-main">
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono"
                        style={{
                            fontSize: "0.8rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: "var(--primary)",
                            display: "block",
                            marginBottom: "1rem",
                        }}
                    >
                        Visit Us
                    </motion.span>

                    <AnimatedHeading
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                            fontWeight: 900,
                            fontStyle: "italic",
                            justifyContent: "center",
                        }}
                    >
                        Find a Scoop Near You
                    </AnimatedHeading>
                </div>

                {/* Location Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {locations.map((location, index) => {
                        const isOpen = isStoreOpen(location.openHour, location.closeHour);

                        return (
                            <motion.div
                                key={location.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: "var(--surface)",
                                    borderRadius: "24px",
                                    border: "2px solid var(--border)",
                                    padding: "2rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 20px var(--shadow-color)",
                                }}
                            >
                                {/* Decorative map pin illustration */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "-10px",
                                        right: "-10px",
                                        opacity: 0.05,
                                        fontSize: "8rem",
                                        lineHeight: 1,
                                        transform: "rotate(15deg)",
                                        userSelect: "none",
                                    }}
                                >
                                    📍
                                </div>

                                {/* Open/Closed Badge */}
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.3rem 0.8rem",
                                        borderRadius: "100px",
                                        background: isOpen ? "rgba(126, 200, 164, 0.15)" : "rgba(232, 64, 107, 0.15)",
                                        color: isOpen ? "var(--tertiary)" : "var(--primary)",
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        marginBottom: "1.25rem",
                                    }}
                                    className="font-mono"
                                >
                                    <div
                                        style={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: "50%",
                                            background: isOpen ? "var(--tertiary)" : "var(--primary)",
                                        }}
                                    />
                                    {isOpen ? "Open Now" : "Closed"}
                                </div>

                                {/* Neighborhood */}
                                <h3
                                    className="font-heading"
                                    style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "1.25rem",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    {location.neighborhood}
                                </h3>

                                {/* Details */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                                        <MapPin size={18} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
                                        <div>
                                            <div style={{ fontSize: "0.9rem", color: "var(--foreground)" }}>
                                                {location.address}
                                            </div>
                                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                {location.city}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <Clock size={18} style={{ color: "var(--secondary)", flexShrink: 0 }} />
                                        <div>
                                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                Mon–Fri: {location.hours.weekday}
                                            </div>
                                            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                Sat–Sun: {location.hours.weekend}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <Phone size={18} style={{ color: "var(--tertiary)", flexShrink: 0 }} />
                                        <span style={{ fontSize: "0.9rem", color: "var(--foreground)" }}>
                                            {location.phone}
                                        </span>
                                    </div>
                                </div>

                                {/* Map Link */}
                                <a
                                    href={location.mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginTop: "1.5rem",
                                        fontSize: "0.8rem",
                                        color: "var(--primary)",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.08em",
                                    }}
                                >
                                    Get Directions <ExternalLink size={14} />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
