import React from 'react';
import { useTypographyContext } from '../typographySettings';

const TypographySection: React.FC = () => {
    const {
        font,
        fontSize,
        headerFontSize,
        lineHeight,
        lineLength,
        textAlign,
        headerTextAlign,
        handleFontChange,
        handleFontSizeChange,
        handleHeaderFontSizeChange,
        handleLineHeightChange,
        handleLineLengthChange,
        handleTextAlignChange,
        handleHeaderTextAlignChange
      } = useTypographyContext();

  

  return (
    <>
    
      <div>
        {/* Header with dynamic alignment */}
        <h3 className="typography-header" style={{ fontFamily: font, fontSize: `${headerFontSize}px`, textAlign: headerTextAlign }}>
          First things first: Typography
        </h3>

        {/* Text Content */}
        <div className="text-container" style={{ fontFamily: font, fontSize: `${fontSize}px`, lineHeight: `${lineHeight}`, textAlign, maxWidth: `${lineLength}ch` }}>

            <p>
            How do you communicate information? Through text and images.<br/><br/>
            If text is your primary method, ensuring readability is essential—after all, if your audience struggles to read it, they won’t engage with your message. Clear, legible typography is a cornerstone of effective communication.<br/><br/>
            Key factors that impact readability include typeface, font size, line height (leading), and line length. While many elements influence typography, these four play a significant role in how easily your text can be read.<br/><br/>
            Below, you can experiment with these settings in real-time using sample text. Once satisfied with your choices, you’ll see them applied in the layout section—don’t worry, you can always make adjustments later. Most changes, except for line length, will carry over to the next sections, ensuring a seamless and accessible design experience. You’ll have control over font style, font size, header size, line height, line length, and text alignment for both body text and headers.
            </p>
        </div>
      </div>

      

      {/* Typography Settings */}
      <div className="typography-settings">
        <div>
            <div>
              <label>Font Family</label>
              <select onChange={handleFontChange} value={font} style={{ fontFamily: `${font}`}} className='dropdown-purp'>
                <option value="Arial" style={{ fontFamily: 'Arial'}}>Arial</option>
                <option value="Bodoni Moda" style={{ fontFamily: 'Bodoni Moda'}}>Bodoni Moda</option>
                <option value="Calibri" style={{ fontFamily: 'Calibri'}}>Calibri</option>
                <option value="Cambria" style={{ fontFamily: 'Cambria'}}>Cambria</option>
                <option value="Caveat" style={{ fontFamily: 'Caveat'}}>Caveat</option>
                <option value="Chewy" style={{ fontFamily: 'Chewy'}}>Chewy</option>
                <option value="Comfortaa" style={{ fontFamily: 'Comfortaa'}}>Comfortaa</option>
                <option value="Comic Sans" style={{ fontFamily: 'Comic Sans'}}>Comic Sans</option>
                <option value="Cormorant Unicase" style={{ fontFamily: 'Cormorant Unicase'}}>Cormorant Unicase</option>
                <option value="Courier New" style={{ fontFamily: 'Courier New'}}>Courier New</option>
                <option value="Georgia" style={{ fontFamily: 'Georgia'}}>Georgia</option>
                <option value="Gravitas One" style={{ fontFamily: 'Gravitas One'}}>Gravitas One</option>
                <option value="Impact" style={{ fontFamily: 'Impact'}}>Impact</option>
                <option value="Indie Flower" style={{ fontFamily: 'Indie Flower'}}>Indie Flower</option>
                <option value="Libre Baskerville" style={{ fontFamily: 'Libre Baskerville'}}>Libre Baskerville</option>
                <option value="Lobster" style={{ fontFamily: 'Lobster'}}>Lobster</option>
                <option value="Merriweather" style={{ fontFamily: 'Merriweather'}}>Merriweather</option>
                <option value="Montserrat" style={{ fontFamily: 'Montserrat'}}>Montserrat</option>
                <option value="New Rocker" style={{ fontFamily: 'New Rocker'}}>New Rocker</option>
                <option value="Open Sans" style={{ fontFamily: 'Open Sans'}}>Open Sans</option>
                <option value="Orbitron" style={{ fontFamily: 'Orbitron'}}>Orbitron</option>
                <option value="Oswald" style={{ fontFamily: 'Oswald'}}>Oswald</option>
                <option value="Permanent Marker" style={{ fontFamily: 'Permanent Marker'}}>Permanent Marker</option>
                <option value="Philosopher" style={{ fontFamily: 'Philosopher'}}>Philosopher</option>
                <option value="Plaster" style={{ fontFamily: 'Plaster'}}>Plaster</option>
                <option value="Playfair Display" style={{ fontFamily: 'Playfair Display'}}>Playfair Display</option>
                <option value="Roboto" style={{ fontFamily: 'Roboto'}}>Roboto</option>
                <option value="Sacramento" style={{ fontFamily: 'Sacramento'}}>Sacramento</option>
                <option value="Source Code Pro" style={{ fontFamily: 'Source Code Pro'}}>Source Code Pro</option>
                <option value="Space Mono" style={{ fontFamily: 'Space Mono'}}>Space Mono</option>
                <option value="Tangerine" style={{ fontFamily: 'Tangerine'}}>Tangerine</option>
                <option value="Times New Roman" style={{ fontFamily: 'Times New Roman'}}>Times New Roman</option>
                <option value="Verdana" style={{ fontFamily: 'Verdana'}}>Verdana</option>
              </select>
            </div>

            <div>
              <label>Font Size: {fontSize} px</label>
              <input type="range" min="0" max="50" value={fontSize} onChange={handleFontSizeChange} className='form-range-purp'/>       
            </div>

            <div>
              <label>Header Font Size: {headerFontSize} px</label>
              <input type="range" min="16" max="72" value={headerFontSize} onChange={handleHeaderFontSizeChange} className='form-range-purp'/>
            </div>
        </div>

        <div>
          <div>
            <label>Line Height: {lineHeight}</label>
            <input type="range" min="1" max="3" step="0.1" value={lineHeight} onChange={handleLineHeightChange} className='form-range-purp'/>
          </div>

          <div>
            <label>Line Length: {lineLength} chs</label>
            <input type="range" min="40" max="140" value={lineLength} onChange={handleLineLengthChange} className='form-range-purp'/>
          </div>
        </div>
      
        <div>
          <div>
            <label>Text Alignment</label>
            <select onChange={handleTextAlignChange} value={textAlign} className='dropdown-purp'>
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>

          <div>
            <label>Header Alignment</label>
            <select onChange={handleHeaderTextAlignChange} value={headerTextAlign} className='dropdown-purp'>
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypographySection;