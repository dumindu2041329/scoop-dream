"use client";

import { motion } from "framer-motion";
import { flavors } from "@/lib/data/flavors";
import { FlavorCard } from "@/components/ui/FlavorCard";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";

export function FeaturedFlavors() {
    return (
        <section
            id="flavors"
            style={{
                padding: "6rem 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background decoration */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.3,
                }}
                className="dot-pattern"
            />

            <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
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
                        Our Signatures
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
                        Flavors Worth Melting For
                    </AnimatedHeading>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            color: "var(--text-muted)",
                            maxWidth: "520px",
                            margin: "1.5rem auto 0",
                            fontSize: "1.05rem",
                        }}
                    >
                        Every scoop tells a story. These six are our most beloved chapters.
                    </motion.p>
                </div>

                {/* Flavors Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "2rem",
                    }}
                    className="flavors-grid"
                >
                    {flavors.map((flavor, index) => (
                        <FlavorCard key={flavor.id} flavor={flavor} index={index} />
                    ))}
                </div>
            </div>

            {/* Mobile horizontal scroll override */}
            <style jsx global>{`
        @media (max-width: 640px) {
          .flavors-grid {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            padding-bottom: 1rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .flavors-grid::-webkit-scrollbar {
            display: none;
          }
          .flavors-grid > * {
            scroll-snap-align: start;
            flex: 0 0 85vw !important;
          }
        }
      `}</style>
        </section>
    );
}
