import { ThemeToggle } from "../components/ThemeToggle";
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";

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
        </main>

        {/* Footer */}
    </div>;
};