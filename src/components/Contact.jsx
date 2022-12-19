import React from 'react'
import '../assets/css/contact.css';
const Contact = ({contactref}) => {
  return (
    <div className='ContactCont'>
      <div ref={contactref} className='ContactHead'><span className="NavLinkBullet">04.</span>Get In Touch</div>
      <form>
            <div className='ContactFormCont'>
                  <div className='ContactInputDiv'>
                  <label className='ContactLabel'>Name</label>
                  <input className='ContactInput' type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Email</label>
                  <input className='ContactInput' type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Topic</label>
                  <input className='ContactInput' type={"text"}></input>
                  </div>
                  <div className='ContactInputDiv'>
                  <label  className='ContactLabel'>Message</label>
                  <textarea className='ContactInput'></textarea>
                  </div>
                  <div>
                        <button className='ContactSubmit' type="submit">Submit</button>
                  </div>
            </div>
      </form>
      <div className='LastCopy'>Built by <span className='NavLinkBullet'>@Unnat Das</span> </div>
    </div>
  )
}

export default Contact