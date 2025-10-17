import { ThemeToggle } from "../components/ThemeToggle";
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* Background Effects */}
        <Background/>

        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}
        <main>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </main>

        {/* Footer */}
    </div>;
};