import { Briefcase, Code, User } from "lucide-react"
import { cn } from "../lib/utils"

export const AboutSection = () => {
    return <section id="#about" className={cn("py-24", "px-4", "relative")}>
        <div className={cn("container", "mx-auto", "max-w-5xl")}>
            <h2 className={cn("text-3xl", "md:text-4xl", "font-bold", "mb-12", "text-center")}>
                About <span className="text-primary"> Me</span>
            </h2>

            <div className={cn("grid", "grid-cols-1", "md:grid-cols-2", "gap-12", "items-center")}>
                <div className="space-y-6">
                    <h3 className={cn("text-2xl", "font-semibold")}>Aspiring Engineer & Researcher</h3>

                    <p className="text-muted-foreground">
                        Recieved/recieving formal education in the field of engineering 
                        via pursing a degree in Computer Science which covered not 
                        only the programming but the low-level hardware organization and 
                        architecture along with Physics courses in electronics.
                    </p>

                    <p className="text-muted-foreground">
                        Taking my theoretical knowledge from Computer Science and 
                        combining it with my practical on-site work experience as an IT Helpdesk 
                        worker at the moment to problem solve complex and difficult IT related issues. 
                        In the future, I plan to apply my skills in hardware and software to advance 
                        technological development as an engineer. 
                    </p>

                    <div className={cn("flex", "flex-col", "sm:flex-row", "gap-4", "pt-4", "justify-center")}>
                        <a href="#contact" className="custom-button">Contact Me</a>
                        <a href="" className="custom-button-contrast">Download CV</a>
                    </div>
                </div>

                <div className={cn("grid", "grid-cols-1", "gap-6")}>
                    <div className={cn("gradient-border", "p-6", "card-hover")}>
                       <div className={cn("flex", "items-start", "gap-4")}>
                            <div className={cn("p-3", "rounded-full", "bg-primary/10")}>
                                <Code className={cn("h-6", "w-6", "text-primary")}/>
                            </div>
                            <div className="text-left">
                                <h4 className={cn("font-semibold", "text-lg")}>Core Classes</h4>
                                <p className="text-muted-foreground">
                                    Computer Organization, Computer Architecture, 
                                    Data Structures, Algorithms, Cybersecurity, Operating Systems, 
                                    Programming Languages, and Software Engineering.
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className={cn("gradient-border", "p-6", "card-hover")}>
                       <div className={cn("flex", "items-start", "gap-4")}>
                            <div className={cn("p-3", "rounded-full", "bg-primary/10")}>
                                <User className={cn("h-6", "w-6", "text-primary")}/>
                            </div>
                            <div className="text-left">
                                <h4 className={cn("font-semibold", "text-lg")}>Supplemental Mathematics/Electives</h4>
                                <p className="text-muted-foreground">
                                    Calculus I-II, Discrete Math, Probability Theory, Linear Algebra, Artificial Intellignce,
                                    and Computer Graphics.
                                </p>
                            </div>
                       </div>
                    </div>
                    <div className={cn("gradient-border", "p-6", "card-hover")}>
                       <div className={cn("flex", "items-start", "gap-4")}>
                            <div className={cn("p-3", "rounded-full", "bg-primary/10")}>
                                <Briefcase className={cn("h-6", "w-6", "text-primary")}/>
                            </div>
                            <div className="text-left">
                                <h4 className={cn("font-semibold", "text-lg")}>Project Experience</h4>
                                <p className="text-muted-foreground">
                                    Developed software to assist in research. Other projects developed when 
                                    implementing a concept taught in classroom. For example, an autonomus Snake game 
                                    developed to implement A* pathfinding and heuristics.
                                </p>
                            </div>
                       </div>
                    </div>
                </div>    
            </div>
        </div>
    </section>
}