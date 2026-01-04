export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          I am a <span>BSc IT graduate</span> with a strong focus on 
          <span> front-end development</span>. I specialize in building 
          clean, responsive, and user-friendly web interfaces using 
          modern technologies.
        </p>

        <p className="about-text">
          My expertise includes <span>HTML, CSS, JavaScript, and React</span>, 
          with hands-on experience in creating structured layouts, reusable 
          components, and performance-optimized applications.
        </p>

        <p className="about-text">
          I am actively seeking an <span>entry-level Front-End Developer</span> role 
          where I can contribute to real-world projects, enhance user experiences, 
          and grow within a collaborative professional environment.
        </p>

        <div className="about-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
