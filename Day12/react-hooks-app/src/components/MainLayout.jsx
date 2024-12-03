import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      Home
      <ul >
      
        <li>
        <Link to="/images">Images</Link>
        </li>
        <li>
        <Link to="/counter">Counter</Link>
        </li>
      </ul>

    </div>
  )
}

export default MainLayout
