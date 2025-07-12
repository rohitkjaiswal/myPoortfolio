import "./Section.css";
export default function Testimonials() {
  const testimonials = [
    {
      quote: `"Rohit has a unique approach to solving problems—his development work is intuitive and professional."`,
      author: "– Gaurav Ojha, Developer",
    },
    {
      quote: `"Highly recommended for web projects. Always delivers on time and exceeds expectations."`,
      author: "– Chandan Gupta, Cloud Engineer",
    },
  ];
  return (
    <section id="testimonials" className="card card-gradient" data-aos="fade-up" data-aos-delay="400">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map(({ quote, author }) => (
          <blockquote className="testimonial-card" key={author}>
            <p>{quote}</p>
            <footer>{author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}