import React from 'react'
import "../assets/css/sidecontact.css";

const SlideEmail = ({ visible }) => {
  return (
    <div className={`SlideEmail${visible ? " side-visible" : ""}`}>
      <a className='tilttext clickpurple' href="mailto:udas4153@gmail.com">udas4153@gmail.com</a>
      <div style={{ right: "1%", height: "300px" }} className="HorizontalLine"></div>
    </div>
  )
}

export default SlideEmail
