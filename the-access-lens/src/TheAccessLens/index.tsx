import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Navigation/test";
import TestLens from "./TestNew";

function TheAccessLens() {
    

    return (
        <div className="d-flex">
            <div className="d-none d-md-block">
                <Home/>
            </div>
            <div className="d-none d-md-block">
                <TestLens/>
            </div>
            
            

           <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="/test1" element={<Test/>} />
            </Routes>

            </div>
    );
}
export default TheAccessLens;