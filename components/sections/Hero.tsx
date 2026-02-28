"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const heroWords = "Scoops That Make Time Stand Still".split(" ");

const floatingElements = [
    { emoji: "🍒", top: "15%", left: "70%", size: "2.5rem", delay: 0 },
    { emoji: "🍪", top: "25%", right: "5%", size: "2rem", delay: 1 },
    { emoji: "✨", top: "60%", right: "10%", size: "1.8rem", delay: 0.5 },
    { emoji: "🍫", bottom: "20%", right: "15%", size: "2.2rem", delay: 1.5 },
    { emoji: "🌿", top: "70%", left: "65%", size: "2rem", delay: 2 },
];

export function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(80).fill(null));
    const [currentFrame, setCurrentFrame] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let animationFrameId: number;
        let lastPaintTime = 0;
        const fps = 24;
        const frameInterval = 1000 / fps;

        const loadImages = async () => {
            const loadFrame = (index: number): Promise<HTMLImageElement> => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = `/Image Sequence/A_lot_of_rich_creamy_chocolate_ice_cream_is_being__9c44cf5f93_${index
                        .toString()
                        .padStart(3, "0")}.jpg`;
                    img.onload = () => {
                        imagesRef.current[index] = img;
                        resolve(img);
                    };
                    img.onerror = reject;
                });
            };

            try {
                // 1. Immediately load frame 0 to show something on screen
                const firstFrame = await loadFrame(0);
                if (canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        ctx.drawImage(firstFrame, 0, 0, canvasRef.current.width, canvasRef.current.height);
                    }
                }
                setIsLoaded(true);

                // 2. Load next 15 frames simultaneously (buffer)
                await Promise.all(
                    Array.from({ length: 15 }, (_, i) => loadFrame(i + 1))
                );

                // 3. Stagger load the rest of the sequence in groups of 5
                for (let i = 16; i < 80; i += 5) {
                    const batch = [];
                    for (let j = 0; j < 5 && i + j < 80; j++) {
                        batch.push(loadFrame(i + j));
                    }
                    await Promise.all(batch);
                }
            } catch (error) {
                console.error("Error loading image sequence", error);
            }
        };

        loadImages();

        const renderLoop = (time: number) => {
            if (time - lastPaintTime >= frameInterval) {
                setCurrentFrame((prev) => {
                    const nextFrame = (prev + 1) % 80;

                    // Only advance if the next frame's image has actually finished downloading
                    if (imagesRef.current[nextFrame]) {
                        if (canvasRef.current) {
                            const ctx = canvasRef.current.getContext("2d");
                            if (ctx && imagesRef.current[nextFrame]) {
                                // Draw the next frame onto the canvas
                                ctx.drawImage(
                                    imagesRef.current[nextFrame]!,
                                    0,
                                    0,
                                    canvasRef.current.width,
                                    canvasRef.current.height
                                );
                            }
                        }
                        lastPaintTime = time;
                        return nextFrame;
                    }

                    // Pause on current frame and wait if buffer is empty
                    return prev;
                });
            }
            animationFrameId = requestAnimationFrame(renderLoop);
        };

        animationFrameId = requestAnimationFrame(renderLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section
            ref={containerRef}
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                paddingTop: "72px",
            }}
        >
            {/* Background decorative elements */}
            <div
                className="animate-blob"
                style={{
                    position: "absolute",
                    top: "-10%",
                    right: "-10%",
                    width: "50vw",
                    height: "50vw",
                    background: "var(--primary)",
                    opacity: 0.04,
                    filter: "blur(80px)",
                    zIndex: 0,
                }}
            />
            <div
                className="animate-blob"
                style={{
                    position: "absolute",
                    bottom: "-20%",
                    left: "-15%",
                    width: "40vw",
                    height: "40vw",
                    background: "var(--secondary)",
                    opacity: 0.04,
                    filter: "blur(80px)",
                    zIndex: 0,
                    animationDelay: "3s",
                }}
            />

            <motion.div
                style={{ y, opacity }}
                className="container-main"
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "3rem",
                        alignItems: "center",
                    }}
                    className="hero-grid"
                >
                    {/* Left Content */}
                    <div style={{ position: "relative", zIndex: 2 }}>
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-mono"
                            style={{
                                fontSize: "0.8rem",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                color: "var(--primary)",
                                marginBottom: "1.5rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <span
                                style={{
                                    width: "28px",
                                    height: "2px",
                                    background: "var(--primary)",
                                    display: "inline-block",
                                }}
                            />
                            Since 1987
                        </motion.div>

                        {/* Hero Headline */}
                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                                fontWeight: 900,
                                fontStyle: "italic",
                                lineHeight: 1.05,
                                marginBottom: "1.5rem",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0 0.3em",
                            }}
                        >
                            {heroWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.4 + index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                    style={{
                                        display: "inline-block",
                                        color:
                                            word === "Time" || word === "Stand" || word === "Still"
                                                ? "var(--primary)"
                                                : "var(--foreground)",
                                    }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            style={{
                                fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                                color: "var(--text-muted)",
                                maxWidth: "540px",
                                lineHeight: 1.8,
                                marginBottom: "2.5rem",
                            }}
                        >
                            Handcrafted with local cream, seasonal fruit, and an unreasonable
                            amount of love.{" "}
                            <span style={{ color: "var(--primary)", fontWeight: 600 }}>
                                47 flavors.
                            </span>{" "}
                            Zero shortcuts.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                        >
                            <motion.a
                                href="#order"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-mono"
                                style={{
                                    padding: "1rem 2.5rem",
                                    borderRadius: "100px",
                                    background: "var(--primary)",
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    boxShadow: "0 8px 30px var(--glow-primary)",
                                    border: "none",
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                🍦 Order Now
                            </motion.a>

                            <motion.a
                                href="#flavors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="font-mono"
                                style={{
                                    padding: "1rem 2.5rem",
                                    borderRadius: "100px",
                                    background: "transparent",
                                    color: "var(--foreground)",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    border: "2px solid var(--border)",
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                }}
                            >
                                See All Flavors
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right — Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "400px",
                        }}
                    >
                        {/* Central sequence visual */}
                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                                width: "clamp(250px, 40vw, 500px)",
                                aspectRatio: "1/1",
                                borderRadius: "30px",
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                background: "var(--surface)", // fallback while loading
                            }}
                        >
                            <canvas
                                ref={canvasRef}
                                width={800} // Actual image sequence resolution
                                height={800}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    opacity: isLoaded ? 1 : 0,
                                    transition: "opacity 0.5s ease-in-out",
                                }}
                            />
                        </div>

                        {/* Glow behind */}
                        <div
                            className="animate-blob"
                            style={{
                                position: "absolute",
                                width: "60%",
                                height: "60%",
                                background: "var(--primary)",
                                opacity: 0.08,
                                filter: "blur(60px)",
                                zIndex: 1,
                            }}
                        />

                        {/* Floating decorative elements */}
                        {floatingElements.map((el, i) => (
                            <motion.div
                                key={i}
                                className={i % 2 === 0 ? "animate-float" : "animate-float-delayed"}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1.0 + el.delay * 0.3 }}
                                style={{
                                    position: "absolute",
                                    top: el.top,
                                    left: el.left,
                                    right: el.right,
                                    bottom: el.bottom,
                                    fontSize: el.size,
                                    zIndex: 3,
                                    animationDelay: `${el.delay}s`,
                                }}
                            >
                                {el.emoji}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="animate-scroll-indicator"
                style={{
                    position: "absolute",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--text-muted)",
                }}
            >
                <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>
                    SCROLL
                </span>
                <ChevronDown size={20} />
            </motion.div>

            {/* Hero Grid responsive */}
            <style jsx global>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 3fr 2fr !important;
          }
        }
      `}</style>
        </section>
    );
}
