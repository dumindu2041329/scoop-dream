"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedHeadingProps {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4";
    delay?: number;
    style?: React.CSSProperties;
}

export function AnimatedHeading({
    children,
    className = "",
    as: Tag = "h2",
    delay = 0,
    style = {},
}: AnimatedHeadingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const words = children.split(" ");

    return (
        <Tag ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0.3em", ...style }}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    style={{ display: "inline-block" }}
                >
                    {word}
                </motion.span>
            ))}
        </Tag>
    );
}
