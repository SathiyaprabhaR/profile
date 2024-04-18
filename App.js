// App.js
import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigation = (page) => {
    setActivePage(page);
  };

  let content = null;

  switch (activePage) {
    case 'home':
      content = <HomePage />;
      break;
    case 'about':
      content = <AboutPage />;
      break;
    case 'contact':
      content = <ContactPage />;
      break;
    default:
      content = <HomePage />;
  }

  return (
    <div className="App">
      <NavigationBar onNavigation={handleNavigation} />
      <div className="content">
        {content}
      </div>
      <Footer />
    </div>
  );
}

export default App;
