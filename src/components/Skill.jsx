import imgCpp      from "../assets/images/c++.png";
import imgPython   from "../assets/images/python.png";
import imgJava     from "../assets/images/java.png";
import imgJs       from "../assets/images/js.png";
import imgTs       from "../assets/images/typescript.png";
import imgReact    from "../assets/images/react.png";
import imgNext     from "../assets/images/next.png";
import imgRedux    from "../assets/images/redux.png";
import imgTailwind from "../assets/images/tailwind.png";
import imgMui      from "../assets/images/materialui.png";
import imgAntd     from "../assets/images/antd.png";
import imgHtml     from "../assets/images/html.png";
import imgCss      from "../assets/images/css.png";
import imgNode     from "../assets/images/nodejs.png";
import imgExpress  from "../assets/images/expressjs.png";
import imgFastapi  from "../assets/images/FastAPI.png";
import imgMongo    from "../assets/images/mongodb.png";
import imgFirebase from "../assets/images/firebase.png";
import imgPostgres from "../assets/images/postgresql.png";
import imgMysql    from "../assets/images/MySQL.png";
import imgGithub   from "../assets/images/github.png";
import imgPostman  from "../assets/images/postman.png";
import imgVscode   from "../assets/images/vscode.png";
import imgNextauth from "../assets/images/nextauth.png";

const categories = [
  { label:"Languages", icon:"</>", skills:[
    {name:"JavaScript",img:imgJs,color:"#FFDF00"},{name:"TypeScript",img:imgTs,color:"#3178C6"},
    {name:"Python",img:imgPython,color:"#306998"},{name:"Go",letter:"Go",color:"#00ADD8"},
    {name:"Kotlin",letter:"K",color:"#7F52FF"},{name:"C++",img:imgCpp,color:"#00599C"},
    {name:"Java",img:imgJava,color:"#ED8B00"},{name:"SQL",img:imgMysql,color:"#336791"},
  ]},
  { label:"Frontend", icon:"◻", skills:[
    {name:"React.js",img:imgReact,color:"#61DAFB"},{name:"Next.js",img:imgNext,color:"#FFFFFF"},
    {name:"Redux Toolkit",img:imgRedux,color:"#764ABC"},{name:"Tailwind CSS",img:imgTailwind,color:"#06B6D4"},
    {name:"React Native",img:imgReact,color:"#61DAFB"},{name:"Jetpack Compose",letter:"JC",color:"#4285F4"},
    {name:"MUI",img:imgMui,color:"#007FFF"},{name:"Ant Design",img:imgAntd,color:"#1677FF"},
    {name:"HTML",img:imgHtml,color:"#E34F26"},{name:"CSS",img:imgCss,color:"#1572B6"},
  ]},
  { label:"Backend", icon:"⚙", skills:[
    {name:"Node.js",img:imgNode,color:"#339933"},{name:"Express.js",img:imgExpress,color:"#AAAAAA"},
    {name:"FastAPI",img:imgFastapi,color:"#009688"},{name:"Go (GIN)",letter:"GIN",color:"#00ADD8"},
    {name:"REST APIs",letter:"API",color:"#4EECC8"},{name:"SQLAlchemy",letter:"SA",color:"#D71F00"},
    {name:"Next Auth",img:imgNextauth,color:"#15CFD0"},
  ]},
  { label:"Databases", icon:"▦", skills:[
    {name:"PostgreSQL",img:imgPostgres,color:"#336791"},{name:"MySQL",img:imgMysql,color:"#4479A1"},
    {name:"MongoDB",img:imgMongo,color:"#4DB33D"},{name:"Firebase",img:imgFirebase,color:"#FFCA28"},
  ]},
  { label:"DevOps & Cloud", icon:"☁", skills:[
    {name:"Docker",letter:"Dkr",color:"#2496ED"},{name:"GCP Cloud Run",letter:"GCP",color:"#4285F4"},
    {name:"AWS",letter:"AWS",color:"#FF9900"},{name:"CloudFront",letter:"CF",color:"#FF9900"},
    {name:"NGINX",letter:"NGX",color:"#009639"},{name:"Cloud Build",letter:"CB",color:"#4285F4"},
    {name:"Cloud Storage",letter:"GCS",color:"#4285F4"},{name:"Load Balancer",letter:"LB",color:"#4EECC8"},
  ]},
  { label:"Tools & Integrations", icon:"⚡", skills:[
    {name:"Git",letter:"Git",color:"#F05032"},{name:"GitHub",img:imgGithub,color:"#AAAAAA"},
    {name:"Postman",img:imgPostman,color:"#FF6C37"},{name:"VS Code",img:imgVscode,color:"#007ACC"},
    {name:"Android Studio",letter:"AS",color:"#3DDC84"},{name:"Razorpay",letter:"Rzp",color:"#3395FF"},
    {name:"PhonePe",letter:"Pe",color:"#5F259F"},{name:"Deep Links",letter:"DL",color:"#4EECC8"},
    {name:"Facebook Ads SDK",letter:"FB",color:"#1877F2"},{name:"RAG / LLM",letter:"AI",color:"#8B5CF6"},
  ]},
];

const SkillIcon = ({ img, letter, color }) => {
  const base = "inline-flex items-center justify-center w-[18px] h-[18px] rounded-full border flex-shrink-0 overflow-hidden";
  const style = { background:`${color}22`, borderColor:`${color}44` };
  if (img) return (
    <span className={base} style={style}>
      <img src={img} alt="" className="w-3 h-3 object-contain block" />
    </span>
  );
  return (
    <span className={`${base} rounded`} style={{ ...style, color, fontSize:"0.48rem", fontWeight:800, fontFamily:"'Fira Mono',monospace" }}>
      {letter}
    </span>
  );
};

const Skill = () => (
  <div className="w-[88%] max-w-[1280px] mx-auto mt-[8%] mb-[8%]">
    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-2xl font-poppins font-extrabold mb-9">
      <span className="NavLinkBullet">03.</span> Skills
      <div className="flex-1 h-px bg-[var(--border-color)] max-w-[50%]" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map(cat => (
        <div key={cat.label}
          className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-5 md:p-6 hover:border-[rgba(78,236,200,0.25)] hover:shadow-[0_4px_24px_var(--shadow-glow)] transition-all duration-200">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-[0.95rem] text-[var(--accent)] font-fira w-7 h-7 flex items-center justify-center bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-md flex-shrink-0">
              {cat.icon}
            </span>
            <span className="font-poppins text-[0.88rem] font-bold text-[var(--text-primary)] uppercase tracking-[0.04em]">
              {cat.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map(s => (
              <span key={s.name}
                className="inline-flex items-center gap-1.5 font-fira text-[0.71rem] font-medium pl-1.5 pr-2.5 py-1 rounded-full text-[var(--text-secondary)] bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-white/15 transition-all duration-150 whitespace-nowrap cursor-default">
                <SkillIcon img={s.img} letter={s.letter} color={s.color} />
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skill;
