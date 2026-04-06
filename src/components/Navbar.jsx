import React, { useEffect, useState } from "react";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const NAV_LINKS = [
  { num: "01.", label: "About",      ref: "aboutref" },
  { num: "02.", label: "Project",    ref: "projref" },
  { num: "03.", label: "Experience", ref: "expref" },
  { num: "04.", label: "Contact",    ref: "contactref" },
];

const RESUME = "https://drive.google.com/file/d/1ed2vU9gTm4Z8ED0stgaJl3Hm5HA54vrZ/view?usp=sharing";

const Navbar = ({ contactref, aboutref, projref, expref, setscrollstop, scrollstop, theme, toggleTheme }) => {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden,   setHidden]     = useState(false);
  const [lastY,    setLastY]      = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y >= window.innerHeight);
      if (y >= 400) setHidden(y > lastY);
      else setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const refs = { aboutref, projref, expref, contactref };
  const scrollTo = (refKey) =>
    window.scrollTo({ top: refs[refKey].current.offsetTop - 100, behavior: "smooth" });

  const navBase = `fixed w-full h-20 z-10 px-5 flex items-center justify-between font-fira transition-all duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`;
  const navBg   = scrolled
    ? "bg-[var(--navbar-bg)] backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
    : "bg-[var(--navbar-bg)] backdrop-blur-md";

  const ThemeBtn = ({ mobile }) => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`flex items-center justify-center w-9 h-9 rounded-lg border border-slate-600 bg-[var(--badge-bg)] text-[var(--text-primary)] cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all ${mobile ? "mr-2" : ""}`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <>
      <div className={`${navBase} ${navBg}`}>
        {/* Logo */}
        <div onClick={() => window.scroll(0,0)} className="font-nerko text-2xl text-[var(--text-primary)] cursor-pointer">
          Unnat Das
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {NAV_LINKS.map(({ num, label, ref }) => (
            <div key={label} onClick={() => scrollTo(ref)}
              className="text-sm text-[var(--text-primary)] cursor-pointer hover:text-[var(--accent)] transition-colors">
              <span className="NavLinkBullet">{num}</span>{label}
            </div>
          ))}
          <a href={RESUME} target="_blank" rel="noreferrer">
            <button className="bg-transparent text-[var(--text-primary)] font-fira cursor-pointer border border-slate-600 text-sm px-3 py-1.5 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              Resume
            </button>
          </a>
          <ThemeBtn />
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center">
          <ThemeBtn mobile />
          <div onClick={() => setscrollstop(p => !p)} className="text-[var(--accent)] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {scrollstop && (
        <div className="fixed flex w-full h-screen z-10 overflow-hidden">
          <div className="w-[40%] bg-black/50 animate-[fadein_.3s_ease-in-out]"
            onClick={() => setscrollstop(p => !p)} />
          <div className="w-[60%] bg-[var(--bg-primary)] border-l border-[var(--border-color)] p-5 animate-[slideIn_.35s_ease-in-out]">
            <div className="flex justify-end mb-4" onClick={() => setscrollstop(p => !p)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="var(--text-primary)" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </div>
            <div className="flex flex-col gap-5 items-center">
              {NAV_LINKS.map(({ num, label, ref }) => (
                <div key={label} onClick={() => { scrollTo(ref); setscrollstop(p => !p); }}
                  className="text-sm text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent)] transition-colors">
                  <span className="NavLinkBullet">{num}</span>{label}
                </div>
              ))}
              <a href={RESUME} target="_blank" rel="noreferrer">
                <button className="bg-transparent text-[var(--text-primary)] font-fira border border-slate-600 text-sm px-3 py-1.5 rounded-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  Resume
                </button>
              </a>
              <a href="https://github.com/Sayo1305" target="_blank" rel="noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
