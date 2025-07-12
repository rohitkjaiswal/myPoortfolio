import "./Section.css";
export default function Contact() {
  return (
    <section id="contact" className="card card-gradient" data-aos="fade-up" data-aos-delay="500">
      <h2>Ask me for coffee</h2>
      <form action="mailto:your-email@example.com" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
        <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
        <textarea name="message" placeholder="Your Message" required aria-label="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-links">
        <a href="mailto:your-email@example.com" aria-label="Email Rohit">rohitkumarj243@gamil.com</a> |
        <a href="https://www.linkedin.com/in/rohit-kumar-935091250/" target="_blank" aria-label="LinkedIn Profile">LinkedIn</a>
      </div>
    </section>
  );
}