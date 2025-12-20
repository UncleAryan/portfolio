import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed here
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <Router>  {/* Now using HashRouter */}
        <Routes>
          <Route path="/" element={<Home/>}/>  {/* Changed from index to path="/" */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App