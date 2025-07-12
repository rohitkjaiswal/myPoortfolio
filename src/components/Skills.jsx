import "./Section.css";
export default function Skills() {
  const skillList = [
    "Java",
    "Python",
    "JavaScript",
    "HTML, CSS",
    "React js, Node.js",
    "Responsive Web Design",
    "Problem Solving",
    "Git & GitHub",
  ];

  const toolsList=[
    "Firebase","Vs Code","Postgres database",
  ]
  return (
    <><section id="skills" className="card card-gradient" data-aos="fade-up" data-aos-delay="100">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillList.map((skill, i) => (
          <li key={skill} data-aos="flip-left" data-aos-delay={200 + i * 100}>{skill}</li>
        ))}
      </ul>
    </section><section className="skills" class="card card-gradient" data-aos="fade-up" data-aos-delay="100">
        <h2>Tools</h2>
        <ul className="skills-list">
          {toolsList.map((tools, i) => (
            <li key={tools} data-aos="flip-left" data-aos-delay={200 + i * 100}>{tools}</li>
          ))}
        </ul>
      </section></>
  );
}