import ColorFilters from '../../TheJourney/Sections/Color/colorFilters';
import '../index.css';
import { JSX, useState } from "react";

const divs: Record<string, JSX.Element> = {
    AnomalousTrichromatism: (
        <div className='filterSection1'>
            <div className='original'>
                <h6>No Filter</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                    </div>
                </div>
            <div className='protanomaly'>
                <h6>Protanomaly</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
            <div className='deuteranomaly'>
                <h6>Deuteranomaly</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
            <div className='tritanomaly'>
                <h6>Tritanomaly</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
        </div>
    ),
    Dichromatism: (
        <div className='filterSection1'>
            <div className='original'>
                <h6>No Filter</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                    </div>
                </div>
            <div className='protanopia'>
                <h6>Protanopia</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
            <div className='deuteranopia'>
                <h6>Deuteranopia</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
            <div className='tritanopia'>
                <h6>Tritanopia</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
        </div>
    ),
    Monochromatism: (
        <div className='filterSection1'>
            <div className='original'>
                <h6>No Filter</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                    </div>
                </div>
            <div className='achromatomaly'>
                <h6>Achromatomaly</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
            <div className='achromatopsia'>
                <h6>Achromatopsia</h6>
                <div className='typeSwatches'>
                    <div className='square colorR'/>
                    <div className='square colorG'/>
                    <div className='square colorB'/>
                </div>
            </div>
        </div>
    ),
  };

/**
 * 
 */
const ColorBlindness = () => {
    const [selected, setSelected] = useState<string>("AnomalousTrichromatism");

    return (
        <div className='mainContent'>
            <ColorFilters/>
            <h2>Color Blindness</h2>
            <p className='intro'>This page is your guide to understanding color blindness in depth. You'll learn what color blindness is, who it affects, and how many people experience it worldwide. We'll explore the different types of color blindness, explaining how each one alters the way colors are perceived. In addition, you'll find practical tips on how to make the world more accessible for those with color vision deficiencies, including best practices for design, communication, and everyday interactions. By the end, you'll also gain insight into the color palette used on this site and how it was carefully chosen to prioritize accessibility, ensuring that the content is clear and inclusive for as many people as possible.</p>
            <div className='personCardCB longText'>
                <h4>Intro to Color Blindness:</h4>
                <div className='cbIntro'>
                    <div className='cbImg'>
                        <img src='color-blindness.jpg' alt='dyslexia'/>
                        <img src='NormalVision-01.png' alt='dyslexia'/>
                        <img src='colorTest.jpg' alt='dyslexia'/>
                    </div>
                    <div className='cbText'>
                        <h6>What is Color Blindness?</h6>
                        <p>Color blindness, also known as color vision deficiency, is a condition where an individual perceives colors differently than people with normal vision. Instead of seeing the full spectrum of colors, those affected might struggle to distinguish between certain hues or may only see shades of a single color. This occurs due to differences in the retina, which affects how the brain processes color information.</p>
                        <h6>Who Does Color Blindness Affect?</h6>
                        <p>Color blindness is a condition that affects millions of people worldwide. It's estimated that around 8% of men and 0.5% of women have some form of color vision deficiency. This condition is more common in men due to genetic factors, but it can affect anyone, regardless of age or ethnicity. Understanding the prevalence and impact of color blindness is crucial to fostering an inclusive environment for all.</p>
                        <h6>How Many People Experience Color Blindness Worldwide?</h6>
                        <p>Globally, it’s estimated that around 300 million people are affected by color blindness, with a significant number of them unaware of their condition. Since color blindness is often hereditary, many people are born with it, while others may develop it later in life due to aging or injury. Despite its widespread nature, color blindness is not typically diagnosed unless the individual seeks out a formal eye exam or is involved in a situation where color perception is key.</p>
                        <h6>How Do We Perceive Color?</h6>
                        <p>Color perception begins in the eye’s retina, where specialized photoreceptor cells called cones detect light and transmit signals to the brain. These cones respond to different wavelengths of light, allowing us to see a full range of colors. When functioning properly, they work together to distinguish between hues by detecting variations in red, green, and blue light. However, if any of these cones are missing or not working correctly, color perception is altered, leading to color blindness. While the eye captures the light, it's ultimately the brain that interprets color, turning electrical signals into the vivid spectrum we see—or in the case of color blindness, the modified version that some experience.</p>
                    </div>
                </div>
            </div>
            <div className='personCardCB'>
                <div className='adhdTip'>
                    <h4>Types:</h4>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => setSelected("AnomalousTrichromatism")}>
                                        Anomalous Trichromatism
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">
                                        Anomalous trichromatism is when someone has three color-detecting cells (cones) in their eyes, but one of them doesn’t work quite right. This causes trouble with seeing certain colors, like reds, greens, or blues. The severity of the problem can vary, and some people may not even notice it in everyday life. These individuals might not pass basic color vision tests, but their condition is less severe than other types of color blindness.<br/><br/>
                                        To the right is the RGB color palette displayed with filters to demonstrate the three types of Anomalous Trichromatism: <span className='bold'>Protanomaly, Deuteranomoly, and Tritanomaly.</span> The palettes are shown in order from top to bottom, beginning with the unfiltered version to represent normal color vision.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => setSelected("Dichromatism")}>
                                        Dichromatism
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">
                                        Dichromatism is when someone is missing the ability to see one of the three primary colors entirely. This means they only need two colors to match all colors in the spectrum. The two main types of dichromatism are protanopia (lack of red cones) and deuteranopia (lack of green cones), which are both forms of red-green color blindness. People with dichromatism experience more difficulty distinguishing colors compared to those with anomalous trichromatism.<br/><br/>
                                        To the right is the RGB color palette displayed with filters to demonstrate the three types of Dichromatism: <span className='bold'>Protanopia, Deuteranopia, and Tritanopia.</span> The palettes are shown in order from top to bottom, beginning with the unfiltered version to represent normal color vision.
                                    </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => setSelected("Monochromatism")}>
                                        Monochromatism
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">
                                        Monochromatism is when someone has little to no ability to perceive color, seeing the world mostly in shades of gray. This happens when two or all three types of cone cells in the eye are nonfunctional. The two main forms are achromatopsia, where no functional cones are present, and achromatomaly, a milder form where cones are partially functional but still lead to severely limited color vision. People with monochromatism often experience low visual acuity and light sensitivity, and they rely entirely on brightness differences to distinguish objects.<br/><br/>
                                        To the right is the RGB color palette displayed with filters to demonstrate the three types of Monochromatism: <span className='bold'>Achromatomaly and Achromatopsia.</span> The palettes are shown in order from top to bottom, beginning with the unfiltered version to represent normal color vision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {divs[selected]}
                        
                    </div>
                    <div className='extra'>
                        <p>*</p>
                        <p>
                            The prefixes “protan”, “deutan”, and “tritan” refer to the L-cones, M-cones, and S-cones, respectively.<br/>
                            The suffix “anomaly” references an absorption spectrum that is shifted compared to the typical, and the suffix “anopia” references the complete absence of that cone type.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className='personCardCB'>
                <div className='cbTipContainer'>
                    <div className='cbTip'>
                        <h4>How to Help:</h4>
                        <ul>
                            <li><span className='bold'>Use high contrast:</span> Black on white is best. It’s easier to read than similar colors like red on green.</li>
                            <li><span className='bold'>Don’t rely on color alone:</span> Add labels, icons, or patterns to show meaning.</li>
                            <li><span className='bold'>Use patterns in charts:</span> Not just colored lines or bars.</li>
                            <li><span className='bold'>Pick colorblind-friendly palettes:</span> Tools like Coolors or Adobe Color can help.</li>
                            <li><span className='bold'>Keep layouts clear:</span> Good spacing and structure help everyone navigate.</li>
                        </ul>
                    </div>
                    <div className='cbTip'>
                        <h4>What to Avoid:</h4>
                        <ul>
                            <li><span className='bold'>Don’t pair red/green or blue/yellow without contrast:</span> These are hard to tell apart.</li>
                            <li><span className='bold'>Avoid pale colors on light backgrounds:</span> Like pink on white—too hard to see.</li>
                            <li><span className='bold'>Don’t use color-only legends:</span> Add labels or different shapes.</li>
                            <li><span className='bold'>Don’t assume everyone sees color like you:</span> Check your design with tools.</li>
                            <li><span className='bold'>Keep it simple:</span> Too many colors can be overwhelming.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='personCardCB'>
                <h4><em>The Access Lens Color</em> Palette:</h4>
                <div className='cbFilterInfo'>
                    <p>
                        The color palette used in <em>The Access Lens</em> was intentionally chosen for its simplicity, clarity, and accessibility. By limiting the palette to black, white, and purple, the design maintains strong contrast and visual hierarchy without relying on color to convey meaning. This ensures that all users, regardless of color vision ability, can access the information equally. Since the core content is communicated through text and layout—not color—the limited palette supports clarity while still offering a distinct visual identity.<br/><br/>
                        Below is the palette shown through a filter simulating the types of color blindness discussed above, as well as how it appears to users without color blindness.
                    </p>
                </div>
                <div className='filterSection'>
                    <div className='colorSwatches original'>
                        <h6>Original</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches protanopia'>
                        <h6>P -anopia</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches protanomaly'>
                        <h6>P -anomaly</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches deuteranopia'>
                        <h6>D -anopia</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches deuteranomaly'>
                        <h6>D -anomaly</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches tritanopia'>
                        <h6>T -anopia</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches tritanomaly'>
                        <h6>T -anomaly</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches achromatopsia'>
                        <h6>A -anopia</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                    <div className='colorSwatches achromatomaly'>
                        <h6>A -anomaly</h6>
                        <div className='square color1'/>
                        <div className='square color2'/>
                        <div className='square color3'/>
                        <div className='square color4'/>
                        <div className='square color5'/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ColorBlindness;