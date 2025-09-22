import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML", level: 95, category: "frontend"},
    {name: "Vanilla CSS", level: 95, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 70, category: "frontend"},
    {name: "Tailwind CSS", level: 90, category: "frontend"},
    {name: "Next.js", level: 0, category: "frontend"},

    {name: "Node.js", level: 70, category: "backend"},
    {name: "Express", level: 0, category: "backend"},
    {name: "MongoDB", level: 20, category: "backend"},
    {name: "PostgreSQL", level: 0, category: "backend"},
    {name: "GraphQL", level: 0, category: "backend"},

    {name: "Git/GitHub", level: 92, category: "tools"},
    {name: "Docker", level: 20, category: "tools"},
    {name: "VS Code", level: 98, category: "tools"}
];

const category = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className={cn("py-24", "px-4", "relative", "bg-secondary/30")}>
            <div className={cn("container", "mx-auto", "max-w-5xl")}>
                <h2 className={cn("text-3xl", "md:text-4xl", "font-bold", "mb-12", "text-center")}>
                    My <span className={cn("text-primary")}>Skills</span>
                </h2>

                
            </div>
        </section>
    );
};

