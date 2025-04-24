import React, { useState, useEffect } from 'react';
import { useTypographyContext } from '../typographySettings';
import ColorFilters from './colorFilters';
import { useLayoutContext } from '../layoutSetting';

type FilterType = 
  | 'Normal'
  | 'Protanopia'
  | 'Protanomaly'
  | 'Deuteranopia'
  | 'Deuteranomaly'
  | 'Tritanopia'
  | 'Tritanomaly'
  | 'Achromatopsia'
  | 'Achromatomaly';

const toggleColorBlindFilter = (enabled: boolean, filterType: FilterType) => {
  const root = document.documentElement;

  if (enabled) {
    // Applying color matrix to the whole document
    //root.style.filter = `url(#${filterType})`;
  } else {
    root.style.filter = 'none';
  }
};

const ColorTest: React.FC = () => {
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
  
  const [bgColor, setBgColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [secondaryTextColor, setSecondaryTextColor] = useState('#808080');
  const [primaryColor, setPrimaryColor] = useState('#785ef0');
  const [secondaryColor, setSecondaryColor] = useState('#BCAFF8');
  const [colorBlindType, setColorBlindType] = useState<FilterType>('Normal');

  const updateColor = (variable: string, value: string) => {
    document.documentElement.style.setProperty(variable, value);
  };

  useEffect(() => {
    toggleColorBlindFilter(true, colorBlindType);
  }, [colorBlindType]);

  return (
    <>
        <ColorFilters/>
      {/* SVG Filters for colorblindness */}
      <div style={{backgroundColor: bgColor, // Background color
        border: `3px solid ${primaryColor}`, // Border accent
        borderRadius: "8px",
        boxShadow: `5px 5px 15px ${secondaryColor}`, // Shadow effect for depth
        color: textColor,}}>
      <h3
    className="color-header"
    style={{
        fontFamily: font,
        fontSize: `${headerFontSize}px`,
        lineHeight: `${lineHeight}`,
        textAlign: headerTextAlign,
        color: textColor,
        marginTop: '20px', // Primary color for header,
        padding: ` 0px ${padding}px`
    }}
>
    Evoking Emotion: Color
</h3>

{/* Color Palette Section */}

    <div className="layout-preview" style={{
        margin: `${margin}px auto`,
        padding: `${padding}px`,
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
        How does color shape your website? Through cohesion, contrast, and accessibility.<br/><br/>
        A well-chosen color palette does more than make a site look good—it ties everything together, reinforcing brand identity and guiding user interaction. Primary colors establish the dominant look and feel, often used for backgrounds, navigation, and key elements. Secondary colors provide contrast and support, adding depth and visual interest.<br/><br/>
        When selecting colors, consider both aesthetics and functionality. High-contrast text ensures readability, especially on buttons and interactive elements, making key actions clear and accessible. It’s also essential to account for users with color vision deficiencies. Designing with sufficient contrast and alternative indicators ensures an inclusive experience for all.<br/><br/>
        Below, you can see your color palette in use and apply different filters to simulate how it appears to individuals with various types of color blindness. Experiment with these settings to create a palette that remains effective and visually cohesive for everyone.
        </p>

    </div>
    </div>
    <div style={{width: '100%'}}>
      {/* Color Inputs */}
      <h4
          className="color-header"
          style={{
            fontFamily: font,
            fontSize: `${headerFontSize-8}px`,
            lineHeight: `${lineHeight}`,
            textAlign: 'left',
            margin: '20px 20%',
          }}
        >
          Color Palette
        </h4>
        <div className='color-filter'>
        <div>
          <div>
          <label>Background</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => {
                setBgColor(e.target.value);
                updateColor('--bg-color', e.target.value);
              }}
            />
          </div>
          
          <div> 
          <label>Text</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => {
                setTextColor(e.target.value);
                updateColor('--text-color', e.target.value);
              }}
            />
            </div>
            <div>

            
          <label>Secondary Text</label>
            <input
              type="color"
              value={secondaryTextColor}
              onChange={(e) => {
                setSecondaryTextColor(e.target.value);
                updateColor('--secondary-text-color', e.target.value);
              }}
            />
            </div>
            <div>
          <label>Primary</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => {
                setPrimaryColor(e.target.value);
                updateColor('--primary-color', e.target.value);
              }}
            />
            </div>
            <div>
              
          <label>Secondary</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => {
                setSecondaryColor(e.target.value);
                updateColor('--secondary-color', e.target.value);
              }}
            />
            </div>
            
        </div>
        

      </div>

      {/* Color Blindness Section */}
      <div>
        <h4
          className="color-header"
          style={{
            fontFamily: font,
            fontSize: `${headerFontSize-8}px`,
            lineHeight: `${lineHeight}`,
            textAlign: 'left',
            margin: '20px 20%',
          }}
        >
          Color Blind Filters
        </h4>
        <div className='color-filter'>
        <div>
        <div>
          <label>Select Color Blind Type</label>
            <select
              value={colorBlindType}
              onChange={(e) => {
                setColorBlindType(e.target.value as FilterType);
              }}
              className='dropdown-purp'
            >
              <option value='Normal'>Normal</option>
              <option value='Protanopia'>Protanopia</option>
              <option value='Protanomaly'>Protanomaly</option>
              <option value='Deuteranopia'>Deuteranopia</option>
              <option value='Deuteranomaly'>Deuteranomaly</option>
              <option value='Tritanopia'>Tritanopia</option>
              <option value='Tritanomaly'>Tritanomaly</option>
              <option value='Achromatopsia'>Achromatopsia</option>
              <option value='Achromatomaly'>Achromatomaly</option>
            </select>
          
        </div>
        </div>
        </div>
        
        


        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: font , filter:`url(#${colorBlindType})`, width:'60%', margin:'20px auto'}} className='colorPaletteCard'>
          <div style={{ display: 'flex', margin: 'auto', width:'100%'}}>
            <div style={{ width: '30%', height: '100px', backgroundColor: bgColor, border: `2px solid ${textColor}`, borderRadius: '8px', marginRight:'5%'}}>
              <p style={{ color: textColor }}>Background Color</p>
            </div>
            <div style={{ width: '30%', height: '100px', backgroundColor: primaryColor, border: `2px solid ${textColor}`, borderRadius: '8px', marginRight:'5%' }}>
              <p style={{ color: textColor }}>Primary Color</p>
            </div>
            <div style={{ width: '30%', height: '100px', backgroundColor: secondaryColor, border: `2px solid ${textColor}`, borderRadius: '8px' }}>
              <p style={{ color: textColor }}>Secondary Color</p>
            </div>
          </div>
          <div style={{ display: 'flex', margin: 'auto', width:'100%'}}>
            <div style={{ width: '30%', height: '100px', backgroundColor: bgColor, border: `2px solid ${secondaryTextColor}`, borderRadius: '8px', marginRight:'5%'}}>
              <p style={{ color: secondaryTextColor }}>Background Color</p>
            </div>
            <div style={{ width: '30%', height: '100px', backgroundColor: primaryColor, border: `2px solid ${secondaryTextColor}`, borderRadius: '8px', marginRight:'5%' }}>
              <p style={{ color: secondaryTextColor }}>Primary Color</p>
            </div>
            <div style={{ width: '30%', height: '100px', backgroundColor: secondaryColor, border: `2px solid ${secondaryTextColor}`, borderRadius: '8px' }}>
              <p style={{ color: secondaryTextColor }}>Secondary Color</p>
            </div>
          </div>        
        </div>
      </div>
    </div>
        
    </>
  );
};

export default ColorTest;