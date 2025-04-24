import React, { useEffect, useRef } from 'react';
import useLayout from './Layout/useLayout';
import { useTypographyContext } from './typographySettings';
import { useLayoutContext } from './layoutSetting';
import { wait } from '@testing-library/user-event/dist/utils';
import { waitFor } from '@testing-library/dom';
import { Navigate, useNavigate } from 'react-router-dom';

const CongratsSection: React.FC = () => {
    const {
        columns,
        gutter,
        margin,
        padding,
        containerWidth,
      } = useLayoutContext();
      
      const {
        font,
        fontSize,
        headerFontSize,
        lineHeight,
        textAlign,
        headerTextAlign,
      } = useTypographyContext();

      const navigate = useNavigate(); // Call useNavigate at the top level of the component

  const handleResetJourney = () => {
    navigate('/TheJourney/reset'); // Use navigate inside the event handler
  };

    return (
        <>
        
            <div className='congrats' style={{padding: `${padding}px 0px`, marginBottom:'20px'}}>
                <h3
                    className="color-header"
                    style={{
                        fontFamily: font,
                        fontSize: `${headerFontSize}px`,
                        lineHeight: `${lineHeight}`,
                        textAlign: headerTextAlign,
                        padding: ` 0px ${padding}px`
                    }}
                >
                    Congratulations!!
                </h3>

                <div className="layout-preview" style={{
                    margin: `${margin}px auto`,
                    padding: ` 0px ${padding}px`,
                    columnGap: `${gutter}px`,
                    fontFamily: font,
                    fontSize: `${fontSize}px`,
                    lineHeight: `${lineHeight}`,
                    maxWidth: `${containerWidth}ch`,
                    textAlign: textAlign,
                    columnCount: columns,
                    // Text color for contrast
                }}>
                    <p >
                    You did it! You have completed the journey!<br/><br/>
                    Be extremely proud of yourself! This simplified version of designing text placements and styles can be a little frustrating due to its limitations. But remember, this is just a glimpse—by no means an exhaustive guide to everything you should consider when designing. This journey was meant to demonstrate how different design choices affect the overall look and accessibility of your site, while also providing insight into why these factors matter.<br/><br/>
                    Regardless of whether you love the final product or not, completing this journey shows your commitment to web design and making it more accessible for everyone. While this page primarily focused on color blindness, accessibility extends far beyond that. If you want to learn more about designing for people with dyslexia, ADHD, or other disabilities, visit the (TBD PAGE NAME) to explore real accounts from individuals sharing what helps and what hinders accessibility. This site is not an exhaustive resource, but we aim to amplify real experiences to help you design with inclusivity in mind.<br/><br/>
                    If you’d like to go through the journey again and experiment with different choices, just click the button at the bottom of the page to restart! 
                    </p>

                </div>
            </div>

            <button onClick={handleResetJourney} className="btn btn-reset" style={{fontFamily: `${font}`}}>
                Reset Journey
            </button>
            
        </>
    );
};

export default CongratsSection;