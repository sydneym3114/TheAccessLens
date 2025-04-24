import './index.css';

/**
 * 
 */
const About = () => {
    return (
    <div className='container'>
      <div className='aboutContainer'>
        <h2>About <em>The Access Lens</em></h2>
        <p><em>The Access Lens</em> is designed to help web designers learn how to create more accessible digital experiences for users with disabilities. This site specifically focuses on three key areas: Color Blindness, Dyslexia, and ADHD/Neurodivergence. While there are many other disabilities that also deserve attention, this site aims to offer a meaningful and manageable starting point. Although the site is open to everyone, its primary audience is web designers—both front-end and back-end—who want to improve their accessibility practices.<br/><br/>
            One of the main features of the site is The Journey, an interactive sandbox experience. In it, users are guided through a simplified process of designing a webpage, focusing on layout and color palette choices. While web design involves many more complex decisions, this activity zeroes in on foundational aspects that directly affect the targeted disabilities. It's a hands-on way to explore how small design changes can significantly impact usability.<br/><br/>
            Beyond interaction, <em>The Access Lens</em> offers educational content tailored to each disability. For Color Blindness, users are presented with general information and clear guidance on what to do and avoid in their designs. Because color blindness is relatively well understood, this section relies heavily on research-based recommendations.<br/><br/>
            The Dyslexia section is more personal. It begins by sharing direct experiences from individuals who have dyslexia. From there, users can explore actionable tips—what helps, what doesn’t, and how to adapt designs to support more effective reading and navigation.<br/><br/>
            Finally, the section on ADHD and Neurodivergence also features real voices. It differs from the others by offering side-by-side comparisons of site designs people love versus those they find frustrating. The insights come from real-world experiences, emphasizing the value of intuitive layout, visual clarity, and user choice in information intake.<br/><br/>
            Overall, <em>The Access Lens</em> serves as a practical, focused resource for designers who want to start building more inclusive experiences. While it doesn’t cover every aspect of accessible design—an enormous and ever-growing field—it provides a solid foundation and meaningful insight into specific needs that are often overlooked.</p>
      </div>
      <div className='aboutContainer2'>
        <h4>Resources</h4>
        <div className='resourceList'>
          <ul>
            <li>https://github.com/MaPePeR/jsColorblindSimulator/blob/master/colorblind.js</li>
            <li>https://eyewiki.org/Color_Vision#Evaluation_of_Color_Vision_Deficiencies</li>
            <li>https://www.eyecare-specialists.com/colourvisionold</li>
            <li>https://observablehq.com/@frankelavsky/contrast-and-no-use-of-color-alone-in-adjacent-charts</li>
            <li>https://observablehq.com/@frankelavsky/high-contrast-for-data-visualization-with-examples</li>
            <li>https://observablehq.com/@frankelavsky/no-use-of-color-alone-in-data-visualization</li>          
          </ul>
          <ul>
            <li>https://help.chi.ac.uk/working-someone-dyslexia</li>
            <li>https://www.wcag.com/blog/digital-accessibility-and-neurodiversity/#How_to_get_started_designing_for_neurodiversity</li>
            <li>https://www.northeastern.edu/</li>
            <li>https://www.kennesaw.edu/</li>
            <li>https://www.yale.edu/</li>
            <li>https://www.uga.edu/</li>
            <li>https://www.nytimes.com/</li>
            <li>https://www.cnn.com/?refresh=1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
