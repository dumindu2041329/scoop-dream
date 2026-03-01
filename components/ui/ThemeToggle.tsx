"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="theme-toggle"
                aria-label="Toggle theme"
                style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid var(--border)",
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
            >
                <div style={{ width: 20, height: 20 }} />
            </button>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => {
                setTheme(isDark ? "light" : "dark");
                window.localStorage.removeItem("theme-time-auto");
            }}
            className="theme-toggle"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
            style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "2px solid var(--border)",
                background: "var(--surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={resolvedTheme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {isDark ? (
                        <Sun size={20} color="var(--secondary)" />
                    ) : (
                        <Moon size={20} color="var(--primary)" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
