import '../index.css';

/**
 * 
 */
const Dyslexia = () => {
    return (
        <div className='mainContent'>
            <h2>Dyslexia</h2>
            <p className='intro'>This page explores how to make your site more readable and navigable for people with dyslexia. While experiences vary, there are general design choices that can help. This information was gathered through interviews with three college students who have dyslexia. These open-ended conversations focused on how dyslexia affects their daily lives. Each student was given a paper and sharpie to help visualize their experiences. While they initially struggled to "picture" dyslexia, drawing became a useful tool for expressing their challenges. Though these drawings don’t represent everyone’s experience, they provide insight into how dyslexia feels for each individual. Additionally, this page includes information on design choices that help versus hinder readability based on their perspectives.</p>
            <div className='personCardD'>
                <div>
                    <img src='sarahDys.png' alt='dyslexia'/>
                    <div>
                        <h4>Meet Sarah!</h4>
                        <p>For me having dyslexia means that reading isn’t just about decoding letters, it’s about constantly reorienting my focus. When looking at long words, I sometimes fixate on smaller words hidden inside them, which throws off the meaning of the text. This makes reading slow and frustrating because I have to double-check my understanding to make sure I am interpreting things correctly. Along with skipping lines and struggling with scantrons, this issue makes traditional reading formats difficult. I do best with bold, larger text and spacing that helps my eyes track more effectively, reducing the chances of misreading.</p>
                    </div>
                </div>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>Difficulties:</h6>
                    <div className="collapse" id="collapseExample2">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Skipping Lines & Losing Place – Avoid small text, cramped spacing, and visually similar lines.</li>
                                <li>Scantrons & Uniform Layouts – Forms and layouts that look too similar make it harder to track progress.</li>
                                <li>Distracting Images – Text next to images can be ignored if the image draws too much attention.</li>
                                <li>Poor Column Distinction – Columns without clear separation cause unintentional skipping between them.</li>
                            </ul>
                        </div>
                    </div>
                </button>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample1"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>How to help:</h6>
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Use Bigger, Bolder Fonts – Higher weight and larger text improve readability.</li>
                                <li>Increase Line Spacing – Extra spacing reduces the chance of skipping lines.</li>
                                <li>Emphasize Capital-to-X-Height Ratio – Larger differences between uppercase and lowercase letters enhance clarity.</li>
                                <li>Clearly Separate Columns – Use distinct dividers or spacing to prevent unintended shifts in reading focus.</li>
                            </ul>
                        </div>
                    </div>
                </button>
            </div>
            <div className='personCardD'>
                <div>
                    <div>
                        <h4>Meet Alec!</h4>
                        <p>Reading with dyslexia doesn’t always mean I don’t understand, it means that the way things come out isn’t always how they went in. I might read a sentence just fine but later retell it with different words or in a different order without noticing. Also, letters that look alike, like b, d, and p, are easy to mix up, especially when I’m moving quickly. Similarly, fonts with long serifs can turn a simple “u” into what looks like a “w,” which throws me off. I tend to reread lines to keep myself focused, and when spacing is tight or the letterforms are too similar, everything starts to blur together.</p>
                    </div>
                    <img src='alecDys.png' alt='dyslexia'/>
                </div>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>Difficulties:</h6>
                    <div className="collapse" id="collapseExample3">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Similar Letters – Confusing shapes like b, d, and p make fast reading tricky and lead to mix-ups.</li>
                                <li>Serif Confusion – Fonts with long serifs make letters like “u” look like “w,” causing misreads.</li>
                                <li>Out-of-Order Output – Words might be read correctly but spoken or written in the wrong sequence.</li>
                                <li>Synonym Substitution – When recalling, may swap original text with different words unintentionally.</li>
                            </ul>
                        </div>
                    </div>
                </button>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>How to help:</h6>
                    <div className="collapse" id="collapseExample4">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Clear Letterforms – Fonts with minimal serifs and strong letter distinction improve accuracy.</li>
                                <li>Ample Line Spacing – Helps prevent rereading and reduces visual fatigue.</li>
                                <li>Reduced Visual Clutter – Organized layouts with clear breaks support better tracking.</li>
                                <li>Distinct Shapes – Typefaces where b’s and d’s are clearly different help reduce confusion.</li>
                            </ul>
                        </div>
                    </div>
                </button>
            </div>
            <div className='personCardD'>
                <div>
                    <img src='aaronDys.png' alt='dyslexia'/>
                    <div>
                        <h4>Meet Aaron!</h4>
                        <p>I had early intervention when I was younger, so reading itself isn’t as difficult for me as it could have been, but there are still parts of language and learning that don’t come as naturally. Things that seem automatic for most people, like instantly knowing left from right, remembering which way certain letters face, or picking up on spelling patterns, take a lot more effort and repetition for me. I have to think about them every time instead of just instinctively knowing. It’s not that I don’t understand; it just takes longer for my brain to turn those concepts into something automatic. Even after lots of practice, I still need to pause and double-check things that others might do without a second thought. However there are some things that can be done visually to help me along the way.</p>
                    </div>
                </div>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample5"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>Difficulties:</h6>
                    <div className="collapse" id="collapseExample5">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Tiny Text – Small print strains my eyes and slows me down, making it harder to stay focused.</li>
                                <li>Fast Spelling Demands – Spelling doesn’t come automatically, so being expected to spell quickly (in speech, tests, or writing) adds pressure.</li>
                                <li>Busy or Decorative Fonts – Fonts with lots of flair or uneven letters make it harder to quickly recognize words and increase mental effort.</li>
                            </ul>
                        </div>
                    </div>
                </button>
                <button
                    className="btn btn-pale-purple alert-container alert-d"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample6"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                >
                    <h6>How to help:</h6>
                    <div className="collapse" id="collapseExample6">
                        <div className="card card-body card-purp">
                            <ul>
                                <li>Well-Spaced Text – Lines that are spaced out just enough (but not too much) help me read smoothly without feeling overwhelmed or losing flow.</li>
                                <li>Bold, Thick Fonts – Heavier fonts make letters more distinct, which reduces confusion and helps with focus.</li>
                                <li>Generous Margins – White space around text keeps things from feeling crowded and helps me stay oriented.</li>
                                <li>Bionic Fonts – Using bold for part of each word makes it easier for my brain to recognize word shapes and stay engaged.</li>
                            </ul>
                        </div>
                    </div>
                </button>
            </div>
        </div>
  );
};

export default Dyslexia;