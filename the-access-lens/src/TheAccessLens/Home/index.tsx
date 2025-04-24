import { Link } from 'react-router-dom';
import './index.css';
import { Button } from 'react-bootstrap';

/**
 * 
 */
const Home = () => {
    return (
    <div className='container'>
      <div className='header'>
        <div>
          <h2>Welcome to <em>The Access Lens!</em></h2>
          <p>Discover and experiment with accessible web design. Explore specific disabilities, take a guided design journey, or visit the About page to learn more.</p>
        </div>
        
        <img src='/TAL_Logo.svg' alt='Logo'/>
      </div>
      
      <div className='homeDis'>
        <div className="container-fluid text-center">
          <div className="row simLink">
            <div className="col">
              <Link to='/UnderstandingAccessibility/ColorBlindness'>
                <img src='/color-blindness.jpg' alt='cb'/>
                <p><b>Color Blindness:</b><br/>Understand color perception differences and create accessible visuals.</p>
              </Link>
            </div>
            <div className="col">
              <Link to='/UnderstandingAccessibility/Dyslexia'>
                <img src='dyslexia.jpg' alt='dyslexia'/>
                <p><b>Dyslexia:</b><br/>Experience reading challenges and design for easier navigation.</p>
              </Link>
            </div>
            <div className="col">
              <Link to='/UnderstandingAccessibility/ADHDNeurodivergence'>
                <img src='adhd.png' alt='adhd'/>
                <p><b>ADHD/Neurodivergence:</b><br/>Recognize focus barriers and design with clarity and structure.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to="/TheJourney" className="btn btn-purple journeyBtn container">
        Take the Journey
      </Link>

    </div>
  );
};

export default Home;
