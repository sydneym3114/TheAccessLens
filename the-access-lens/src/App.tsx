import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TheAccessLens from './TheAccessLens';
import './css/custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<TheAccessLens/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
