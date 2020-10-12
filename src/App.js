import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/navbar'
import Hero from './hero/hero'
import AboutMe from './about-me/about-me'
import Experience from './experience/experience'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
