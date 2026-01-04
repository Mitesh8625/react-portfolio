export default function Projects() {
  const projects = [
    {
      title: "NotesDrive – College Notes Management Platform",
      tech: "HTML, CSS, Bootstrap",
      year: "2025",
      points: [
        "Developed a platform for students to upload, manage, and share study notes.",
        "Integrated file support for PDF, PPT, and DOC formats.",
        "Implemented secure login, role-based access, and a fully responsive UI."
      ]
    },
    {
      title: "Personal Portfolio Website",
      tech: "HTML, CSS, Bootstrap",
      year: "2025",
      points: [
        "Designed and deployed a personal portfolio showcasing skills and projects.",
        "Implemented responsive layouts using the Bootstrap grid system.",
        "Hosted the portfolio on GitHub Pages for public access."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card-advanced" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-year">{project.year}</span>
            </div>

            <p className="project-tech">{project.tech}</p>

            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="project-actions">
              <button className="project-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
