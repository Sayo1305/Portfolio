/** @format */

import React from "react";
import "../assets/css/skill.css";
import C from "../assets/images/c++.png";
import python from "../assets/images/python.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import github from "../assets/images/github.png";
import fastapi from "../assets/images/FastAPI.png";
import sql from "../assets/images/MySQL.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import expressjs from "../assets/images/Expressjs.png";
import next from "../assets/images/next.png";
import redux from "../assets/images/redux.png";
import vscode from "../assets/images/vscode.png";
import mongodb from "../assets/images/mongodb.png";
import postman from "../assets/images/postman.png";
import firebase from "../assets/images/firebase.png";
import tailwind from "../assets/images/tailwind.png";
import typescript from "../assets/images/typescript.png";
import nextauth from "../assets/images/nextauth.png";
import materialui from "../assets/images/materialui.png";
import antd from "../assets/images/antd.png";
import postgresql from "../assets/images/postgresql.png";
const Skill = () => {
   return (
      <div className="SkillContainer">
         <div className="SkillHead">
            <span className="NavLinkBullet">03.</span> skills
            <div className="StraightLine"></div>
         </div>
         <div className="SkillShow my-4">
            <div className="SkillShowhead !font-medium font_custom_mons">Languages</div>
            <div className="w-full p-5 flex flex-wrap border-gray-400 md:justify-between justify-center rounded-md gap-5 bg-[#171F41] border-[0.8px]">
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#00599C]/50  p-4  rounded-md"
                     src={C}
                     alt="c++"
                  />
                  C++
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#00599C]/50 p-4  rounded-md"
                     src={java}
                     alt="java"
                  />
                  Java
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#306998]/50 p-4  rounded-md"
                     src={python}
                     alt="python"
                  />
                  Python
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#FFDF00] p-4  rounded-md"
                     src={js}
                     alt="js"
                  />
                  JavaScript(ES6+)
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#3078C6]  p-4  rounded-md"
                     src={typescript}
                     alt="js"
                  />
                  TypeScript(ES6+)
               </div>
            </div>
            <div className="SkillShowhead">Others</div>
            <div className="w-full p-5 flex flex-wrap border-gray-400 md:justify-between justify-center rounded-md gap-5 bg-[#171F41] border-[0.8px]">
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#E97903]/50 p-4  rounded-md"
                     src={html}
                     alt="html"
                  />
                  HTML
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#049BE5]/50 p-4  rounded-md"
                     src={css}
                     alt="css"
                  />
                  CSS
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#0277BD]/50 p-4  rounded-md"
                     src={tailwind}
                     alt="tailwind"
                  />
                  Tailwind CSS
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#0277BD]/50 p-4  rounded-md"
                     src={react}
                     alt="react"
                  />
                  REACTJs
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#7E57C2]/50 p-4  rounded-md"
                     src={redux}
                     alt="redux"
                  />
                  Redux
               </div>
              
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#000]/50 p-4  rounded-md"
                     src={next}
                     alt="next"
                  />
                  NextJs
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#388E3C]/50 p-4  rounded-md"
                     src={node}
                     alt="node"
                  />
                  NodeJs
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 object-contain bg-[#000]/50 p-4  rounded-md"
                     src={expressjs}
                     alt="expressjs"
                  />
                  ExpressJs
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#4CAF50]/50 p-4  rounded-md"
                     src={mongodb}
                     alt="mongodb"
                  />
                  MongoDB
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#FF6F00]/50 p-4  rounded-md"
                     src={firebase}
                     alt="firebase"
                  />
                  Firebase
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#326991]/50 p-4  rounded-md"
                     src={postgresql}
                     alt="vscode"
                  />
                  PostgreSQL
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#F25A24]/50 p-4  rounded-md"
                     src={postman}
                     alt="postman"
                  />
                  Postman
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#000]/50 p-4  rounded-md"
                     src={github}
                     alt="github"
                  />
                  Github
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#0277BD]/50 p-4  rounded-md"
                     src={vscode}
                     alt="vscode"
                  />
                  VsCode
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#22C7FF]/50 p-4  rounded-md"
                     src={antd}
                     alt="vscode"
                  />
                  AntDesign
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#049789]/50 p-4  rounded-md"
                     src={fastapi}
                     alt="fastapo"
                  />
                  FAST API
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#03608B]/50 p-4  rounded-md"
                     src={sql}
                     alt="fastapo"
                  />
                  MYSQL
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#0082CC]/50 p-4  rounded-md"
                     src={materialui}
                     alt="vscode"
                  />
                  Material UI
               </div>
               <div className="Skill font_custom_mons font-medium">
                  <img
                     className="w-28 h-28 bg-[#15CFD0]/50 p-4  rounded-md"
                     src={nextauth}
                     alt="vscode"
                  />
                  NextAuth
               </div>
            
            </div>
         </div>
      </div>
   );
};

export default Skill;
