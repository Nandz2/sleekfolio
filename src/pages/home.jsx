import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/inovation_atlas">Inovation Atlas</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/memory_valut">Memory Vault</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
