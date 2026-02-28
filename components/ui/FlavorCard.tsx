"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Flavor } from "@/lib/data/flavors";

interface FlavorCardProps {
    flavor: Flavor;
    index: number;
}

export function FlavorCard({ flavor, index }: FlavorCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flavor-glow"
            style={{
                borderRadius: "24px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: isHovered
                    ? `0 20px 60px var(--shadow-lg), 0 0 30px ${flavor.color}33`
                    : "0 4px 20px var(--shadow-color)",
                minWidth: "280px",
                flex: "0 0 auto",
            }}
        >
            {/* Color Banner */}
            <div
                style={{
                    height: "200px",
                    background: `var(--surface)`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Real image */}
                <img
                    src={flavor.image}
                    alt={flavor.name}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                />
                {/* Gradient overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to top, ${flavor.color}cc 0%, transparent 60%)`,
                        zIndex: 1,
                    }}
                />
                {/* Emoji badge */}
                <motion.div
                    animate={{
                        scale: isHovered ? 1.15 : 1,
                        rotate: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                        position: "absolute",
                        bottom: "0.75rem",
                        right: "0.75rem",
                        fontSize: "2rem",
                        zIndex: 2,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    }}
                >
                    {flavor.emoji}
                </motion.div>
            </div>

            {/* Content */}
            <div style={{ padding: "1.5rem" }}>
                <h3
                    className="font-heading"
                    style={{
                        fontSize: "1.35rem",
                        marginBottom: "0.75rem",
                        color: "var(--foreground)",
                    }}
                >
                    {flavor.name}
                </h3>

                {/* Tasting Notes */}
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        marginBottom: "1rem",
                    }}
                >
                    {flavor.tastingNotes.map((note) => (
                        <span
                            key={note}
                            className="font-mono"
                            style={{
                                fontSize: "0.7rem",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "100px",
                                background: `${flavor.color}18`,
                                color: flavor.color,
                                border: `1px solid ${flavor.color}33`,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                fontWeight: 500,
                            }}
                        >
                            {note}
                        </span>
                    ))}
                </div>

                {/* Description (revealed on hover) */}
                <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isHovered ? "auto" : 0,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        overflow: "hidden",
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        marginBottom: isHovered ? "1rem" : 0,
                    }}
                >
                    {flavor.description}
                </motion.p>

                {/* Price & CTA */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span
                        className="font-display"
                        style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: "var(--foreground)",
                        }}
                    >
                        ${flavor.price.toFixed(2)}
                    </span>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: "0.5rem 1.25rem",
                            borderRadius: "100px",
                            background: isHovered ? "var(--primary)" : "transparent",
                            color: isHovered ? "white" : "var(--primary)",
                            border: `2px solid var(--primary)`,
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "inherit",
                        }}
                    >
                        Add to Cart
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
