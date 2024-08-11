import React, { useEffect, useRef } from "react";
import "../assets/css/hero.css";
import Typewriter from "typewriter-effect";
const Hero = () => {
  const hero1ref = useRef();
  const hero2ref = useRef();
  const hero3ref = useRef();
  const hero4ref = useRef();
  const hero5ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("appear1", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 1,
      }
    );
    observer.observe(hero1ref.current);
    observer.observe(hero2ref.current);
    observer.observe(hero3ref.current);
    observer.observe(hero4ref.current);
    observer.observe(hero5ref.current);
  }, []);
  return (
    <div className="HeroSection">
      <div ref={hero1ref} className="HeroText1">
        Hi, My name is
      </div>
      <div ref={hero2ref} className="HeroMainText">
        Unnat das
      </div>
      <div ref={hero3ref} className="HeroSpecialText">
        I am a
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Web developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Student")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Learner")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Web3 Enthusiast")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div ref={hero4ref} className="HeroPara">
        I'm a Web developer (Full Stack) and programmer. Software Engineer at <a
                href="https://entvin.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                <span className="NavLinkBullet clickpurple">@Entvin (YC S22)</span>
              </a>{" "},  
              {/* I'm focused on DSA , web3 and Competitive programming. */}
      </div>
      <div>
        <a
          target={"_blank"}
          without rel="noreferrer" 
          href="https://drive.google.com/file/d/1lQbxg8ugx_F5nsqGSZQMn95nkhpSEvZR/view?usp=sharing"
        >
          <button className="HeroButton" ref={hero5ref}>
            Check out my Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
