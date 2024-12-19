import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Explore our website:</p>
      <ul>
        <li><Link to="/inovation_atlas.jsx">IA</Link></li>
        <li><Link to="/memory_valut.jsx">mv</Link></li>
        <li><Link to="/blog.jsx">blog</Link></li>
      </ul>
    </div>
  );
};

export default Home;
