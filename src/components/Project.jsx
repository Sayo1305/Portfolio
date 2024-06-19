import React, { useEffect, useRef } from "react";
import "../assets/css/project.css";
import BG from "../assets/images/workzen.png";
import ss from "../assets/images/parkit.png";
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
      <div className="SkillHead" ref={projref}>
        <span className="NavLinkBullet">05.</span> Projects Work
        <div className="StraightLine"></div>
      </div>
      <div className="ProjectListCont">
        <div className="ProjectImageContainer project_card1" ref={myproj3}>
          <img
            className="ProjectImage  !object-contain"
            src={ss}
            alt="icons"
          />
        </div>
        <div className="ProjectDescCont project_card2" ref={myproj4}>
          <div className="ProjectDescHead">
            Parkit
          </div>
          <div className="ProjectDescPara">
          decentralized parking management system leveraging blockchain technology. ParkIt empowers users
          to securely list and rent parking spaces, while tracking transactions transparently on the blockchain.
          </div>
          <div className="ProjectStackCont">
            <div>Reactjs</div>
            <div>Tailwind CSS</div>
            <div>Hardhat</div>
            <div>Solidity</div>
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
      <div className="ProjectListCont">
        <div className="ProjectImageContainer project_card4" ref={myproj2}>
          <img
            className="ProjectImage"
            src={BG}
            alt=""
          />
        </div>
        <div className="ProjectDescCont project_card1" ref={myproj}>
          <div className="ProjectDescHead">WorkZen</div>
          <div className="ProjectDescPara">
            A MERN stack APP where user can sign in and assign task and manages task in a organisation.
            with user management tab,  for access. Graphs and charts to visualization of the task in a team. 
          </div>
          <div className="ProjectStackCont">
            <div>NextJs</div>
            <div>MongoDB</div>
            <div>ExpressJs</div>
            <div>NodeJs</div>
            <div>JWT</div>
          </div>
          <div className="ProjectStackCont">
            <a
              href="https://github.com/Sayo1305/WorkZen"
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
            </a>
          </div>
        </div>
      </div>
  

      <div className="ProjectListCont">
        <div className="ProjectImageContainer project_card1" ref={myproj5}>
          <img
            className="ProjectImage"
            src="https://user-images.githubusercontent.com/84987518/208168646-9b746fd6-af8c-454a-9df2-a25bd91ff496.png"
            alt=""
          />
        </div>
        <div className="ProjectDescCont project_card2" ref={myproj6}>
          <div className="ProjectDescHead">Weather App</div>
          <div className="ProjectDescPara">
            A react Project with search suggestion on typing and get the
            realtime data and also the prediction of post 3 days by using API.
          </div>
          <div className="ProjectStackCont">
            <div>ReactJs</div>
            <div>Tailwind</div>
            <div>API</div>
            <div>NodeJs</div>
          </div>
          <div className="ProjectStackCont">
            <a
              href="https://github.com/Sayo1305/mausumapp"
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
              href="https://mausumapp.netlify.app/"
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
      <div className="OtherProjectHead">Other Projects</div>
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
            IT is simple react app in which I have created a prototype of
            Authentication Using JWT .
          </div>
          <div className="ProjectStackCont">
            <div>ReactJS</div>
            <div>NodeJS</div>
            <div>ExpressJS</div>
            <div>MONGODB</div>
            <div>JWT</div>
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
            News website with top trending news and there links and also with search option inorder to search
            with the use of pagination and API calling through backend
          </div>
          <div className="ProjectStackCont">
            <div>ReactJs</div>
            <div>ExpressJs</div>
            <div>API</div>
            <div>NodeJs</div>
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
            Simple Movie Search App connect with API which gives the desired
            result of the search.
          </div>
          <div className="ProjectStackCont">
            <div>ReactJs</div>
            <div>CSS</div>
            <div>API</div>
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
              href="https://github.com/besttomodachiclub/BestTomodachi"
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
          <div className="ProjectCardHead">NFT portfolio site</div>
          <div className="ProjectCardDesc">
            Nft portfolio with multiple pages and responsive for both mobile and
            pc. Tech stack: HTML, CSS and Javascript.
          </div>
          <div className="ProjectStackCont">
            <div>HTML</div>
            <div>CSS</div>
            <div>JS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
