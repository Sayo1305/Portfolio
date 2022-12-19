import { useEffect, useRef } from 'react';
import './App.css';
import About from './components/About';
import Certficate from './components/Certficate';
import Contact from './components/Contact';
import Exp from './components/Exp';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import SideContact from './components/SideContact';
import Skill from './components/Skill';
import SlideEmail from './components/SlideEmail';

function App() {
  const contactref = useRef(); 
  const expref = useRef();
  const projref = useRef();
  const aboutref = useRef();
  useEffect(()=>{
    window.scroll(0, 0);
  },[]);
  return (
    <div className="app">
      <Navbar contactref={contactref} projref ={projref} aboutref = {aboutref} expref = {expref}/>
      <Hero/>
      <About aboutref={aboutref}/>
      <SideContact/>
      <SlideEmail/>
      <Exp expref={expref}/>
      <Skill/>
      <Certficate/>
      <Project projref={projref}/>
      <Contact contactref={contactref}/>
    </div>
  );
}

export default App;
