import React from "react";
import "../assets/css/skill.css";
import C from "../assets/images/c++.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import github from "../assets/images/github.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import expressjs from "../assets/images/expressjs.png";
import next from "../assets/images/next.png";
import redux from "../assets/images/redux.png";
import vscode from "../assets/images/vscode.png";
import mongodb from "../assets/images/mongodb.png";
import postman from "../assets/images/postman.png";
import tailwind from '../assets/images/tailwind.png';
const Skill = () => {
  return (
    <div className="SkillContainer">
      <div className="SkillHead">
        <span className="NavLinkBullet">03.</span> skills
        <div className="StraightLine"></div>
      </div>
      <div className="SkillShow">
        <div className="SkillShowhead">Languages</div>
        <div className="SkillPart">
          <div className="Skill">
            <img className="skillimg" src={C} alt="c++" />
            C++
          </div>
          <div className="Skill">
            <img className="skillimg" src={java} alt="java" />
            Java
          </div>
          <div className="Skill">
            <img className="skillimg" src={python} alt="python" />
            Python
          </div>
          <div className="Skill">
            <img className="skillimg" src={js} alt="js" />
            JavaScript(ES6+)
          </div>
        </div>
        <div className="SkillShowhead">Others</div>
        <div className="SkillPart">
          <div className="Skill">
            <img className="skillimg" src={html} alt="html" />
            HTML
          </div>
          <div className="Skill">
            <img className="skillimg" src={css} alt="css" />
            CSS
          </div>
          <div className="Skill">
            <img className="skillimg" src={tailwind} alt="tailwind" />
            Tailwind CSS
          </div>
          <div className="Skill">
            <img className="skillimg" src={react} alt="react" />
            REACTJs
          </div>
          <div className="Skill">
            <img className="skillimg" src={redux} alt="redux" />
            Redux
          </div>
          <div className="Skill">
            <img className="skillimg" src={node} alt="node" />
            NodeJs
          </div>
          <div className="Skill">
            <img className="skillimg" src={next} alt="next" />
            NextJs
          </div>
          <div className="Skill">
            <img className="skillimg" src={expressjs} alt="expressjs" />
            ExpressJs
          </div>
          <div className="Skill">
            <img className="skillimg" src={mongodb} alt="mongodb" />
            MongoDB
          </div>
          <div className="Skill">
            <img className="skillimg" src={postman} alt="postman" />
            Postman
          </div>
          <div className="Skill">
            <img className="skillimg" src={github} alt="github" />
            Github
          </div>
          <div className="Skill">
            <img className="skillimg" src={vscode} alt="vscode" />
            VsCode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
