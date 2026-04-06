import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About";
import Certficate from "./components/Certficate";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  const [scrollstop, setscrollstop] = useState(false);
  const [theme, setTheme] = useState("dark");
  const contactref = useRef();
  const expref = useRef();
  const projref = useRef();
  const aboutref = useRef();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app" data-theme={theme}>
      <Navbar
        contactref={contactref}
        projref={projref}
        aboutref={aboutref}
        expref={expref}
        setscrollstop={setscrollstop}
        scrollstop={scrollstop}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero projref={projref} theme={theme} />
      <About aboutref={aboutref} />
      <Exp expref={expref} />
      <Skill />
      <Certficate />
      <Project projref={projref} />
      <Contact contactref={contactref} />
    </div>
  );
}

export default App;
