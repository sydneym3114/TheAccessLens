import React, { useEffect, useRef } from 'react';
import useLayout from './useLayout';
import { useTypographyContext } from '../typographySettings';
import { useLayoutContext } from '../layoutSetting';

const LayoutSection: React.FC = () => {
    const {
        columns,
        gutter,
        margin,
        padding,
        containerWidth,
        handleColumnsChange,
        handleGutterChange,
        handleMarginChange,
        handlePaddingChange,
        handleContainerWidthChange,
    } = useLayoutContext();

    const {
        font,
        fontSize,
        headerFontSize,
        lineHeight,
        lineLength,
        textAlign,
        headerTextAlign,
      } = useTypographyContext();


console.log(lineLength);
console.log(containerWidth);

const initialLoad = useRef(true);

useEffect(() => {
    if (initialLoad.current) {
        if (lineLength && containerWidth !== lineLength) {
            handleContainerWidthChange({ target: { value: lineLength } });
            initialLoad.current = false;
        }
    }
}, [lineLength, containerWidth, handleContainerWidthChange]);

    return (
        <>
            <div>
                <h3
                    className="layout-header"
                    style={{
                        fontFamily: font, // Apply header font
                        fontSize: `${headerFontSize}px`, // Apply header font size
                        lineHeight: `${lineHeight}`, // Apply line height
                        textAlign: headerTextAlign, // Apply header text alignment
                    }}
                >
                    Structuring the Experience: Layout
                </h3>

                <div
                    className="layout-preview"
                    style={{
                        
                        margin: `${margin}px auto`,
                        padding: `${padding}px`,
                        columnGap: `${gutter}px`,
                        fontFamily: font, // Apply font to body
                        fontSize: `${fontSize}px`, // Apply font size to body text
                        lineHeight: `${lineHeight}`, // Apply line height to body
                        width: `${containerWidth}ch`,
                        textAlign: textAlign, // Apply text alignment to body
                        columnCount: columns, // Use column-count based on columns state
                    }}
                >
                    <p>
                    How do users engage with your content? Through layout, structure, and spacing.<br/><br/>
                    A well-designed layout isn’t just about aesthetics—it shapes how users navigate your site, absorb information, and interact with your content. A clear, intuitive structure enhances the user experience, while cluttered or inconsistent design can create confusion and frustration.<br/><br/>
                    Key elements like spacing, alignment, grid systems, and visual hierarchy work together to create clarity and balance. Thoughtful adjustments to columns, gutters, margins, padding, and container width improve both usability and accessibility, making content easier to read and interact with.<br/><br/>
                    Below, you’ll find tools to customize these layout elements in real time. Experiment with different settings to refine your design, optimize readability, and create a layout that’s both functional and visually cohesive. Once you’re satisfied with your text layout, you can move on to the final section on color. Just like in the first section, changes made here will carry over to the color section, but they won’t apply to previous sections—allowing you to see the process unfold and understand why each design choice matters.
                    </p>
                </div>
            </div>
            

            <div className="layout-controls">
                <div>
                    <div className="control-group">
                        <label>Columns</label>
                        <select value={columns} onChange={handleColumnsChange} className='dropdown-purp'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>

                    <div className="control-group form-range-purp">
                        <label>Gutter Size: {gutter} px</label>
                        <input
                            type="range"
                            min="0"
                            max="150"
                            value={gutter}
                            onChange={handleGutterChange}
                            step="1"
                        />
                    </div>
                </div>
                
                <div>
                    <div className="control-group form-range-purp">
                        <label>Margin: {margin} px</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={margin}
                            onChange={handleMarginChange}
                            step="5"
                        />
                    </div>

                    <div className="control-group form-range-purp">
                        <label>Padding: {padding} px</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={padding}
                            onChange={handlePaddingChange}
                            step="5"
                        />
                    </div>

                    <div className="control-group form-range-purp">
                        <label>Container Width: {containerWidth} chs</label>
                        <input
                            type="range"
                            min="40"
                            max="140"
                            value={containerWidth}
                            onChange={handleContainerWidthChange}
                            step="1"
                        />
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default LayoutSection;