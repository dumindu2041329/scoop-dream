"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function ThemeTimeSync() {
    const { setTheme } = useTheme();
    const lastCalculatedTheme = useRef<string | null>(null);

    useEffect(() => {
        const syncThemeWithTime = () => {
            const hour = new Date().getHours();
            const expectedTheme = (hour >= 6 && hour < 18) ? "light" : "dark";

            if (lastCalculatedTheme.current === null) {
                // First run on mount
                const storedTheme = window.localStorage.getItem("theme");
                const isAuto = window.localStorage.getItem("theme-time-auto") === "true";

                if (!storedTheme || storedTheme === "system" || isAuto) {
                    setTheme(expectedTheme);
                    window.localStorage.setItem("theme-time-auto", "true");
                }
                lastCalculatedTheme.current = expectedTheme;
            } else if (lastCalculatedTheme.current !== expectedTheme) {
                // Time crossed the boundary
                setTheme(expectedTheme);
                window.localStorage.setItem("theme-time-auto", "true");
                lastCalculatedTheme.current = expectedTheme;
            }
        };

        // Sync on mount
        syncThemeWithTime();

        // Check time every minute
        const interval = setInterval(syncThemeWithTime, 60000);

        return () => clearInterval(interval);
    }, [setTheme]);

    return null;
}
