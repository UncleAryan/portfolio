import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
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
    </>
  )
}

export default App