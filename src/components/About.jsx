import profilepic from "../assets/images/profile_2.png";

const About = ({ aboutref }) => (
  <div className="w-[88%] max-w-[1280px] mx-auto py-4 flex flex-col mt-[8%]">
    {/* Section head */}
    <div ref={aboutref} className="flex items-center gap-2 text-[var(--text-secondary)] text-2xl font-poppins font-extrabold mb-8">
      <span className="NavLinkBullet">01.</span> About Me
      <div className="flex-1 h-px bg-[var(--border-color)] max-w-[50%]" />
    </div>

    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      {/* Text */}
      <div className="md:w-1/2 flex flex-col gap-4 text-[var(--text-secondary)] text-[1rem] text-justify">
        <p className="leading-[1.75]">
          I'm a software engineer with{" "}
          <span className="NavLinkBullet">2+ years of experience</span> building
          scalable, production-ready applications in fast-paced startup environments.
        </p>
        <p className="leading-[1.75]">
          I've worked with <span className="NavLinkBullet">3+ startups</span>, focusing on
          frontend while also handling backend development, system integrations, and cloud
          deployments on <span className="NavLinkBullet">AWS</span> and{" "}
          <span className="NavLinkBullet">GCP</span>. I've built efficient APIs, optimized
          performance, and delivered systems that scale reliably.
        </p>
        <p className="leading-[1.75]">
          Currently I work as a{" "}
          <span className="NavLinkBullet">full-time software engineer</span>, building
          end-to-end solutions — from API integration and clean architecture to performance
          optimization and seamless user experiences. I've also worked as a{" "}
          <span className="NavLinkBullet">freelance lead frontend developer</span>, delivering
          complete solutions including integrations, code optimization, reusable structures,
          and infrastructure setup.
        </p>
        <p className="leading-[1.75]">
          I'm interested in{" "}
          <span className="NavLinkBullet">system design</span> and building clean, scalable
          products. I enjoy working across the stack and owning features from idea to
          production.
        </p>
        <p className="leading-[1.75] px-4 py-3 border-l-2 border-[var(--accent)] bg-[var(--badge-bg)] rounded-r-md">
          Currently seeking{" "}
          <span className="NavLinkBullet">Full-Stack Engineer / SDE-1</span> roles in both
          startup and high-scale environments.
        </p>
      </div>

      {/* Photo */}
      <div className="w-[280px] h-[40vh] flex-shrink-0 md:w-[360px]">
        <img src={profilepic} alt="Unnat Das" className="w-full h-full object-cover rounded-xl" />
      </div>
    </div>
  </div>
);

export default About;
