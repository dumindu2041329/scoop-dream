"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ScoopCounterProps {
    end: number;
    suffix?: string;
    label: string;
    duration?: number;
}

export function ScoopCounter({
    end,
    suffix = "",
    label,
    duration = 2,
}: ScoopCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isInView, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
                textAlign: "center",
                padding: "1.5rem",
            }}
        >
            <div
                className="font-display"
                style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 700,
                    color: "var(--primary)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                }}
            >
                {count}
                {suffix}
            </div>
            <div
                className="font-mono"
                style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                }}
            >
                {label}
            </div>
        </motion.div>
    );
}
