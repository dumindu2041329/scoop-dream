"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Instagram } from "lucide-react";

const footerLinks = {
    Flavors: [
        { label: "All Flavors", href: "#flavors" },
        { label: "Seasonal Specials", href: "#seasonal" },
        { label: "Sorbets", href: "#" },
        { label: "Build Your Own", href: "#" },
    ],
    Company: [
        { label: "Our Story", href: "#story" },
        { label: "Sustainability", href: "#" },
        { label: "Press Kit", href: "#" },
        { label: "Careers", href: "#" },
    ],
    Visit: [
        { label: "Locations", href: "#locations" },
        { label: "Catering", href: "#" },
        { label: "Events", href: "#" },
        { label: "Gift Cards", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Allergen Info", href: "#" },
        { label: "Accessibility", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer
            style={{
                background: "var(--muted)",
                borderTop: "1px solid var(--border)",
                paddingTop: "4rem",
                paddingBottom: "2rem",
            }}
        >
            <div className="container-main">
                {/* Top section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "3rem",
                        marginBottom: "3rem",
                    }}
                >
                    {/* Brand Column */}
                    <div>
                        <a
                            href="#"
                            className="font-display"
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 900,
                                fontStyle: "italic",
                                color: "var(--primary)",
                                textDecoration: "none",
                                display: "block",
                                marginBottom: "1rem",
                            }}
                        >
                            ScoopDream
                        </a>
                        <p
                            style={{
                                fontSize: "0.9rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.7,
                                marginBottom: "1.5rem",
                            }}
                        >
                            Handcrafted with local cream, seasonal fruit, and an unreasonable
                            amount of love.
                        </p>
                        {/* Social Icons */}
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                            {[
                                { label: "Instagram", icon: "instagram" },
                                { label: "TikTok", icon: "tiktok" },
                                { label: "Facebook", icon: "facebook" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href="#"
                                    aria-label={social.label}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        border: "1px solid var(--border)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--text-muted)",
                                        textDecoration: "none",
                                        fontSize: "0.85rem",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "var(--primary)";
                                        e.currentTarget.style.color = "white";
                                        e.currentTarget.style.borderColor = "var(--primary)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "var(--text-muted)";
                                        e.currentTarget.style.borderColor = "var(--border)";
                                    }}
                                >
                                    {social.icon === "instagram" ? "📷" : social.icon === "tiktok" ? "🎵" : "📘"}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4
                                className="font-mono"
                                style={{
                                    fontSize: "0.75rem",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.15em",
                                    color: "var(--foreground)",
                                    marginBottom: "1.25rem",
                                    fontWeight: 600,
                                }}
                            >
                                {category}
                            </h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {links.map((link) => (
                                    <li key={link.label} style={{ marginBottom: "0.75rem" }}>
                                        <a
                                            href={link.href}
                                            style={{
                                                color: "var(--text-muted)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                transition: "color 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = "var(--primary)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = "var(--text-muted)";
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="section-divider" style={{ marginBottom: "1.5rem" }} />

                {/* Bottom section */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p
                        className="font-mono"
                        style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                        }}
                    >
                        © {new Date().getFullYear()} ScoopDream. All rights reserved.
                    </p>
                    <ThemeToggle />
                </div>
            </div>
        </footer>
    );
}
