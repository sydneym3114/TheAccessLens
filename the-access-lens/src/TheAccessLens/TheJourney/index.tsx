import './index.css';
import TypographySection from './Sections/Type';
import LayoutSection from './Sections/Layout';
import {  useState } from 'react';
import { TypographyProvider } from './Sections/typographySettings';
import { LayoutProvider } from './Sections/layoutSetting';
import ColorChanger from './Sections/Color';
import CongratsSection from './Sections/congrats';

const TheJourney: React.FC = () => {
  const [isLayoutVisible, setIsLayoutVisible] = useState(false);
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [isCongratsVisible, setIsCongratsVisible] = useState(false);

  const toggleLayoutVisibility = () => setIsLayoutVisible(true);
  const toggleColorVisibility = () => setIsColorVisible(true);
  const toggleCongratsVisibility = () => setIsCongratsVisible(true);

  return (
    <>
    <div className="container">
      <h2>Take the Journey!</h2>

      <button
        className="btn btn-pale-purple alert-container"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Start Your Exploration!
        <div className="collapse show" id="collapseExample">
          <div className="card card-body card-purp">
            <hr />
            Embark on a journey of designing with accessibility in mind, from start to finish. Explore key elements to consider in order to make your site as accessible as possible. For a deeper understanding of the main focuses—Dyslexia, Color Blindness, and ADHD/Neurodivergence—visit the simulations page for more insights.
          </div>
        </div>
      </button>
      
      <TypographyProvider>
        <LayoutProvider>
        <TypographySection />
          {/* Button to toggle the visibility of LayoutSection */}
          {!isLayoutVisible && (
            <button onClick={toggleLayoutVisibility} className="btn btn-purple">
              Next: The Layout
            </button>
          )}

          {/* Conditionally render LayoutSection based on state */}
          {isLayoutVisible && <LayoutSection />}

          {!isColorVisible && isLayoutVisible && (
            <button onClick={toggleColorVisibility} className="btn btn-purple">
              Finally: Color
            </button>
          )}

          {/* Conditionally render LayoutSection based on state */}
          {isColorVisible && <ColorChanger />}

          {isColorVisible && isLayoutVisible && !isCongratsVisible && (
            <button onClick={toggleCongratsVisibility} className="btn btn-purple">
              Congrats!!
            </button>
          )}

          {isCongratsVisible && <CongratsSection />}

          

        </LayoutProvider>
      </TypographyProvider>
    </div>
    </>
  );
};

export default TheJourney;