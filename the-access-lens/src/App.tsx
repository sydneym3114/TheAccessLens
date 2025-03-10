import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import TheAccessLens from './TheAccessLens';

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
