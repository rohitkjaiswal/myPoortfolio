import "./Section.css";
import FlipCard from "./FlipCard";
import "./FlipCard.css"
import portfolioIcon from "../assets/portfolio-icon.png";
import studentPortalIcon from "../assets/student-portal-icon.png";

export default function Projects() {
  return (
    <section id="projects" className="card card-gradient" data-aos="fade-up" data-aos-delay="200">
      <h2>Projects</h2>
      <div className="projects-grid">
        <FlipCard
          frontIcon={portfolioIcon}
          frontTitle="Expense Tracker"
          backTitle="Expense Tracker"
          backDesc=" Developed an interactive expense management application.
 Enabled add/edit/delete functionality with real-time UI updates.
 Used localStorage to simulate backend data handling.
 Designed a clean, responsive UI for improved user experience."
          backLink={{ href: "https://github.com/rohitkjaiswal", label: "View on GitHub" }}
        />
        <FlipCard
          frontIcon={studentPortalIcon}
          frontTitle="Mini-media web"
          backTitle="Mini-media web"
          backDesc=" Built a basic social media frontend allowing user registration and post creation.
 Implemented login, logout, post updates, and simulated storage.
 Designed a user-friendly interface for seamless interaction."
        />
        {/* Add more FlipCard components for more projects */}
      </div>
    </section>
  );
}