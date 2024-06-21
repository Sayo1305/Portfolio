/** @format */

import React, { useEffect, useRef } from "react";
import "../assets/css/project.css";
import BG from "../assets/images/shop.co.png";
import ss from "../assets/images/parkit.png";
import ss2 from "../assets/images/study_space_2.png";
const Project = ({ projref }) => {
   const myproj = useRef();
   const myproj2 = useRef();
   const myproj3 = useRef();
   const myproj4 = useRef();
   const myproj5 = useRef();
   const myproj6 = useRef();
   useEffect(() => {
      const cardObserver = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               entry.target.classList.toggle("show", entry.isIntersecting);
               if (entry.isIntersecting) {
                  cardObserver.unobserve(entry.target);
               }
            });
         },
         {
            threshold: 0.5,
         }
      );
      cardObserver.observe(myproj.current);
      cardObserver.observe(myproj2.current);
      cardObserver.observe(myproj3.current);
      cardObserver.observe(myproj4.current);
      cardObserver.observe(myproj5.current);
      cardObserver.observe(myproj6.current);
   }, []);
   return (
      <div className="ProjectConatiner">
         <div
            className="SkillHead"
            ref={projref}
         >
            <span className="NavLinkBullet">05.</span> Projects Work
            <div className="StraightLine"></div>
         </div>
         <div className="ProjectListCont gap-5">
            <div
               className="md:w-1/2 w-full md:block hidden h-[300px]"
               ref={myproj3}
            >
               <img
                  className="!w-full h-full object-center rounded-xl"
                  src={ss}
                  alt="icons"
               />
            </div>
            <div
               className="ProjectDescCont md:!w-1/2 !w-full project_card2"
               ref={myproj4}
            >
               <div className="ProjectDescHead">Parkit</div>
               <div className="ProjectDescPara">
                  decentralized parking management system leveraging blockchain technology. ParkIt
                  empowers users to securely list and rent parking spaces, while tracking
                  transactions transparently on the blockchain.
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Reactjs
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Tailwind CSS
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Hardhat
                  </div>
                  <div className="text-black py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Solidity
                  </div>
               </div>
               <div className="ProjectStackCont">
                  <a
                     href="https://github.com/Sayo1305/parkit-2?tab=readme-ov-file"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                     </svg>
                  </a>
                  <a
                     href="https://parkingit.netlify.app/"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-browser-chrome"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div className="ProjectListCont gap-5">
            <div
               className="md:w-1/2 w-full md:block hidden h-[300px]"
               ref={myproj2}
            >
               <img
                  className="!w-full h-full object-center rounded-xl"
                  src={BG}
                  alt=""
               />
            </div>
            <div
               className="ProjectDescCont md:!w-1/2 !w-full project_card2"
               ref={myproj}
            >
               <div className="ProjectDescHead">Shop.co</div>
               <div className="ProjectDescPara">
                  Developed a dynamic and user-friendly e-commerce frontend, enabling users to
                  search and filter products based on color, size, and other attributes. The
                  application includes dynamic filtering that updates as product selections change
                  and features pagination for an enhanced browsing experience.
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NextJs
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     PostgreSql
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ExpressJs
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NodeJs
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Supabase
                  </div>
                  <div className="text-black  py-1 font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     TypeScript
                  </div>
               </div>
               <div className="ProjectStackCont">
                  <a
                     href="https://github.com/Sayo1305/shop.co"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                     </svg>
                  </a>
                  {/* <a
                     href="https://work-zen.vercel.app/"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-browser-chrome"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                        />
                     </svg>
                  </a> */}
               </div>
            </div>
         </div>

         <div className="ProjectListCont gap-5">
            <div
               className="md:w-1/2 w-full md:block hidden h-[300px]"
               ref={myproj5}
            >
               <img
                  className="!w-full h-full object-center rounded-xl"
                  src={ss2}
                  alt="icons"
               />
            </div>
            <div
               className="ProjectDescCont md:!w-1/2 !w-full project_card2"
               ref={myproj6}
            >
               <div className="ProjectDescHead">Study space</div>
               <div className="ProjectDescPara w-full">
                  Developed a comprehensive educational management platform, StudySpace. StudySpace
                  facilitates efficient assignment distribution, progress tracking, and
                  communication between teachers and students, providing a user-friendly interface
                  and cost-effective solutions for educational institutions.
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NextJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     Tailwind
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     API
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NodeJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ExpressJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     MongoDB
                  </div>{" "}
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ShadCN
                  </div>
               </div>
               <div className="ProjectStackCont">
                  <a
                     href="https://github.com/Sarabjeet06/studyspace-frontend"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                     </svg>
                  </a>
                  <a
                     href="https://studyspace-frontend.vercel.app/"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="rgb(175, 175, 175)"
                        class="bi bi-browser-chrome"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                        />
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div className="OtherProjectHead mt-5">Other Projects</div>
         <div className="OtherProjectCont">
            <div className="ProjectCard">
               <div className="ProjectSymbol">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="rgb(175, 175, 175)"
                     class="bi bi-folder"
                     viewBox="0 0 16 16"
                  >
                     <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                  <a
                     href="https://authenticatewatchlist.netlify.app/"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <span className="NavLinkBullet clickpurple">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="rgb(175, 175, 175)"
                           class="bi bi-box-arrow-up-right"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                           />
                           <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                           />
                        </svg>{" "}
                     </span>
                  </a>{" "}
               </div>
               <div className="ProjectCardHead">Watch List</div>
               <div className="ProjectCardDesc">
                  Developed a dynamic and user-friendly WatchList, enabling users to search movies
                  based on their preference and added to watchlist. Can also handle multiple user
                  and store in local storage.
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     HTML
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     CSS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     JS
                  </div>
               </div>
            </div>
            <div className="ProjectCard">
               <div className="ProjectSymbol">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="rgb(175, 175, 175)"
                     class="bi bi-folder"
                     viewBox="0 0 16 16"
                  >
                     <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                  <a
                     href="https://github.com/Sayo1305/UserAuthenticatoe"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <span className="NavLinkBullet clickpurple">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="rgb(175, 175, 175)"
                           class="bi bi-box-arrow-up-right"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                           />
                           <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                           />
                        </svg>{" "}
                     </span>
                  </a>{" "}
               </div>

               <div className="ProjectCardHead">User Authentication</div>
               <div className="ProjectCardDesc">
                  This project is a simple React application that demonstrates user authentication
                  using JSON Web Tokens (JWT). The backend is built with Node.js and Express, and
                  MongoDB is used as the database.{" "}
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ReactJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NodeJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ExpressJS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     MONGODB
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     JWT
                  </div>
               </div>
            </div>
            <div className="ProjectCard">
               <div className="ProjectSymbol">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="rgb(175, 175, 175)"
                     class="bi bi-folder"
                     viewBox="0 0 16 16"
                  >
                     <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                  <a
                     href="https://github.com/Sayo1305/newsapp"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <span className="NavLinkBullet clickpurple">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="rgb(175, 175, 175)"
                           class="bi bi-box-arrow-up-right"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                           />
                           <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                           />
                        </svg>{" "}
                     </span>
                  </a>{" "}
               </div>
               <div className="ProjectCardHead">News App</div>
               <div className="ProjectCardDesc">
                  News website with top trending news and there links and also with search option
                  inorder to search with the use of pagination and API calling through backend
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ReactJs
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ExpressJs
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     API
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     NodeJs
                  </div>
               </div>
            </div>
            <div className="ProjectCard">
               <div className="ProjectSymbol">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="rgb(175, 175, 175)"
                     class="bi bi-folder"
                     viewBox="0 0 16 16"
                  >
                     <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                  </svg>
                  <a
                     href="https://github.com/Sayo1305/Movie_search_engine"
                     target={"_blank"}
                     rel="noreferrer"
                  >
                     <span className="NavLinkBullet clickpurple">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="rgb(175, 175, 175)"
                           class="bi bi-box-arrow-up-right"
                           viewBox="0 0 16 16"
                        >
                           <path
                              fill-rule="evenodd"
                              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                           />
                           <path
                              fill-rule="evenodd"
                              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                           />
                        </svg>{" "}
                     </span>
                  </a>{" "}
               </div>
               <div className="ProjectCardHead">Movie Search App</div>
               <div className="ProjectCardDesc">
                  Simple Movie Search App connect with API which gives the desired result of the
                  search.
               </div>
               <div className="ProjectStackCont">
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     ReactJs
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     CSS
                  </div>
                  <div className="text-black py-1  font_custom_mons bg-[#21AD67] text-xs flex items-center justify-center px-2 rounded-sm">
                     API
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Project;
