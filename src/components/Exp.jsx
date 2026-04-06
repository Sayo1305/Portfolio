import glazegpt_logo from "../assets/images/glazegpt_logo.jpeg";
import monhood_logo  from "../assets/images/gharbar_logo.jpeg";
import satyuglabs_logo from "../assets/images/satyugLogo.png";
import entvin_logo   from "../assets/images/entvin_logo.jpeg";

const getDuration = (startStr, endStr) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const parse = (s) => { const [m,y] = s.trim().split(" "); return new Date(+y, months.indexOf(m)); };
  const start = parse(startStr);
  const end   = endStr ? parse(endStr) : new Date();
  let mo = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (mo < 1) mo = 1;
  const y = Math.floor(mo/12), m = mo%12;
  if (y===0) return `${m} mo${m>1?"s":""}`;
  if (m===0) return `${y} yr${y>1?"s":""}`;
  return `${y} yr${y>1?"s":""} ${m} mo${m>1?"s":""}`;
};

const Tag = ({ label }) => (
  <span className="font-fira text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] whitespace-nowrap">
    {label}
  </span>
);

const ExpCard = ({ logo, logoAlt, role, company, companyUrl, date, start, end, location, type, description, tags, current }) => (
  <div className="relative pb-10 last:pb-0">
    <div className="exp-dot" />
    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-5 md:p-6 hover:border-[rgba(78,236,200,0.25)] hover:shadow-[0_4px_24px_var(--shadow-glow)] transition-all duration-200">
      {/* Header */}
      <div className="flex items-start gap-4 mb-3">
        <div className="flex-shrink-0">
          {logo
            ? <img src={logo} alt={logoAlt} className="w-11 h-11 rounded-[10px] object-cover border border-[var(--border-color)]" />
            : <div className="w-11 h-11 rounded-[10px] flex items-center justify-center bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)] font-fira font-bold text-base">
                {logoAlt?.[0] ?? "?"}
              </div>
          }
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-poppins font-bold text-[var(--text-primary)] text-[1rem]">{role}</span>
            {current && (
              <span className="font-fira text-[0.65rem] font-semibold tracking-[0.08em] px-2 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--accent)]">
                Present
              </span>
            )}
          </div>
          <a href={companyUrl} target="_blank" rel="noreferrer"
            className="NavLinkBullet clickpurple font-fira text-[0.88rem] transition-colors">
            {company}
          </a>
          <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
            <span className="font-fira text-[0.78rem] text-[var(--accent)] font-semibold">{date}</span>
            <span className="text-[0.65rem] text-[var(--text-secondary)] opacity-50">·</span>
            <span className="font-fira text-[0.78rem] text-[var(--text-secondary)] opacity-75">{getDuration(start, end)}</span>
            <span className="text-[0.65rem] text-[var(--text-secondary)] opacity-50">·</span>
            <span className="font-fira text-[0.78rem] text-[var(--text-secondary)]">{location}</span>
            {type && <>
              <span className="text-[0.65rem] text-[var(--text-secondary)] opacity-50">·</span>
              <span className="font-fira text-[0.78rem] text-[var(--text-secondary)]">{type}</span>
            </>}
          </div>
        </div>
      </div>

      <p className="text-[0.9rem] leading-[1.72] text-[var(--text-secondary)] mb-3">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => <Tag key={t} label={t} />)}
      </div>
    </div>
  </div>
);

const Exp = ({ expref }) => (
  <div className="w-[88%] max-w-[1280px] mx-auto mt-[8%] text-[var(--text-secondary)]">
    <div ref={expref} className="flex items-center gap-2 text-[var(--text-secondary)] text-2xl font-poppins font-extrabold mb-10">
      <span className="NavLinkBullet">02.</span> Experience
      <div className="flex-1 h-px bg-[var(--border-color)] max-w-[50%]" />
    </div>

    <div className="exp-timeline pl-7">
      <ExpCard logo={null} logoAlt="Pep" role="Software Engineer — SDE 1"
        company="@Pep · Equation Internet Pvt. Ltd."
        companyUrl="https://play.google.com/store/apps/details?id=pep.live&hl=en_IN"
        date="Oct 2025 — Present" start="Oct 2025" location="Bengaluru" type="Full-time" current
        description="Working as SDE-1 across mobile (Kotlin) and web (React.js), primarily on Clip AI — a text-to-video creation platform. Integrated frontend features including text-to-video generation, PhonePe payment gateway, and polling. Implemented deep links, Facebook Ads deep links with proper data handling for deep-link login flows."
        tags={["Kotlin","Jetpack Compose","Coroutines","React.js","Tailwind CSS","AWS","CloudFront","Docker","Android Studio","PhonePe","Deep Links","Facebook Ads SDK"]}
      />
      <ExpCard logo={null} logoAlt="FL" role="Frontend Lead (Freelance)"
        company="@Stealth Startup" companyUrl="#"
        date="Aug 2025 — Oct 2025" start="Aug 2025" end="Oct 2025" location="Remote" type="Freelance"
        description="Led frontend development at a stealth-stage startup. Drove code reviews, component reuse, and API call optimisation. Owned the full deployment pipeline — containerised services with Docker, deployed to GCP Cloud Run, and set up scheduled jobs via Cloud Build cron."
        tags={["React.js","GCP Cloud Run","Docker","Cloud Build","Cron Jobs","Code Review","API Optimisation"]}
      />
      <ExpCard logo={entvin_logo} logoAlt="Entvin" role="Founding Engineer"
        company="@Entvin (YC S22)" companyUrl="https://entvin.com/"
        date="Jul 2024 — Aug 2025" start="Jul 2024" end="Aug 2025" location="Bengaluru" type="Full-time"
        description="Independently engineered 4+ frontend applications improving load speed by 40%. Architected 3+ backend services in FastAPI and Go (GIN) — covering LLM integrations, automation scripts, and cron jobs. Integrated RAG to power AI-driven product features. Managed deployments with NGINX across AWS and GCP."
        tags={["React.js","Redux Toolkit","Tailwind CSS","MUI","FastAPI","Python","SQLAlchemy","Go (GIN)","NGINX","AWS","GCP","RAG","LLM"]}
      />
      <ExpCard logo={glazegpt_logo} logoAlt="GlazeGPT" role="Full Stack Developer Intern"
        company="@GlazeGPT"
        companyUrl="https://www.linkedin.com/company/glazegpt/posts/?feedView=all"
        date="Aug 2023 — Jun 2024" start="Aug 2023" end="Jun 2024" location="Remote" type="Internship"
        description="Interned as a Full Stack Developer, engineering high-performing web applications using Next.js for server-side rendering, Tailwind CSS for responsive design, and PostgreSQL for efficient data management. Optimised load times by 20%."
        tags={["Next.js","Tailwind CSS","Redux Toolkit","Next Auth","Node.js","Express.js","PostgreSQL","TypeORM","OpenAI","MongoDB"]}
      />
      <ExpCard logo={monhood_logo} logoAlt="Monkhood" role="Web Developer Intern"
        company="@Monkhood Living" companyUrl="https://monkhood-frontend.vercel.app/"
        date="Mar 2023 — Nov 2023" start="Mar 2023" end="Nov 2023" location="Delhi" type="Internship"
        description="Spearheaded frontend development using React.js, Tailwind CSS, Node.js, and Firebase. Integrated seamless payment gateways across multiple pages, significantly enhancing user convenience."
        tags={["React.js","Tailwind CSS","Node.js","Express.js","Firebase","CashFree API","MongoDB"]}
      />
      <ExpCard logo={satyuglabs_logo} logoAlt="Satyug" role="Full Stack Developer Intern"
        company="@Satyug Labs" companyUrl="https://satyug.vercel.app/"
        date="Nov 2022 — Feb 2023" start="Nov 2022" end="Feb 2023" location="Delhi" type="Freelance"
        description="Developed a prototype of the Satyug metaverse including a mini game and NFT minting flow."
        tags={["React.js","JavaScript","Node.js","Express.js","MetaMask","Ether.js","WhatsApp API","MongoDB"]}
      />
    </div>
  </div>
);

export default Exp;
