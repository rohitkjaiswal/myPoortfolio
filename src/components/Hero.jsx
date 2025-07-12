//import "./Hero.css";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="hero-content">
        <h1 data-aos="fade-right" data-aos-delay="200">Welcome, I'm Rohit Kumar</h1>
        <p className="subtitle" data-aos="fade-right" data-aos-delay="400">
          UI/UX Designer & Developer | Student at MGIMT, Lucknow
        </p>
        <p className="tagline" data-aos="fade-right" data-aos-delay="600">
          I have a unique technique to approach any kind of problem.
        </p>
        <a href="#contact" className="cta-btn" data-aos="zoom-in" data-aos-delay="800">
          Get in Touch
        </a>
      </div>
      <div className="hero-img" data-aos="fade-left" data-aos-delay="500">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}