"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Clock, Sparkles } from "lucide-react";

const seasonalFlavors = [
    {
        name: "Lavender Honey Crème",
        description:
            "French lavender blooms steeped in raw wildflower honey, with a swirl of candied violet. A taste of Provence in every spoonful.",
        tastingNotes: ["Floral", "Sweet", "Elegant"],
        emoji: "💜",
        color: "#9B7ED8",
        image: "/images/lavender-honey.png",
    },
    {
        name: "Burnt Basque Cheesecake",
        description:
            "Inspired by San Sebastián's legendary cheesecake. Caramelized custard with a slight char, tangy cream cheese base, and graham cracker ribbon.",
        tastingNotes: ["Caramelized", "Tangy", "Decadent"],
        emoji: "🍰",
        color: "#D4A574",
        image: "/images/basque-cheesecake.jpg",
    },
];

function useCountdown(targetDays: number) {
    const [timeLeft, setTimeLeft] = useState({
        days: targetDays,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + targetDays);

        const timer = setInterval(() => {
            const now = new Date();
            const diff = endDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDays]);

    return timeLeft;
}

export function SeasonalMenu() {
    const countdown = useCountdown(21);

    return (
        <section
            id="seasonal"
            style={{
                padding: "6rem 0",
                background: "var(--muted)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Diagonal decorative stripe */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "-10%",
                    width: "120%",
                    height: "100%",
                    background: `linear-gradient(
            -3deg,
            transparent 0%,
            transparent 48%,
            var(--primary) 48%,
            var(--primary) 52%,
            transparent 52%,
            transparent 100%
          )`,
                    opacity: 0.04,
                    zIndex: 0,
                }}
            />

            <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.5rem 1.25rem",
                            borderRadius: "100px",
                            background: "var(--primary)",
                            color: "white",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.15em",
                            marginBottom: "1.5rem",
                        }}
                        className="font-mono"
                    >
                        <Sparkles size={14} />
                        Limited Edition
                    </motion.div>

                    <AnimatedHeading
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                            fontWeight: 900,
                            fontStyle: "italic",
                            justifyContent: "center",
                        }}
                    >
                        Seasonal Scoops
                    </AnimatedHeading>

                    {/* Countdown Timer */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            marginTop: "2rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { value: countdown.days, label: "Days" },
                            { value: countdown.hours, label: "Hours" },
                            { value: countdown.minutes, label: "Min" },
                            { value: countdown.seconds, label: "Sec" },
                        ].map((unit) => (
                            <div
                                key={unit.label}
                                style={{
                                    background: "var(--surface)",
                                    border: "2px solid var(--border)",
                                    borderRadius: "16px",
                                    padding: "1rem 1.5rem",
                                    textAlign: "center",
                                    minWidth: "80px",
                                }}
                            >
                                <div
                                    className="font-display"
                                    style={{
                                        fontSize: "1.8rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        lineHeight: 1,
                                    }}
                                >
                                    {String(unit.value).padStart(2, "0")}
                                </div>
                                <div
                                    className="font-mono"
                                    style={{
                                        fontSize: "0.65rem",
                                        color: "var(--text-muted)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        marginTop: "0.25rem",
                                    }}
                                >
                                    {unit.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Seasonal Flavor Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "2rem",
                        maxWidth: "800px",
                        margin: "0 auto",
                    }}
                >
                    {seasonalFlavors.map((flavor, index) => (
                        <motion.div
                            key={flavor.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            style={{
                                background: "var(--surface)",
                                borderRadius: "24px",
                                border: "2px solid var(--border)",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            {/* Ribbon */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "-35px",
                                    transform: "rotate(45deg)",
                                    background: flavor.color,
                                    color: "white",
                                    padding: "0.3rem 2.5rem",
                                    fontSize: "0.65rem",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    zIndex: 2,
                                }}
                                className="font-mono"
                            >
                                Limited
                            </div>

                            {/* Image Area */}
                            <div
                                style={{
                                    height: "200px",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={flavor.image}
                                    alt={flavor.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                                {/* Gradient overlay */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `linear-gradient(to top, ${flavor.color}cc 0%, transparent 60%)`,
                                    }}
                                />
                                {/* Emoji badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "0.75rem",
                                        right: "0.75rem",
                                        fontSize: "2rem",
                                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                                        zIndex: 1,
                                    }}
                                >
                                    {flavor.emoji}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ padding: "1.5rem" }}>
                                <h3
                                    className="font-heading"
                                    style={{
                                        fontSize: "1.4rem",
                                        marginBottom: "0.75rem",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    {flavor.name}
                                </h3>

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
                                                fontSize: "0.65rem",
                                                padding: "0.2rem 0.6rem",
                                                borderRadius: "100px",
                                                background: `${flavor.color}15`,
                                                color: flavor.color,
                                                border: `1px solid ${flavor.color}30`,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {note}
                                        </span>
                                    ))}
                                </div>

                                <p
                                    style={{
                                        fontSize: "0.9rem",
                                        color: "var(--text-muted)",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {flavor.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
