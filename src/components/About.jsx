import React from "react";
import "../assets/css/about.css";
import profilepic from "../assets/images/Unnat Das.jpg";
const About = ({aboutref}) => {
  return (
    <div className="AboutSection">
      <div className="AboutHead" ref={aboutref}>
        {" "}
        <span className="NavLinkBullet">01.</span> About Me
        <div className="StraightLine"></div>
      </div>
      <div className="AboutSubSection">
        <div className="AboutPara">
          My name is Unnat Das, currently pursuing Btech [3rd year] have
          curiosity in Programming, problem-solving, and software development. I
          have good understanding of front-end development and also in{" "}
          <span className="NavLinkBullet"> MERN </span>
          stack. and have very much fascinated by competitive programming. I
          have solved more than (500+) questions from major platforms like{" "}
          <a
                href="https://www.codechef.com/users/sayo_13"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@Codechef </span>
              </a>{" "},
          <a
                href="https://codeforces.com/profile/sayo_13"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@Codeforces </span>
              </a>{" "}
          <a
                href="https://leetcode.com/sayo_13/"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@leetcode </span>
              </a>, and{" "}
              <a
                href="https://www.hackerrank.com/sayo_13?hr_r=1"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@HackerRank </span>
              </a>{" "}. I had a rating
          <span className="NavLinkBullet">
            {" "}
            <a
                href="https://www.codechef.com/users/sayo_13"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@Codechef </span>
              </a>{" "} max(3){" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#00FF7F"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>{" "}
          </span>
          , and <a
                href="https://codeforces.com/profile/sayo_13"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@Codeforces </span>
              </a>{" "}.
          Also Participated in few hackathons (WEB3) like <a
                href="https://solana.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@solana </span>
              </a>{" "} ,
              <a
                href="https://polygon.technology/"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@polygon </span>
              </a>{" "}
               ,
               <a
                href="https://www.lumoslabs.co/"
                target={"_blank"}
                rel="noreferrer"
              >
                <span className="NavLinkBullet clickpurple">@lumos labs </span>
              </a>{" "}. My goal is to keep trying to improve and be a better
          version of myself.
        </div>
        <div className="ImageContAbout">
          <img className="AboutImage" src={profilepic} alt="profilepic" />
        </div>
      </div>
    </div>
  );
};

export default About;
