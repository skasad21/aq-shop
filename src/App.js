import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

// My Component
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

// App
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
