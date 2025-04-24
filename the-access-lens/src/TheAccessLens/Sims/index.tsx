import './index.css';

/**
 * 
 */
const Simulations = () => {
    return (
    <div className='container'>
      <h2>Simulations</h2>
      <embed src="https://example.com/" style={{width:'500px', height:'300px'}}></embed>
      <iframe src="https://www.google.com/" width="100%" height="300">
  <p>Your browser does not support iframes.</p>
</iframe>

<iframe 
  src="https://www.northeastern.edu/" 
  width="100%" 
  height="300" 
  sandbox="allow-scripts allow-same-origin"
>
  <p>Your browser does not support iframes.</p>
</iframe>
    </div>
  );
};

export default Simulations;
