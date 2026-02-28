"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check } from "lucide-react";

export function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section
            id="order"
            style={{
                padding: "6rem 0",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--primary)",
                    opacity: 0.06,
                    zIndex: 0,
                }}
            />

            {/* Decorative blobs */}
            <div
                className="animate-blob"
                style={{
                    position: "absolute",
                    top: "-20%",
                    left: "-10%",
                    width: "40vw",
                    height: "40vw",
                    background: "var(--primary)",
                    opacity: 0.06,
                    filter: "blur(80px)",
                    zIndex: 0,
                }}
            />
            <div
                className="animate-blob"
                style={{
                    position: "absolute",
                    bottom: "-20%",
                    right: "-10%",
                    width: "35vw",
                    height: "35vw",
                    background: "var(--secondary)",
                    opacity: 0.06,
                    filter: "blur(80px)",
                    zIndex: 0,
                    animationDelay: "3s",
                }}
            />

            <div
                className="container-main"
                style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    maxWidth: "640px",
                }}
            >
                {/* Emoji decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: "3rem", marginBottom: "1.5rem" }}
                >
                    🍦
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display"
                    style={{
                        fontSize: "clamp(2rem, 5vw, 3.5rem)",
                        fontWeight: 900,
                        fontStyle: "italic",
                        marginBottom: "1rem",
                    }}
                >
                    Get First Scoop on{" "}
                    <span style={{ color: "var(--primary)" }}>New Flavors</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    style={{
                        fontSize: "1.1rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        marginBottom: "2.5rem",
                    }}
                >
                    Join the loyalty club for exclusive drops, early access, and a{" "}
                    <strong style={{ color: "var(--foreground)" }}>
                        free scoop on your birthday
                    </strong>
                    .
                </motion.p>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        maxWidth: "480px",
                        margin: "0 auto 1.5rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="font-body"
                        style={{
                            flex: "1 1 250px",
                            padding: "1rem 1.5rem",
                            borderRadius: "100px",
                            border: "2px solid var(--border)",
                            background: "var(--surface)",
                            color: "var(--foreground)",
                            fontSize: "0.95rem",
                            outline: "none",
                        }}
                    />

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="font-mono"
                        style={{
                            padding: "1rem 2rem",
                            borderRadius: "100px",
                            background: isSubmitted ? "var(--tertiary)" : "var(--primary)",
                            color: "white",
                            border: "none",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            boxShadow: "0 8px 30px var(--glow-primary)",
                        }}
                    >
                        {isSubmitted ? (
                            <>
                                <Check size={18} /> Subscribed!
                            </>
                        ) : (
                            <>
                                <Send size={16} /> Subscribe
                            </>
                        )}
                    </motion.button>
                </motion.form>

                {/* Privacy note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="font-mono"
                    style={{
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.05em",
                    }}
                >
                    We respect your privacy. Unsubscribe at any time. No brain freeze, we
                    promise.
                </motion.p>
            </div>
        </section>
    );
}
