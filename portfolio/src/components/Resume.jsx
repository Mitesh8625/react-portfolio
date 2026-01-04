export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <h1 className="resume-title">Resume</h1>

        <p className="resume-text">
          Access my professional resume highlighting my education, technical
          skills, and hands-on project experience in front-end development.
        </p>

        <div className="resume-actions">
          <a
            href="/MiteshSurendraPatel-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary"
          >
            View Resume
          </a>

          <a
            href="/MiteshSurendraPatel-Resume.pdf"
            download
            className="resume-btn secondary"
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
