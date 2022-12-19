import React, { useEffect, useState } from "react";
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";
import "../assets/css/navbar.css";
const Navbar = ({ contactref, aboutref, projref, expref }) => {
  const [Navbarclass, SetNavbarclass] = useState("Navbar");
  const [NavbarclassExtra, SetNavbarclassExtra] = useState("");
  const [ScrollData, SetScrollData] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 145
        ? SetNavbarclass("NavbarDown")
        : SetNavbarclass("Navbar");
      if (window.scrollY >= 400) {
        if (ScrollData < window.scrollY) {
          SetScrollData(window.scrollY);
          SetNavbarclassExtra("NavbarMoveUp");
        } else {
          SetScrollData(window.scrollY);
          SetNavbarclassExtra("NavbarMoveDown");
        }
      } else {
        SetNavbarclassExtra("");
      }
    });
  }, [ScrollData]);
  return (
    <div className={`${Navbarclass} ${NavbarclassExtra}`}>
      <div className="SpNav" onClick={()=>{window.scroll(0,0)}} style={{"cursor" : "pointer"}}>Unnat Das</div>
      <div className="NavLinks">
        <div
          className="NavLinkText"
          onClick={() => {
            window.scrollTo({
              top: aboutref.current.offsetTop - 100,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {" "}
          <span className="NavLinkBullet">01.</span>
          About
        </div>
        <div
          className="NavLinkText"
          onClick={() => {
            window.scrollTo({
              top: projref.current.offsetTop - 100,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {" "}
          <span className="NavLinkBullet">02.</span>
          Project
        </div>
        <div
          className="NavLinkText"
          onClick={() => {
            window.scrollTo({
              top: expref.current.offsetTop- 100,
              left: 0,
              behavior: "smooth",
            });
            console.log("Clocked");
          }}
        >
          {" "}
          <span className="NavLinkBullet">03.</span>
          Experience
        </div>
        <div
          className="NavLinkText"
          onClick={() => {
            window.scrollTo({
              top: contactref.current.offsetTop- 100,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          {" "}
          <span className="NavLinkBullet">04.</span>Contact
        </div>
        <div className="NavLinkText">
        <a
          target={"_blank"}
          without rel="noreferrer" 
          href="https://drive.google.com/file/d/1lQbxg8ugx_F5nsqGSZQMn95nkhpSEvZR/view?usp=sharing"
        >
          <button className="NavLinkButton">Resume</button>
          </a>
        </div>
      </div>
      <div className="NavLinksRep">
        <CircleMenu
          startAngle={90}
          rotationAngle={100}
          itemSize={2}
          radius={8}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem
            tooltip="Project"
            tooltipPlacement={TooltipPlacement.Top}
            onClick={() => {
              window.scrollTo({
                top: projref.current.offsetTop - 100,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="#000"
              class="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Contact"
          onClick={() => {
            window.scrollTo({
              top: contactref.current.offsetTop - 100,
              left: 0,
              behavior: "smooth",
            });
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="#000"
              class="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Resume">
          <a
          target={"_blank"}
          without rel="noreferrer" 
          href="https://drive.google.com/file/d/1lQbxg8ugx_F5nsqGSZQMn95nkhpSEvZR/view?usp=sharing"
        >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="#000"
              class="bi bi-file-earmark-richtext"
              viewBox="0 0 16 16"
            >
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
              <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" />
            </svg>
            </a>
          </CircleMenuItem>
          <CircleMenuItem
            onClick={() => {
              window.scrollTo({
                top: aboutref.current.offsetTop - 100,
                left: 0,
                behavior: "smooth",
              });
            }}
            tooltip="About"
            tooltipPlacement={TooltipPlacement.Top}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillRule="#000"
              class="bi bi-tags"
              viewBox="0 0 16 16"
            >
              <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
              <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
            </svg>
          </CircleMenuItem>
        </CircleMenu>
      </div>
    </div>
  );
};

export default Navbar;
