import { useEffect, useState } from "react";
import { Leaf, Moon } from "lucide-react";
import { cn } from '../lib/utils.js';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
    }, []);

    const toggle = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggle}
            className={cn(
                "fixed", "max-sm:hidden", "top-5", "right-5", "z-50",
                "h-8", "w-16", "rounded-full", "border", "border-border", "bg-card",
                "transition-colors", "duration-300", "focus:outline-hidden"
            )}
        >
            <span className="relative flex h-full w-full items-center justify-between px-2">
                <Leaf className="h-4 w-4 text-green-500" />
                <Moon className="h-4 w-4 text-slate-400" />
                <span
                    className={cn(
                        "absolute", "left-1", "top-1", "h-6", "w-6", "rounded-full",
                        "bg-primary", "shadow-sm", "transition-transform", "duration-300",
                        isDarkMode && "translate-x-8"
                    )}
                />
            </span>
        </button>
    );
};
