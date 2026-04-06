const ClipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--accent)" viewBox="0 0 16 16">
    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
  </svg>
);

const achievements = [
  { title:"Problem Solving", items:[
    {href:"https://leetcode.com/sayo_13/",label:"@LeetCode",desc:"top 25.3% · contest rating 1,587"},
    {href:"https://codeforces.com/profile/sayo_13",label:"@Codeforces",desc:"Rating 1118 (MAX)"},
    {href:"https://www.codechef.com/users/sayo_13",label:"@CodeChef",desc:"3 star · 1710 (MAX)"},
    {href:"https://www.hackerrank.com/sayo_13?hr_r=1",label:"@HackerRank",desc:"5 star (C++ | Problem Solving)"},
  ]},
  { title:"Programming in C++ — NPTEL (IIT Kharagpur)", items:[
    {href:"https://drive.google.com/file/d/16_RfBKUt9xNSKOA9HTmGYFJzfOK1hUmD/view",label:"@Certificate",desc:"Top 336 out of 5k students · Elite"},
  ]},
  { title:"Google Kickstart 2022", items:[
    {href:"https://drive.google.com/file/d/1T2V6BzzWBZ7EiNpOASIdKS25SIZaXCny/view?usp=sharing",label:"@Certificate",desc:"Global rank 1535 · AIR 1003 out of 5716 — Round B"},
  ]},
];

const Certficate = () => (
  <div className="w-[88%] max-w-[1280px] mx-auto mb-[8%]">
    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-2xl font-poppins font-extrabold mb-8">
      <span className="NavLinkBullet">04.</span> Achievements
      <div className="flex-1 h-px bg-[var(--border-color)] max-w-[50%]" />
    </div>
    <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed mb-5 max-w-[780px]">
      Competitive programming, certification milestones, and internship achievements that reflect consistent execution and problem-solving at scale.
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {achievements.map(({ title, items }) => (
        <div
          key={title}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 hover:border-[rgba(78,236,200,0.25)] hover:shadow-[0_6px_26px_var(--shadow-glow)] transition-all duration-200"
        >
          <div className="flex items-center gap-2.5 text-[var(--text-primary)] font-poppins font-semibold text-[1rem] mb-4">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--badge-bg)] border border-[var(--badge-border)] flex-shrink-0">
              <ClipIcon />
            </span>
            <span className="leading-snug">{title}</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {items.map(({ href, label, desc }) => (
              <div
                key={`${title}-${label}`}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/45 px-3.5 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[var(--text-secondary)] text-[0.88rem] leading-relaxed">
                    {desc}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-fira text-[0.72rem] font-semibold tracking-[0.03em] text-[var(--accent)] border border-[var(--badge-border)] bg-[var(--badge-bg)] rounded-md px-2.5 py-1 hover:brightness-105 transition-all whitespace-nowrap"
                  >
                    {label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Certficate;
