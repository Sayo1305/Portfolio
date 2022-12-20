import React, { useState , useRef } from 'react'
import '../assets/css/contact.css';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';


const Contact = ({contactref}) => {
  const [Name , SetName] = useState("");
  const [Email , SetEmail] = useState("");
  const [Topic , SetTopic] = useState("");
  const [Mess , SetMess] = useState("");
  const [clicked ,Setclicked] = useState(false);
  const change_name = (e)=>{
    SetName(e.target.value);
  }
  const change_email = (e)=>{
    SetEmail(e.target.value);
  }
  const change_topic = (e)=>{
    SetTopic(e.target.value);
  }
  const change_mess = (e)=>{
    SetMess(e.target.value);
  }
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
  const submit_detail = async(e)=>{
    e.preventDefault();
    Setclicked(true);
    if(Name === "" || Email === "" || Topic === "" || Mess === "")
    {
      Toast.fire({
        icon: 'error',
        title: "Fill the form Completely",
      })
      Setclicked(false);
      return;
    }
    emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, myform.current, process.env.REACT_APP_PUBLICKEY)
      .then((result) => {
          console.log(result.text);
          Toast.fire({
            icon: 'success',
            title: 'Email send successfully'
          })
          Setclicked(false);
      }, (error) => {
          console.log(error.text);
          Toast.fire({
            icon: 'error',
            title: 'Email not send'
          })
          Setclicked(false);
    }).catch((Errr)=>{
      Toast.fire({
        icon: 'error',
        title: Errr,
      })
      Setclicked(false);
    })
  }
  const myform = useRef();
  return (
    <div className='ContactCont'>
      <div ref={contactref} className='ContactHead'><span className="NavLinkBullet">04.</span>Get In Touch</div>
      <form ref={myform}>
            <div className='ContactFormCont'>
                  <div className='ContactInputDiv'>
                  <label className='ContactLabel'>Name</label>
                  <input className='ContactInput' name="user_name" value={Name} placeholder="Your Name" onChange={change_name} type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Email</label>
                  <input className='ContactInput'name="user_email" value={Email} placeholder="Your Email ID" onChange={change_email} type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Topic</label>
                  <input className='ContactInput'value={Topic}  name="topic" placeholder="Your Subject" onChange={change_topic} type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Message</label>
                  <textarea className='ContactInput'name="message" value={Mess} placeholder="Your Message" onChange={change_mess}></textarea>
                  </div>
                  {
                    (clicked === true ? (
                      <div>
                        <button className='ContactSubmit' type="submit" disabled onClick={submit_detail}>Submit</button>
                  </div>
                    ) : (
                      <div>
                        <button className='ContactSubmit' type="submit"  onClick={submit_detail}>Submit</button>
                  </div>
                    ))
                  }
                  
            </div>
      </form>
      <div className='LastCopy'>Built by <span className='NavLinkBullet'>@Unnat Das</span> </div>
    </div>
  )
}

export default Contact