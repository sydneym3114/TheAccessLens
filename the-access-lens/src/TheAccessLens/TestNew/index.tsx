import { Link, useLocation } from "react-router-dom";
function TestLens() {

    return (
        <ul className="wd-course-nav-resp">

            <button><Link to="/test1">Test 1</Link></button>

            <button><Link to="/">Test Back</Link></button>
            
        </ul>
    );
}
export default TestLens;