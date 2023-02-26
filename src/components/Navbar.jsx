import React, { useEffect, useState } from "react";
import "../assets/css/navbar.css";
const Navbar = ({
  contactref,
  aboutref,
  projref,
  expref,
  setscrollstop,
  scrollstop,
}) => {
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
    <>
      <div className={`${Navbarclass} ${NavbarclassExtra}`}>
        <div
          className="SpNav"
          onClick={() => {
            window.scroll(0, 0);
          }}
          style={{ cursor: "pointer" }}
        >
          Unnat Das
        </div>
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
                top: expref.current.offsetTop - 100,
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
                top: contactref.current.offsetTop - 100,
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
              without
              rel="noreferrer"
              href="https://drive.google.com/file/d/1lQbxg8ugx_F5nsqGSZQMn95nkhpSEvZR/view?usp=sharing"
            >
              <button className="NavLinkButton">Resume</button>
            </a>
          </div>
        </div>
        <div className="NavLinksRep">
          <div
            onClick={() => {
              setscrollstop((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
      </div>
      {scrollstop === true && (
        <div className="navbarrepcont">
          <div
            className="overlaynavbarrep"
            onClick={() => {
              setscrollstop((prev) => !prev);
            }}
          ></div>
          <div className="navbarrepmenu">
            <div
              onClick={() => {
                setscrollstop((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="#fff"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
            <div className="navbarrepmenuitems">
              <div
                className="NavLinkText"
                onClick={() => {
                  window.scrollTo({
                    top: aboutref.current.offsetTop - 100,
                    left: 0,
                    behavior: "smooth",
                  });
                  setscrollstop((prev) => !prev);
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
                  setscrollstop((prev) => !prev);
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
                    top: expref.current.offsetTop - 100,
                    left: 0,
                    behavior: "smooth",
                  });
                  setscrollstop((prev) => !prev);
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
                    top: contactref.current.offsetTop - 100,
                    left: 0,
                    behavior: "smooth",
                  });
                  setscrollstop((prev) => !prev);
                }}
              >
                {" "}
                <span className="NavLinkBullet">04.</span>Contact
              </div>
              <div className="NavLinkText">
                <a
                  target={"_blank"}
                  without
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1lQbxg8ugx_F5nsqGSZQMn95nkhpSEvZR/view?usp=sharing"
                >
                  <button className="NavLinkButton">Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
