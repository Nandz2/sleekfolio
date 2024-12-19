import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import IA from "./pages/inovation_atlas.jsx";
import mv from "./pages/memory_valut.jsx";
import blog from './pages/blog.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inovation_atlas.jsx" element={< IA />} />
        <Route path="/blog.jsx" element={< blog />} />
        <Route path="/memory_valut.jsx" element={< mv />} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;
