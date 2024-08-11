/** @format */

import React from "react";
import "../assets/css/exp.css";
import glazegpt_logo from "../assets/images/glazegpt_logo.jpeg";
import monhood_logo from "../assets/images/gharbar_logo.jpeg";
import satyuglabs_logo from "../assets/images/satyugLogo.png";
import bcg_logo from "../assets/images/boston_consulting_group_logo.jpeg";
import entvin_logo from "../assets/images/entvin_logo.jpeg";
const Exp = ({ expref }) => {
   return (
      <div className="ExpContainer">
         <div
            className="ExpHead"
            ref={expref}
         >
            <span className="NavLinkBullet ">02.</span> Experience
            <div className="StraightLine"></div>
         </div>
         <div className="Expshowcase border !border-gray-500 my-4 rounded-md md:!p-10 !p-5 bg-[#171f41]">
            <div className="w-full flex md:flex-row flex-col gap-4 items-start">
               <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src={satyuglabs_logo}
                  alt="icons"
               />
               <div>
                  <div>Full Stack Developer Intern</div>
                  <div>
                     {" "}
                     <a
                        href="https://satyug.vercel.app/"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        <span className="NavLinkBullet  clickpurple">@Satyug Labs </span>
                     </a>{" "}
                  </div>
                  <div className="ExpDate text-xs font_custom_mons !font-medium">
                     Nov-22 | Feb-23 | Delhi (freelance)
                  </div>
                  <div className="my-3 font-medium !text-sm font_custom_mons">
                     Developed a prototype of satyug metaverse which include a mini game, minting of
                     nft.
                  </div>
                  <div className="flex my-3 gap-3 items-start justify-start flex-wrap">
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Reactjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        JavaScript
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Nodejs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Expressjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        metamask
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Etherjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        whatsapp API
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        MongoDB
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 items-start">
               <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src={monhood_logo}
                  alt="icons"
               />
               <div>
                  <div>Web Developer Intern</div>
                  <div>
                     {" "}
                     <a
                        href="https://monkhood.in/"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        <span className="NavLinkBullet  clickpurple">@Monkhood Living </span>
                     </a>{" "}
                  </div>
                  <div className="ExpDate text-xs font_custom_mons !font-medium">
                     Mar-23 | Nov-23 | Delhi
                  </div>
                  <div className="my-3 font-medium !text-sm font_custom_mons">
                     As a Web Developer Intern at Monkhood Living, spearheaded frontend development,
                     leveraging React.js, Tailwind CSS, Node.js, Firebase, and Cashfree.
                     Successfully integrated seamless payment gateways across multiple pages,
                     significantly enhancing user convenience and satisfaction.
                  </div>
                  <div className="flex my-3 gap-3 items-start justify-start flex-wrap">
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Reactjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Tailwind CSS
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Nodejs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Expressjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Firebase
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        CashFree API
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        MongoDB
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 items-start">
               <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src={glazegpt_logo}
                  alt="icons"
               />
               <div>
                  <div>Full Stack Developer</div>
                  <div>
                     {" "}
                     <a
                        href="https://www.glazegpt.com/"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        <span className="NavLinkBullet clickpurple">@GlazeGpt </span>
                     </a>{" "}
                  </div>
                  <div className="ExpDate text-xs font_custom_mons !font-medium">
                     Aug-23 | Jun-24 | Remote
                  </div>
                  <div className="my-3 font-medium !text-sm font_custom_mons">
                     Engineered high-performing web applications using Next.js for server-side
                     rendering, Tailwind CSS for responsive design, and PostgreSQL for efficient
                     data management; optimized load times by 20 percent.
                  </div>
                  <div className="flex my-3 gap-3 items-start justify-start flex-wrap">
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Nextjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Tailwind CSS
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Redux Toolkit
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Next Auth
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Nodejs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Expressjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        PostgreSQL(TypeORM)
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Open AI
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        MongoDB
                     </div>
                  </div>
               </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4 items-start">
               <img
                  className="w-12 h-12 object-cover rounded-xl"
                  src={entvin_logo}
                  alt="icons"
               />
               <div>
                  <div>Software Engineer</div>
                  <div>
                     {" "}
                     <a
                        href="https://entvin.com/"
                        target={"_blank"}
                        rel="noreferrer"
                     >
                        <span className="NavLinkBullet clickpurple">@Entvin (YC S22) </span>
                     </a>{" "}
                  </div>
                  <div className="ExpDate text-xs font_custom_mons !font-medium">
                     July -24 | Present | Banglore
                  </div>
                  <div className="my-3 font-medium !text-sm font_custom_mons">
                     Engineering high-performing web applications using React.js, Tailwind CSS for
                     responsive design, Redux for state management and FastAPI for scalable backend services.
                  </div>
                  <div className="flex my-3 gap-3 items-start justify-start flex-wrap">
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Reactjs
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Tailwind CSS
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Redux Toolkit
                     </div>
                     {/* <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Next Auth
                     </div> */}
                     {/* <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Nodejs
                     </div> */}
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        Python
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        SQL
                     </div>
                     <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        FAST API
                     </div>
                     {/* <div className="font_custom_mons !font-medium bg-[#21AD67] text-black !border-black text-xs p-1 px-3 rounded-md border">
                        MongoDB
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Exp;
