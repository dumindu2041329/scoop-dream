"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { href: "#flavors", label: "Flavors" },
    { href: "#story", label: "Story" },
    { href: "#locations", label: "Find Us" },
    { href: "#seasonal", label: "Seasonal" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileOpen]);

    return (
        <>
            <nav
                className="glass"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
                    transition: "border-color 0.3s ease, background-color 0.3s ease",
                }}
            >
                <div
                    className="container-main"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-display"
                        style={{
                            fontSize: "1.7rem",
                            fontWeight: 900,
                            fontStyle: "italic",
                            color: "var(--primary)",
                            textDecoration: "none",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        ScoopDream
                    </a>

                    {/* Desktop Nav Links */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2.5rem",
                        }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-mono"
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--foreground)",
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    opacity: 0.8,
                                    transition: "opacity 0.2s ease, color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    e.currentTarget.style.color = "var(--primary)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "0.8";
                                    e.currentTarget.style.color = "var(--foreground)";
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <ThemeToggle />

                        {/* Order Now CTA — desktop */}
                        <motion.a
                            href="#order"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="desktop-nav font-mono"
                            style={{
                                padding: "0.6rem 1.5rem",
                                borderRadius: "100px",
                                background: "var(--primary)",
                                color: "white",
                                textDecoration: "none",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Order Now
                        </motion.a>

                        {/* Mobile Hamburger */}
                        <button
                            className="mobile-nav"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            aria-label="Toggle navigation menu"
                            style={{
                                display: "none",
                                background: "none",
                                border: "none",
                                color: "var(--foreground)",
                                cursor: "pointer",
                                padding: "0.5rem",
                            }}
                        >
                            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 999,
                            background: "var(--background)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "2rem",
                        }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.08 }}
                                onClick={() => setIsMobileOpen(false)}
                                className="font-display"
                                style={{
                                    fontSize: "2rem",
                                    fontWeight: 700,
                                    color: "var(--foreground)",
                                    textDecoration: "none",
                                }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#order"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="font-mono"
                            style={{
                                marginTop: "1rem",
                                padding: "1rem 2.5rem",
                                borderRadius: "100px",
                                background: "var(--primary)",
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                            }}
                        >
                            Order Now
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive CSS */}
            <style jsx global>{`
        .desktop-nav {
          display: flex !important;
        }
        .mobile-nav {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
