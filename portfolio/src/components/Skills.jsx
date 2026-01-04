export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Technologies & Frameworks",
      skills: ["React.js", "Bootstrap"]
    },
    {
      title: "Version Control & Tools",
      skills: ["Git", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>{category.title}</h3>

            <ul className="skills-list-advanced">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
