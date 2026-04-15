import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const RESUME = "https://drive.google.com/file/d/1ed2vU9gTm4Z8ED0stgaJl3Hm5HA54vrZ/view?usp=sharing";

const Hero = ({ projref }) => {
  const leftRef  = useRef();
  const rightRef = useRef();

  useEffect(() => {
    const t = setTimeout(() => {
      leftRef.current?.classList.add("hero-appear-left");
      rightRef.current?.classList.add("hero-appear-right");
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full flex overflow-hidden bg-[var(--bg-primary)]">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: "linear-gradient(var(--grid-line) 1px,transparent 1px),linear-gradient(90deg,var(--grid-line) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      <div className="relative z-0 flex items-center justify-between gap-8 w-[88%] max-w-[1280px] mx-auto min-h-screen pt-28 pb-16">

        {/* Left */}
        <div ref={leftRef} className="hero-left flex-1 min-w-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--accent)] font-fira text-[0.72rem] tracking-[0.12em] font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)] animate-[pulseDot_2s_ease-in-out_infinite]" />
            AVAILABLE FOR HIGH-IMPACT ROLES
          </div>

          {/* Heading */}
          <h1 className="font-poppins font-extrabold leading-[1.05] text-[var(--text-primary)] mb-3 -tracking-tight text-[clamp(3rem,6vw,5.2rem)]">
            Software<br />Engineer
          </h1>

          {/* Typewriter */}
          <div className="font-fira font-bold text-[var(--accent)] mb-4 min-h-[2em] flex items-center text-[clamp(1.1rem,2vw,1.6rem)]">
            <Typewriter
              options={{ autoStart: true, loop: true, cursor: "_" }}
              onInit={(tw) => {
                tw.typeString("architecting startups at scale.").pauseFor(2200).deleteAll(30)
                  .typeString("building high-throughput backends.").pauseFor(2200).deleteAll(30)
                  .typeString("crafting interactive user experiences.").pauseFor(2200).deleteAll(30)
                  .start();
              }}
            />
          </div>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-[0.98rem] leading-[1.7] max-w-[520px] mb-7">
            Building the backbone of modern digital products. Specialized in high-throughput
            backend systems and high-fidelity, interactive user experiences. Software Engineer at{" "}
            <a href="https://play.google.com/store/apps/details?id=pep.live&hl=en_IN" target="_blank" rel="noreferrer"
              className="NavLinkBullet clickpurple font-fira transition-colors">
              @Pep
            </a>.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => projref?.current && window.scrollTo({ top: projref.current.offsetTop - 100, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-none bg-[var(--accent)] text-[#0a0f2e] font-fira text-[0.95rem] font-bold cursor-pointer hover:bg-[var(--accent-hover)] hover:-translate-y-0.5 transition-all duration-150"
            >
              View Projects <span>→</span>
            </button>
            <a href={RESUME} target="_blank" rel="noreferrer">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[var(--border-color)] bg-transparent text-[var(--text-primary)] font-fira text-[0.95rem] font-semibold cursor-pointer hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all duration-150">
                Resume <span>↓</span>
              </button>
            </a>
          </div>
        </div>

        {/* Right – code editor */}
        <div ref={rightRef} className="hero-right flex-none w-[420px] max-lg:hidden">
          <div className="bg-[var(--code-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-[var(--border-color)]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="p-5 font-fira text-[0.82rem] leading-[1.7] text-[var(--text-secondary)] whitespace-pre overflow-x-auto m-0">
              <code>
                <span className="ck">const</span> engineer = {"{"}{"\n"}
                {"  "}name: <span className="cs">"Unnat Das"</span>,{"\n"}
                {"  "}focus: <span className="cs">"Scale & Experience"</span>,{"\n"}
                {"  "}stack: [<span className="cs">"React"</span>, <span className="cs">"Node"</span>, <span className="cs">"Go"</span>],{"\n"}
                {"  "}status: <span className="cs">"Deploying..."</span>{"\n"}
                {"}"};{"\n\n"}
                <span className="ck">async function</span> <span className="cf">optimize</span>() {"{"}{"\n"}
                {"  "}<span className="ck">await</span> loadBalancer.<span className="cf">scale</span>();{"\n"}
                {"  "}<span className="ck">return</span> engineer.stack.<span className="cf">map</span>(s =&gt;{"\n"}
                {"    "}&lt;Node key={"{s}"} /&gt;{"\n"}
                {"  "});{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
