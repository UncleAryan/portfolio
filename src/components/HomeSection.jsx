import { ArrowDown } from "lucide-react"
import { cn } from "../lib/utils"

export const HomeSection = () => {
    return <section id="#home" 
                    className={cn("relative", "min-h-screen", "flex", "flex-col", "items-center", "justify-center", "px-4")}>
                <div className={cn("container", "max-w-4xl", "mx-auto", "text-center", "z-10")}>
                    <div className="space-y-6">
                        <h1 className={cn("text-4xl", "md:text-6xl", "mx-auto", "text-center", "z-10")}>
                            <span className={cn("opacity-0", "animate-fade-in-delay-1")}> Greetings, I am </span>
                            <span className={cn("text-primary", "opacity-0", "animate-fade-in-delay-2")}> Aryan</span>
                            <span className={cn("text-gradient", "ml-2", "opacity-0", "animate-fade-in-delay-2")}> Panchal</span>
                        </h1>

                        <p className={cn("text-lg", "md:text-xl", "text-muted-foreground", "max-2-2xl", "mx-auto", "opacity-0", "animate-fade-in-delay-4")}>
                            An aspiring engineer who has is enthusiastic about being at the forefront 
                            of modern technological revolution and drive innovation through applying
                            my strong foundation in engineering principles, along with in-depth understanding
                            of popular programming languages and their frameworks, data structures, and algorithms.
                        </p>

                        <div className={cn("opacity-0", "animate-fade-in-delay-5")}>
                            <a href="#projects" className="custom-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cn("absolute", "bottom-8", "left-1/2", "transform", "-translate-x-1/2", "flex", "flex-col", "items-center", "animate-bounce")}>
                    <span className={cn("text-sm", "text-muted-foreground", "mb-2")}> Scroll </span>
                    <ArrowDown className={cn("h-5", "w-5", "text-primary")}/>
                </div>
            </section>
}