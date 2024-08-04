import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Cryptocurrency from './components/Cryptocurrency';
import Navbar from './components/Navbar';
import About from './components/About';
function App() {
  const [limit, setLimit] = useState(10);

  const handleLimit = (e) => {
    const value = Number(e.target.value);
    if (value >= 10) {
      setLimit(value);
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={
            <div className="container">
              <input
                type="number"
                onChange={handleLimit}
                placeholder="Limit"
                className="limit-input"
              />
              <Cryptocurrency LIMIT={limit} />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
