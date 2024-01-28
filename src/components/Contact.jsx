import React, { useState , useRef } from 'react'
import '../assets/css/contact.css';
import Swal from 'sweetalert2'
import { PulseLoader } from 'react-spinners';


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
      });
      Setclicked(false);
      return;
    }
    try{
      const res = await fetch('https://nodemailer-portfolio-cyan.vercel.app/send_mail' , {
        method : "POST",
        headers : {
          'content-type': 'application/json',
        },
        body : JSON.stringify({
          "name" : Name,
          "email" : Email,
          "subject" : Topic,
          "message" : Mess,
          "password" : process.env.REACT_APP_PASSWORD,
        })
      });
      if(res.ok){
        Toast.fire({
          icon : "success",
          title : "Your Message Sent",
        });
      }else{
        Toast.fire({
          icon : "error",
          title : "Error in sending email, try with sidebar email",
        })
      }
    }catch(err){
      console.error(err);
      Toast.fire({
        icon : "error",
        title : "Error in sending email, try with sidebar email",
      })
    }finally{
      Setclicked(false);
    }
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
                  <div style={{"display" : "flex" , "justifyContent" : "center" }}>
                  <button disabled={clicked} className='ContactSubmit' type="submit"  onClick={submit_detail}>Submit
                   <PulseLoader color='#000'  loading={clicked} size={10}/></button>
                  </div>
                  
            </div>
      </form>
      <div className='LastCopy'>Built by <span className='NavLinkBullet'>@Unnat Das</span> </div>
    </div>
  )
}

export default Contact