import { useState, useRef } from "react";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

const Contact = ({ contactref }) => {
  const [Name,  setName]  = useState("");
  const [Email, setEmail] = useState("");
  const [Topic, setTopic] = useState("");
  const [Mess,  setMess]  = useState("");
  const [busy,  setBusy]  = useState(false);
  const myform = useRef();

  const Toast = Swal.mixin({ toast:true, position:"top-end", showConfirmButton:false, timer:3000, timerProgressBar:true });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    if (!Name || !Email || !Topic || !Mess) {
      Toast.fire({ icon:"error", title:"Fill the form completely" });
      setBusy(false); return;
    }
    try {
      const res = await fetch("https://nodemailer-portfolio-cyan.vercel.app/send_mail", {
        method:"POST", headers:{"content-type":"application/json"},
        body: JSON.stringify({ name:Name, email:Email, subject:Topic, message:Mess, password:process.env.REACT_APP_PASSWORD }),
      });
      res.ok
        ? Toast.fire({ icon:"success", title:"Message sent!" })
        : Toast.fire({ icon:"error",   title:"Error sending email" });
    } catch {
      Toast.fire({ icon:"error", title:"Error sending email" });
    } finally { setBusy(false); }
  };

  const inputCls = "w-full outline-none rounded-lg bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] text-base px-3 py-2 focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-secondary)] placeholder:opacity-60";
  const labelCls = "font-nerko text-[var(--accent)] text-sm mb-1";

  return (
    <div className="w-[88%] max-w-[1280px] mx-auto mt-[8%] text-center text-[var(--text-secondary)]">
      <div ref={contactref} className="font-poppins font-bold text-2xl text-[var(--text-primary)] mb-2">
        <span className="NavLinkBullet">05.</span> Get In Touch
      </div>
      <p className="text-[var(--text-secondary)] text-sm mb-8">Have an opportunity or just want to say hi? Drop a message.</p>

      <form ref={myform} onSubmit={submit}
        className="w-full max-w-lg mx-auto bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 flex flex-col gap-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-start">
          <label className={labelCls}>Name</label>
          <input className={inputCls} value={Name} placeholder="Your Name" onChange={e=>setName(e.target.value)} />
        </div>
        <div className="flex flex-col items-start">
          <label className={labelCls}>Email</label>
          <input className={inputCls} value={Email} placeholder="Your Email" onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col items-start">
          <label className={labelCls}>Topic</label>
          <input className={inputCls} value={Topic} placeholder="Subject" onChange={e=>setTopic(e.target.value)} />
        </div>
        <div className="flex flex-col items-start">
          <label className={labelCls}>Message</label>
          <textarea className={`${inputCls} min-h-[100px] resize-y`} value={Mess} placeholder="Your message..." onChange={e=>setMess(e.target.value)} />
        </div>
        <div className="flex justify-center">
          <button disabled={busy} type="submit"
            className="flex items-center gap-2 px-8 py-2.5 bg-[var(--accent)] text-[#0a0f2e] font-poppins font-bold rounded-lg cursor-pointer hover:bg-[var(--accent-hover)] transition-all disabled:opacity-60">
            Submit <PulseLoader color="#0a0f2e" loading={busy} size={8} />
          </button>
        </div>
      </form>

      <div className="font-source text-[0.9rem] text-[var(--text-secondary)] py-3 mt-[6%]">
        Built by <span className="NavLinkBullet">@Unnat Das</span>
      </div>
    </div>
  );
};

export default Contact;
