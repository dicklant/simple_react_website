import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TabConfig from './TabConfig';
import Home from './Home';
import Tab from "./Tab";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<TabConfig />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/tab/:id" element={<Tab/>} /> 
      </Routes>

    </div>
  );
}

export default App;
