import "./Section.css";
export default function Blog() {
  const posts = [
    {
      title: "How I Approach any Challenges",
      desc: "Discover my design thinking process and how I solve real-world interface problems.",
      link: "#",
    },
    {
      title: "Latest Trends in Web Development",
      desc: "My take on what’s new in frontend and backend technologies in 2025.",
      link: "#",
    },
  ];
  return (
    <section id="blog" className="card card-gradient" data-aos="fade-up" data-aos-delay="300">
      <h2>Blog</h2>
      <div className="blog-grid">
        {posts.map(post => (
          <article className="blog-card" key={post.title}>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <a href={post.link} aria-label={"Read " + post.title}>Read More</a>
          </article>
        ))}
      </div>
    </section>
  );
}