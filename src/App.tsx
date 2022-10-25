import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TabConfig from './TabConfig';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<TabConfig />} />
      </Routes>

    </div>
  );
}

export default App;
