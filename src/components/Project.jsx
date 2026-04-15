import { useEffect, useRef } from "react";
import BG  from "../assets/images/shop.co.png";
import ss  from "../assets/images/parkit.png";
import ss2 from "../assets/images/study_space_2.png";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>
);
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
  </svg>
);

const Tag = ({ label }) => (
  <span className="font-source text-[var(--tag-text)] text-[0.72rem] px-2.5 py-1 bg-[var(--tag-bg)] rounded-md font-medium">
    {label}
  </span>
);

const IconBtn = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--badge-bg)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--badge-border)] transition-all"
  >
    {children}
  </a>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M12.854 3.146a.5.5 0 0 0-.708 0L5.5 9.793a.5.5 0 0 0 .708.707L12 4.707V12.5a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.146-.354z"/>
    <path fillRule="evenodd" d="M3.5 4a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5v7h7V7a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5V4z"/>
  </svg>
);

const FeatureMainCard = ({ cardRef, img, title, desc, tags, github, live }) => (
  <div ref={cardRef} className="proj-card relative overflow-hidden rounded-2xl border border-[var(--border-color)] min-h-[270px] md:min-h-[320px]">
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(4,9,29,0.92)] via-[rgba(8,18,46,0.76)] to-transparent" />
    <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
      </div>
      <h3 className="font-poppins text-[1.9rem] leading-tight font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300 max-w-[620px] leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-3">
        {github && <IconBtn href={github}><GithubIcon /></IconBtn>}
        {live && <IconBtn href={live}><LinkIcon /></IconBtn>}
      </div>
    </div>
  </div>
);

const FeatureSideCard = ({ cardRef, title, desc, tags, github, live }) => (
  <div
    ref={cardRef}
    className="proj-card bg-[linear-gradient(160deg,rgba(8,18,46,0.95),rgba(5,13,36,0.95))] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 min-h-[270px] md:min-h-[320px] flex flex-col"
  >
    <div className="w-10 h-10 rounded-xl border border-[var(--badge-border)] bg-[var(--badge-bg)] flex items-center justify-center text-[var(--accent)]">
      <FolderIcon />
    </div>
    <h3 className="mt-4 text-[1.9rem] leading-tight font-bold font-poppins text-white">{title}</h3>
    <p className="mt-3 text-sm text-slate-300 leading-relaxed">{desc}</p>
    <div className="mt-auto">
      <div className="flex flex-wrap gap-1.5 mb-4 mt-4">
        {tags.slice(0, 3).map((t) => <Tag key={t} label={t} />)}
      </div>
      <div className="flex gap-3">
        {github && <IconBtn href={github}><GithubIcon /></IconBtn>}
        {live && <IconBtn href={live}><LinkIcon /></IconBtn>}
      </div>
    </div>
  </div>
);

const FeatureSmallCard = ({ cardRef, title, desc, tags, link }) => (
  <div
    ref={cardRef}
    className="proj-card bg-[linear-gradient(160deg,rgba(8,18,46,0.95),rgba(5,13,36,0.95))] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 min-h-[220px] flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[var(--accent)]"><FolderIcon /></span>
        {link && <IconBtn href={link}><ArrowIcon /></IconBtn>}
      </div>
      <div className="font-bold text-white text-[1.35rem] mb-2 font-poppins">{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed">{desc}</div>
    </div>
    <div className="flex flex-wrap gap-1.5 mt-4">{tags.map(t => <Tag key={t} label={t} />)}</div>
  </div>
);

const FeatureWideCard = ({ cardRef, img, title, desc, tags, github, live }) => (
  <div ref={cardRef} className="proj-card relative rounded-2xl overflow-hidden border border-[var(--border-color)] min-h-[220px]">
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-[rgba(2,10,34,0.92)] to-[rgba(9,22,58,0.55)]" />
    <div className="relative z-10 p-5 md:p-7 h-full flex flex-col justify-center">
      <h3 className="font-poppins text-[2rem] font-bold leading-tight text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300 max-w-[540px] leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-3">
        {github && <IconBtn href={github}><GithubIcon /></IconBtn>}
        {live && <IconBtn href={live}><LinkIcon /></IconBtn>}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.slice(0, 4).map((t) => <Tag key={t} label={t} />)}
      </div>
    </div>
  </div>
);

const MiniCard = ({ cardRef, title, desc, tags, link }) => (
  <div
    ref={cardRef}
    className="proj-card bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5 w-full flex flex-col justify-between hover:border-[rgba(78,236,200,0.25)] hover:shadow-[0_4px_24px_var(--shadow-glow)] transition-all duration-200"
  >
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-[var(--text-secondary)]"><FolderIcon /></span>
        {link && <IconBtn href={link}><LinkIcon /></IconBtn>}
      </div>
      <div className="font-bold text-[var(--text-primary)] text-[1.02rem] mb-2 font-poppins">{title}</div>
      <div className="text-[var(--text-secondary)] text-sm leading-relaxed">{desc}</div>
    </div>
    <div className="flex flex-wrap gap-1.5 mt-4">{tags.map(t => <Tag key={t} label={t} />)}</div>
  </div>
);

const Project = ({ projref }) => {
  const r = { p3:useRef(),p4:useRef(),p2:useRef(),p1:useRef(),p5:useRef(),p6:useRef(),p7:useRef(),p8:useRef(),p9:useRef(),p10:useRef() };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { e.target.classList.toggle("show", e.isIntersecting); if(e.isIntersecting) obs.unobserve(e.target); });
    }, { threshold:0.3 });
    Object.values(r).forEach(ref => ref.current && obs.observe(ref.current));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-[88%] max-w-[1280px] mx-auto mb-[8%]">
      <div ref={projref} className="flex items-center gap-2 text-[var(--text-secondary)] text-2xl font-poppins font-extrabold mb-1">
        <span className="NavLinkBullet">06.</span> Featured Projects
      </div>
      <p className="font-fira text-[0.72rem] tracking-[0.12em] uppercase text-[var(--accent)] mb-6">
        Curated Work
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
        <div className="lg:col-span-8">
          <FeatureMainCard
            cardRef={r.p3}
            img={ss}
            title="Parkit"
            desc="Decentralized parking management system leveraging blockchain. ParkIt empowers users to securely list and rent parking spaces, tracking transactions transparently."
            tags={["React.js","Tailwind CSS","Hardhat","Solidity"]}
            github="https://github.com/Sayo1305/parkit-2?tab=readme-ov-file"
            live="https://parkingit.netlify.app/"
          />
        </div>
        <div className="lg:col-span-4">
          <FeatureSideCard
            cardRef={r.p4}
            title="Shop.co"
            desc="Dynamic e-commerce frontend with robust filtering, search and pagination built for smooth product discovery."
            tags={["Next.js","PostgreSQL","TypeScript"]}
            github="https://github.com/Sayo1305/shop.co"
          />
        </div>
        <div className="lg:col-span-4">
          <FeatureSmallCard
            cardRef={r.p2}
            title="Watch List"
            desc="Search-first watchlist product for multi-user local experience."
            tags={["HTML","CSS","JS"]}
            link="https://authenticatewatchlist.netlify.app/"
          />
        </div>
        <div className="lg:col-span-8">
          <FeatureWideCard
            cardRef={r.p1}
            img={ss2}
            title="Study Space"
            desc="Educational management platform for assignments, progress tracking and teacher-student collaboration."
            tags={["Next.js","Tailwind","Node.js","MongoDB"]}
            github="https://github.com/Sarabjeet06/studyspace-frontend"
            live="https://studyspace-frontend.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
