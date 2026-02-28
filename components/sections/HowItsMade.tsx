"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Milk, Clock, Heart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Sourced Locally",
        description:
            "We partner with family farms within 50 miles of our kitchens. Fresh cream, seasonal fruit, and organic ingredients arrive at our door daily — never frozen, never compromised.",
        icon: Milk,
        emoji: "🌾",
        color: "var(--tertiary)",
        image: "/images/local-sourcing.jpg",
    },
    {
        number: "02",
        title: "Crafted Slowly",
        description:
            "Our base steeps for a full 24 hours before churning. Each batch is hand-poured, hand-mixed, and made in small quantities. Good things, as they say, take time.",
        icon: Clock,
        emoji: "⏳",
        color: "var(--secondary)",
        image: "/images/crafting.jpg",
    },
    {
        number: "03",
        title: "Served With Love",
        description:
            "Every scoop is made to order, pressed gently into handmade waffle cones. We believe the last mile of the journey matters just as much as the first.",
        icon: Heart,
        emoji: "💕",
        color: "var(--primary)",
        image: "/images/served.jpg",
    },
];

export function HowItsMade() {
    return (
        <section
            id="story"
            style={{
                padding: "6rem 0",
                background: "var(--muted)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div className="container-main">
                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
                        Our Process
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
                        How the Magic Happens
                    </AnimatedHeading>
                </div>

                {/* Steps */}
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "2.5rem",
                                alignItems: "center",
                                marginBottom: index < steps.length - 1 ? "5rem" : 0,
                                position: "relative",
                            }}
                            className={`story-step story-step-${index}`}
                        >
                            {/* Large background number */}
                            <div
                                className="font-display"
                                style={{
                                    position: "absolute",
                                    fontSize: "clamp(8rem, 20vw, 16rem)",
                                    fontWeight: 900,
                                    opacity: 0.04,
                                    color: step.color,
                                    top: "-2rem",
                                    left: index % 2 === 0 ? "-2rem" : "auto",
                                    right: index % 2 !== 0 ? "-2rem" : "auto",
                                    lineHeight: 1,
                                    zIndex: 0,
                                    userSelect: "none",
                                }}
                            >
                                {step.number}
                            </div>

                            {/* Text Content */}
                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: "16px",
                                            background: `${step.color}15`,
                                            border: `2px solid ${step.color}30`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.5rem",
                                        }}
                                    >
                                        {step.emoji}
                                    </div>
                                    <span
                                        className="font-mono"
                                        style={{
                                            fontSize: "0.75rem",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            color: step.color,
                                        }}
                                    >
                                        Step {step.number}
                                    </span>
                                </div>

                                <h3
                                    className="font-heading"
                                    style={{
                                        fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                                        marginBottom: "1rem",
                                        color: "var(--foreground)",
                                    }}
                                >
                                    {step.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: "1.05rem",
                                        color: "var(--text-muted)",
                                        lineHeight: 1.8,
                                        maxWidth: "500px",
                                    }}
                                >
                                    {step.description}
                                </p>
                            </div>

                            {/* Real image */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    background: "var(--surface)",
                                    border: "2px solid var(--border)",
                                    minHeight: "250px",
                                    position: "relative",
                                }}
                            >
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: "250px",
                                        objectFit: "cover",
                                        display: "block",
                                    }}
                                />
                                {/* Gradient overlay with emoji badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `linear-gradient(to top, ${step.color}99 0%, transparent 60%)`,
                                    }}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: "1rem",
                                        right: "1rem",
                                        fontSize: "2.5rem",
                                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                                    }}
                                >
                                    {step.emoji}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Zig-zag responsive layout */}
            <style jsx global>{`
        @media (min-width: 768px) {
          .story-step {
            grid-template-columns: 1fr 1fr !important;
          }
          .story-step-1 {
            direction: rtl;
          }
          .story-step-1 > * {
            direction: ltr;
          }
        }
      `}</style>
        </section>
    );
}
