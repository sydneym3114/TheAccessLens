import "./index.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import Simulations from "./Sims";
import TheJourney from "./TheJourney";
import { useEffect } from "react";
import Dyslexia from "./Sims/Dyslexia";
import ADHD from "./Sims/ADHD";
import ColorBlindness from "./Sims/ColorBlindness";

function ScrollToTop() {
    const location = useLocation();
  
    useEffect(() => {
      // Reset scroll position to the top when the route changes
      window.scrollTo(0, 0);
    }, [location]);
  
    return null; // This component doesn't render anything
  }

function TheAccessLens() {
    

    return (
        <div className="d-flex flex-column talGlobal">
            <div className="navigation">
                <Navigation/>
            </div>
            
            <ScrollToTop/>
            
           <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/TheJourney" element={<TheJourney/>} />
                <Route path="/Simulation" element={<Simulations/>} />
                <Route path="/UnderstandingAccessibility/ColorBlindness" element={<ColorBlindness/>} />
                <Route path="/UnderstandingAccessibility/Dyslexia" element={<Dyslexia/>} />
                <Route path="/UnderstandingAccessibility/ADHDNeurodivergence" element={<ADHD/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/TheJourney/reset" element={<Navigate to="/TheJourney" />} />
            </Routes>
        </div>
    );
}
export default TheAccessLens;