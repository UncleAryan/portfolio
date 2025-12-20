import { ArrowRight, Github } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL || '/';

const projects = [
    {
        id: 1,
        title: "Homie Hand",
        description: "A 2D game engine made entirely in Java from scratch with custom hand-drawn spritesheets.",
        image: `${BASE_URL}project_screenshots/homiehand_gameplay.png`,
        tags: ["Java", "Object-Oriented Programming", "Game Loop", "Entity Management", "Input Handling", "Sprite Animation", "Scene Management", "Collision Detection System"],
        github_url: "https://github.com/UncleAryan/HomieHand"
    },
    {
        id: 2,
        title: "Custom 3D Rendering Pipeline with Unity",
        description: "A custom-built 3D rendering pipeline implemented from scratch in Unity3D, demonstrating fundamental computer graphics concepts including matrix transformations, projection, and rasterization using only basic OpenGL line drawing.",
        image: `${BASE_URL}project_screenshots/custom_3d_rendering_pipeline_example.png`,
        tags: ["C#", "Unity Game Engine", "Linear Algebra", "Agile Methodologies", "Version Control"],
        github_url: "https://github.com/UncleAryan/custom-3d-rendering-pipeline"
    },
    {
        id: 3,
        title: "Autonomous Snake Game",
        description: "Classic Snake game that plays itself using implementation of A* pathfinding to calculate shortest path to food while dynamically avoiding collisions in real time.",
        image: `${BASE_URL}project_screenshots/snake_ai_example.png`,
        tags: ["C#", "Unity Game Engine", "Advanced Data Structures", "Artifical Intelligence through Heuristics"],
        github_url: "https://github.com/UncleAryan/Snake-AI"
    }
];

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:txt-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
            </div>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here you will find some of the projects I have worked on where I implemented
                my classroom learning into practical programming. These projects are updated 
                upon user request to improve user experience.  
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map( (project, key) => (
                    <div key={key}
                         className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        
                        <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                        </h3>

                        <div className="h-90 w-full overflow-hidden">
                            <img src={project.image} 
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <p className="text-muted-foreground text-sm mb-4">
                            {project.description}
                        </p>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map( (tag, key) => (
                                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.github_url}
                                       target="_blank"
                                       className="text-foregorund/80 hover:text-primary transition-colors duration-300">
                                        <Github size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/UncleAryan"
                   target="_blank"
                   className="custom-button w-fit flex items-center mx-auto gap-2">
                    My GitHub <ArrowRight size={18} />
                </a>
            </div>
        </section>
    );
};