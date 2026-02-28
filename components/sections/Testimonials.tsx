"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import { ScoopCounter } from "@/components/ui/ScoopCounter";
import { Star } from "lucide-react";

const stats = [
    { end: 47, suffix: "", label: "Flavors Available" },
    { end: 12, suffix: "K+", label: "Happy Customers" },
    { end: 3, suffix: "", label: "Locations" },
    { end: 1987, suffix: "", label: "Since" },
];

export function Testimonials() {
    // double the testimonials for infinite scroll
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section
            style={{
                padding: "6rem 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Stats Bar */}
            <div className="container-main" style={{ marginBottom: "4rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "1rem",
                        background: "var(--surface)",
                        borderRadius: "24px",
                        border: "2px solid var(--border)",
                        padding: "1rem",
                        boxShadow: "0 4px 30px var(--shadow-color)",
                    }}
                >
                    {stats.map((stat) => (
                        <ScoopCounter
                            key={stat.label}
                            end={stat.end}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>

            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                    Love Letters
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display"
                    style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 900,
                        fontStyle: "italic",
                    }}
                >
                    What Our Scoopers Say
                </motion.h2>
            </div>

            {/* Marquee */}
            <div
                style={{
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Fade edges */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100px",
                        height: "100%",
                        background: "linear-gradient(90deg, var(--background), transparent)",
                        zIndex: 2,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100px",
                        height: "100%",
                        background: "linear-gradient(270deg, var(--background), transparent)",
                        zIndex: 2,
                    }}
                />

                <div
                    className="animate-marquee"
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        width: "fit-content",
                    }}
                >
                    {doubledTestimonials.map((testimonial, index) => (
                        <div
                            key={`${testimonial.id}-${index}`}
                            style={{
                                flex: "0 0 380px",
                                background: "var(--surface)",
                                borderRadius: "20px",
                                padding: "2rem",
                                border: "2px solid var(--border)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Decorative accent */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "3px",
                                    background: testimonial.color,
                                }}
                            />

                            {/* Stars */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.25rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="var(--secondary)"
                                        color="var(--secondary)"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p
                                style={{
                                    fontSize: "0.95rem",
                                    color: "var(--foreground)",
                                    lineHeight: 1.7,
                                    marginBottom: "1.5rem",
                                    fontStyle: "italic",
                                }}
                            >
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <div
                                    style={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: "50%",
                                        background: testimonial.color,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                    }}
                                >
                                    {testimonial.initials}
                                </div>
                                <span
                                    className="font-mono"
                                    style={{
                                        fontSize: "0.8rem",
                                        color: "var(--text-muted)",
                                    }}
                                >
                                    {testimonial.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
