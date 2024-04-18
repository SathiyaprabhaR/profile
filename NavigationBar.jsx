// NavigationBar.js
import React from 'react';

const NavigationBar = ({ onNavigation }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => onNavigation('home')}>Home</button></li>
        <li><button onClick={() => onNavigation('about')}>About</button></li>
        <li><button onClick={() => onNavigation('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
