import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Home, Tutorial } from '../components';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          { /* Homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          { /* Tutorial */}
          <Route path='/tutorial' element={<Tutorial /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
