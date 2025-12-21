import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      <div className={`portfolio ${isLoaded ? "render" : ""}`}>
        <Router> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<Home/>}/>
            <Route path="/skills" element={<Home/>}/>
            <Route path="/projects" element={<Home/>}/>
            <Route path="/contact" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
      <Toaster />
    </>
    
  )
}

export default App