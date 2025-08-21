import { useEffect, useState } from "react";
import { cn } from '../lib/utils.js';

export const Background = () => {
    const[stars, setStars] = useState([]);
    const[meteors, setMeteors] = useState([]);

    useEffect(() => {
        initStars();
        initMeteors();

        const handleResize = () => {
            initStars();
            initMeteors();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const initStars = () => {
        const numStars = Math.floor((window.innerWidth * window.innerHeight) / 10000); 
        const newStars = [];
        for(let i = 0; i < numStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };
    
    const initMeteors = () => {
        const numMeteors = 4; 
        const newMeteors = [];
        for(let i = 0; i < numMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 20,
                duration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };
    

    return <div className={cn("fixed", "inset-0", "overflow-hidden", "pointer-events-none", "z-0")}>

        {stars.map((star) => (
            <div key={star.id} 
            className={cn("star", "animate-pulse-subtle")}
            style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.duration + "s",
            }}/>
        ))}

        {meteors.map((meteor) => (
            <div key={meteor.id} 
            className={cn("meteor", "animate-meteor")} 
            style={{
                width: meteor.size * 40 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.duration + "s",
            }}/>
        ))}
        
    </div>;
};