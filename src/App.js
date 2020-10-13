import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/navbar'
import Hero from './hero/hero'
import AboutMe from './about-me/about-me'
import Experience from './experience/experience'
import Research from './research/research'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Research/>
    </div>
  );
}

export default App;
