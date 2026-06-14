import { useEffect, useState } from "react";

const CLOUD_TYPES = ["cloud", "cloud_alert", "cloud_done"];

export const Background = () => {
    const [isDark, setIsDark] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );
    const [leaves, setLeaves] = useState([]);
    const [rainStreaks, setRainStreaks] = useState([]);
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isDark) {
            initRain();
            initClouds();
        } else {
            initLeaves();
        }

        const handleResize = () => {
            if (isDark) {
                initRain();
                initClouds();
            } else {
                initLeaves();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isDark]);

    const initLeaves = () => {
        const count = Math.max(
            12,
            Math.floor((window.innerWidth * window.innerHeight) / 22000)
        );
        const newLeaves = [];
        for (let i = 0; i < count; i++) {
            newLeaves.push({
                id: i,
                width: Math.random() * 11 + 7,
                x: Math.random() * 98,
                opacity: Math.random() * 0.35 + 0.3,
                duration: Math.random() * 14 + 10,
                delay: Math.random() * -24,
            });
        }
        setLeaves(newLeaves);
    };

    const initRain = () => {
        const count = Math.max(80, Math.floor(window.innerWidth / 13));
        const newRain = [];
        for (let i = 0; i < count; i++) {
            newRain.push({
                id: i,
                height: Math.random() * 26 + 14,
                x: Math.random() * 104,
                opacity: Math.random() * 0.35 + 0.25,
                duration: Math.random() * 0.6 + 0.5,
                delay: Math.random() * -3,
            });
        }
        setRainStreaks(newRain);
    };

    const initClouds = () => {
        const count = Math.max(4, Math.floor(window.innerWidth / 300));
        const newClouds = [];
        for (let i = 0; i < count; i++) {
            const baseX = (i / count) * 90;
            newClouds.push({
                id: i,
                type: CLOUD_TYPES[i % CLOUD_TYPES.length],
                size: Math.random() * 160 + 200,          
                x: baseX + (Math.random() * 10 - 5),
                y: Math.random() * 15,                    
                opacity: Math.random() * 0.18 + 0.14,    
                blur: Math.random() * 2 + 0.5,            
                duration: Math.random() * 8 + 5,        
                drift: (Math.random() * 35 + 15) * (i % 2 === 0 ? 1 : -1),
            });
        }
        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {isDark ? (
                <>
                    {clouds.map((c) => (
                        <img
                            key={c.id}
                            src={`${import.meta.env.BASE_URL}${c.type}.svg`}
                            alt=""
                            draggable={false}
                            className="cloud-shape"
                            style={{
                                width: c.size + "px",
                                height: c.size + "px",
                                left: c.x + "%",
                                top: c.y + "%",
                                opacity: c.opacity,
                                filter: `blur(${c.blur}px) brightness(1.4)`,
                                "--cloud-drift": c.drift + "px",
                                animationDuration: c.duration + "s",
                            }}
                        />
                    ))}
                    {rainStreaks.map((r) => (
                        <div
                            key={r.id}
                            className="rain-streak"
                            style={{
                                height: r.height + "px",
                                left: r.x + "%",
                                "--rain-opacity": r.opacity,
                                animationDuration: r.duration + "s",
                                animationDelay: r.delay + "s",
                            }}
                        />
                    ))}
                </>
            ) : (
                leaves.map((leaf) => (
                    <div
                        key={leaf.id}
                        className="leaf-particle"
                        style={{
                            width: leaf.width + "px",
                            height: leaf.width * 1.45 + "px",
                            left: leaf.x + "%",
                            "--leaf-opacity": leaf.opacity,
                            animationDuration: leaf.duration + "s",
                            animationDelay: leaf.delay + "s",
                        }}
                    />
                ))
            )}
        </div>
    );
};
