import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header/navbar'
import Hero from './hero/hero'
import AboutMe from './about-me/about-me'
import Experience from './experience/experience'
import Research from './research/research'
import Skills from './skills/skills'
import Footer from './footer/footer'
import CS464 from './cs464/cs464';
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Experience/>
      <Research/>
      <Skills/>
    </Fragment>
  );
};

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/cs464" exact component={CS464} />
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
