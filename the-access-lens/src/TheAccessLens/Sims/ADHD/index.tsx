import '../index.css';
import { useState } from "react";

const images: Record<string, string> = {
    skyG1: "skylarGood1.png",
    skyG2: "skylarGood2.png",
    skyG3: "skylarGood3.png",
    skyG4: "skylarGood4.png",
    skyB1: "skylarBad1.png",
    skyB2: "skylarBad2.png",
    skyB3: "skylarBad3.png",
    skyB4: "skylarBad4.png",
    emmaG1: "emmaGood1.png",
    emmaG2: "emmaGood2.png",
    emmaG3: "emmaGood3.png",
    emmaG4: "emmaGood4.png",
    emmaB1: "emmaBad1.png",
    emmaB2: "emmaBad2.png",
    emmaB3: "emmaBad3.png",
    emmaB4: "emmaBad4.png",
    taylorG1: "taylorGood1.png",
    taylorG2: "taylorGood2.png",
    taylorG3: "taylorGood3.png",
    taylorG4: "taylorGood4.png",
    taylorB1: "taylorBad1.png",
    taylorB2: "taylorBad2.png",
    taylorB3: "taylorBad3.png",
    taylorB4: "taylorBad4.png",
  };

  const capts: Record<string, string> = {
    skyG1: "Northeastern's interactive scroll bar to view different campuses.",
    skyG2: "Kennesaw State's yellow circle when hovering to indicate click.",
    skyG3: "Northeastern's popup information about a campus when hovering over it.",
    skyG4: "New York Times' home page layout, not too chaotic but still gives enough info.",
    skyB1: "CNN's too clutered site, entirely too much text and too many images.",
    skyB2: "CNN's site where telling certain ads and paid content apart from articles is challenging.",
    skyB3: "Yale's homepage that has seemingly random links go completely different things.",
    skyB4: "UGA's text over a video making it difficult to read.",
    emmaG1: "UGA's navigation staying when the user scrolls down.",
    emmaG2: "UGA's option for the user to choose to click the dropdown to view more info.",
    emmaG3: "Northeastern's simple and bold typography choice making it easy to read.",
    emmaG4: "Kennesaw State's image display when hovering feature.",
    emmaB1: "CNN's too clutered site, entirely too much text and too many images.",
    emmaB2: "Yale's navigation bar disappearing when the user scrolls down.",
    emmaB3: "Northeastern's homepage has a section of just three bold words lacking visual interest.",
    emmaB4: "New York Times' inconsistent organization and font usage.",
    taylorG1: "UGA's offcanvas dropdown navigation making it easy for the user to navigate the site.",
    taylorG2: "Northeastern's interactive scroll bar to view different campuses.",
    taylorG3: "Northeastern's simple and bold typography choice making it easy to read.",
    taylorG4: "Kennesaw State's blue highlight and text color change when hovering over a button.",
    taylorB1: "CNN's too clutered site, entirely too much text and too many images.",
    taylorB2: "UGA's homepage displaying news before anything related to the school's academics.",
    taylorB3: "New York Times' inconsistent organization and font usage.",
    taylorB4: "Yale's confusing navigation menu making it unintuitive for the user.",
  };

/**
 * 
 */
const ADHD = () => {
    const [selected1, setSelected1] = useState<string>("skyG1");
    const [selected2, setSelected2] = useState<string>("skyB1");
    const [selected3, setSelected3] = useState<string>("emmaG1");
    const [selected4, setSelected4] = useState<string>("emmaB1");
    const [selected5, setSelected5] = useState<string>("taylorG1");
    const [selected6, setSelected6] = useState<string>("taylorB1");
    const [capt1, setCapt1] = useState<string>("skyG1");
    const [capt2, setCapt2] = useState<string>("skyB1");
    const [capt3, setCapt3] = useState<string>("emmaG1");
    const [capt4, setCapt4] = useState<string>("emmaB1");
    const [capt5, setCapt5] = useState<string>("taylorG1");
    const [capt6, setCapt6] = useState<string>("taylorB1");

    return (
        <div className='mainContent'>
            <h2>ADHD</h2>
            <p className='intro'>The goal of this page is not to define ADHD or explain exactly how it affects people, as experiences vary widely. Instead, it explores the perspectives of three college students with ADHD, who discuss their experiences and analyze common websites. The case studies focus on four college homepages and two news organizations. To view them yourself, visit the About page and scroll to the Resources section. The students’ insights were compiled to highlight web design elements that help or hinder their experience. While there is no single “right” or “wrong” approach, this serves as a tool to understand different perspectives and identify broad patterns in accessibility.</p>
            <div className='personCardA'>
                <div>
                <h4>Meet Skylar!</h4>
                <p>When I think about how ADHD affects my daily life, the biggest impact is on my motivation. Logically, I know I need to do things like assignments, but I can’t physically convince myself to start. This leads to a frustrating cycle: when a deadline approaches, I become stressed, which makes it even harder to begin, causing more stress because I still haven’t done what I need to. Another major way ADHD affects me is through distraction. Unless I’m wearing noise-canceling headphones or hyper-fixated on something, even the smallest distraction can pull me away. This makes tasks like paying attention in lectures or reading for class incredibly challenging. If I’m not interested in something, my brain just tunes it out in a way that I feel most neurotypical people don’t experience. Overall, ADHD makes it difficult to get over the initial hurdle of starting a task, but once I do, if I’m even slightly interested, I become completely absorbed and lose all track of time.</p>
                </div>
                <div className='adhdTip'>
                    <h6>How to help:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample5">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => {setSelected1("skyG1"); setCapt1("skyG1");}}>
                                        Interactive Elements
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample5">
                                    <p className="accordion-body">Simple animations or movements that keep attention without being distracting.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => {setSelected1("skyG2"); setCapt1("skyG2");}}>
                                        Clear Clickable Indicators
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                                    <p className="accordion-body">Visual cues that make it obvious where users can click.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => {setSelected1("skyG3"); setCapt1("skyG3");}}>
                                        Choice to Read
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                                    <p className="accordion-body">Giving users the option to read text or skip it keeps the experience flexible.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" onClick={() => {setSelected1("skyG4"); setCapt1("skyG4");}}>
                                        Balanced Layout
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample5">
                                    <p className="accordion-body">A mix of text and images that isn't overcrowded or overwhelming.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected1]} alt={selected1}/>
                            <p className='caption'>{capts[capt1]}</p>
                        </div>
                        
                    </div>
                </div>
                <div className='adhdTip'>
                    <h6>What to avoid:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample6">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" onClick={() => {setSelected2("skyB1"); setCapt2("skyB1");}}>
                                        Too Much Information
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse show" data-bs-parent="#accordionExample6">
                                    <p className="accordion-body">Too much content in one place makes it hard to focus.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" onClick={() => {setSelected2("skyB2"); setCapt2("skyB2");}}>
                                        Confusing Ads and Content
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample6">
                                    <p className="accordion-body">It's hard to tell what's news and what's an ad.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" onClick={() => {setSelected2("skyB3"); setCapt2("skyB3");}}>
                                        Unorganized Layout
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample6">
                                    <p className="accordion-body">Poorly arranged content makes the page hard to navigate.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" onClick={() => {setSelected2("skyB4"); setCapt2("skyB4");}}>
                                        Text Over Videos
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample6">
                                    <p className="accordion-body">Placing text on top of videos makes both harder to read.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected2]} alt={selected2}/>
                            <p className='caption'>{capts[capt2]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='personCardA'>
                <div>
                <h4>Meet Emma!</h4>
                <p>ADHD makes it incredibly challenging for me to focus on anything because my mind is constantly drifting, often fixated on music. My working memory is very short, so I frequently forget what I’m doing at the moment, leading me to almost always be running late. Retaining both visual and auditory information is difficult, making it hard to learn effectively from lecture or reading (which is particularly frustrating as a student). I also struggle with blocking out distractions, and when that happens, I become easily overstimulated, leading to a constant sense of anxiety whenever I leave my room. In general, ADHD makes it really hard for me to do things that neurotypical people may not have to think twice about.</p>
                </div>
                <div className='adhdTip'>
                    <h6>How to help:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample3">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2" onClick={() => {setSelected3("emmaG1"); setCapt3("emmaG1");}}>
                                        Persistent Navigation
                                    </button>
                                </h2>
                                <div id="collapseOne2" className="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
                                    <p className="accordion-body">Menus or navbars that stay visible while scrolling help maintain orientation.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2" onClick={() => {setSelected3("emmaG2"); setCapt3("emmaG2");}}>
                                        User Choice
                                    </button>
                                </h2>
                                <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                    <p className="accordion-body">Letting users choose when and what to engage with avoids cognitive overload.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2" onClick={() => {setSelected3("emmaG3"); setCapt3("emmaG3");}}>
                                        Clean Typography
                                    </button>
                                </h2>
                                <div id="collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                    <p className="accordion-body">Larger text and simple, consistent fonts improve readability and reduce distraction.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2" onClick={() => {setSelected3("emmaG4"); setCapt3("emmaG4");}}>
                                        Visual Cues
                                    </button>
                                </h2>
                                <div id="collapseFour2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                    <p className="accordion-body">Icons paired with text and hover effects make buttons and interactions more intuitive.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected3]} alt={selected3}/>
                            <p className='caption'>{capts[capt3]}</p>
                        </div>
                    </div>
                </div>
                <div className='adhdTip'>
                    <h6>What to avoid:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample4">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive2" aria-expanded="true" aria-controls="collapseFive2" onClick={() => {setSelected4("emmaB1"); setCapt4("emmaB1");}}>
                                        Information Overload
                                    </button>
                                </h2>
                                <div id="collapseFive2" className="accordion-collapse collapse show" data-bs-parent="#accordionExample4">
                                    <p className="accordion-body">Too much content in one place makes users want to disengage entirely.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix2" aria-expanded="false" aria-controls="collapseSix2" onClick={() => {setSelected4("emmaB2"); setCapt4("emmaB2");}}>
                                        Disappearing Elements
                                    </button>
                                </h2>
                                <div id="collapseSix2" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                                    <p className="accordion-body">Navigation or content that vanishes on scroll causes confusion.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven2" aria-expanded="false" aria-controls="collapseSeven2" onClick={() => {setSelected4("emmaB3"); setCapt4("emmaB3");}}>
                                        Lack of Visual Interest
                                    </button>
                                </h2>
                                <div id="collapseSeven2" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                                    <p className="accordion-body">Absence of photos or compelling visuals leads to loss of attention.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight2" aria-expanded="false" aria-controls="collapseEight2" onClick={() => {setSelected4("emmaB4"); setCapt4("emmaB4");}}>
                                        Disorganized Layouts
                                    </button>
                                </h2>
                                <div id="collapseEight2" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                                    <p className="accordion-body">Inconsistent structure, random spacing, and unclear hierarchy make sites hard to explore.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected4]} alt={selected4}/>
                            <p className='caption'>{capts[capt4]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='personCardA'>
                <div>
                <h4>Meet Taylor!</h4>
                <p>Living with ADHD feels like constantly having 17 different tabs in my mind and I can’t figure out where the music is coming from or how to turn it off. When I am trying to concentrate on different tasks or assignments I get easily distracted with another one or different stimulus, and it takes much longer to finish them. On the opposite end when I get hyper fixated on something I lose all track of time and everything else leading to forgetting other important time commitments or basic things like food, water, and sleep. It also affects my sleep as I literally am unable to turn my brain off. As I was writing this statement out I got distracted by song lyrics at least 5 different times. It just goes to show how much it affects day-to-day life, especially as a student.</p>
                </div>
                <div className='adhdTip'>
                    <h6>How to help:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1" onClick={() => {setSelected5("taylorG1"); setCapt5("taylorG1");}}>
                                        Clear Navigation & Dropdowns
                                    </button>
                                </h2>
                                <div id="collapseOne1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">Easily accessible menus and dropdowns make sites intuitive and efficient.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1" onClick={() => {setSelected5("taylorG2"); setCapt5("taylorG2");}}>
                                        Visual Engagement
                                    </button>
                                </h2>
                                <div id="collapseTwo1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">Interactive elements, images, and hover effects keep users interested.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1" onClick={() => {setSelected5("taylorG3"); setCapt5("taylorG3");}}>
                                        Readable Layouts
                                    </button>
                                </h2>
                                <div id="collapseThree1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">Large spacing, big fonts, and distinct sections improve readability and comprehension.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1" onClick={() => {setSelected5("taylorG4"); setCapt5("taylorG4");}}>
                                        Subtle Feedback
                                    </button>
                                </h2>
                                <div id="collapseFour1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <p className="accordion-body">Elements like color changes and appearing sliders guide users naturally.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected5]} alt={selected5}/>
                            <p className='caption'>{capts[capt5]}</p>
                        </div>
                    </div>
                </div>
                <div className='adhdTip'>
                    <h6>What to avoid:</h6>
                    <div className='imageSelector'>
                        <div className="accordion" id="accordionExample2">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive1" aria-expanded="true" aria-controls="collapseFive1" onClick={() => {setSelected6("taylorB1"); setCapt6("taylorB1");}}>
                                        Clutter & Chaos
                                    </button>
                                </h2>
                                <div id="collapseFive1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                                    <p className="accordion-body">Too many colors, excessive info, and ads create overwhelming experiences.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix1" aria-expanded="false" aria-controls="collapseSix1" onClick={() => {setSelected6("taylorB2"); setCapt6("taylorB2");}}>
                                        Poor Prioritization
                                    </button>
                                </h2>
                                <div id="collapseSix1" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <p className="accordion-body">Irrelevant or misplaced sections (e.g., news appearing first) disrupt usability.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven1" aria-expanded="false" aria-controls="collapseSeven1" onClick={() => {setSelected6("taylorB3"); setCapt6("taylorB3");}}>
                                        Inconsistent Styling
                                    </button>
                                </h2>
                                <div id="collapseSeven1" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <p className="accordion-body">Random fonts, spacing issues, and unstructured layouts feel disorganized.</p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight1" aria-expanded="false" aria-controls="collapseEight1" onClick={() => {setSelected6("taylorB4"); setCapt6("taylorB4");}}>
                                        Navigation Frustrations
                                    </button>
                                </h2>
                                <div id="collapseEight1" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                                    <p className="accordion-body">Confusing menus, misplaced resources, and unpredictable behavior hinder usability.</p>
                                </div>
                            </div>
                        </div>
                        <div className='adhdimages'>
                            <img src={images[selected6]} alt={selected6}/>
                            <p className='caption'>{capts[capt6]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ADHD;