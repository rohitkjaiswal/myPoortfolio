import React from 'react'

function Main() {
  return (
    <>
     <main>
        <section id="about" class="card card-gradient" data-aos="fade-up">
            <h2>About Me</h2>
            <p>
                I am a passionate UI/UX designer and developer, currently studying at MG Institute of Management and Technology, Lucknow. My focus is on crafting intuitive interfaces and solving real-world challenges with creativity and technology.
            </p>
        </section>
        <section id="skills" class="card card-gradient" data-aos="fade-up" data-aos-delay="100">
            <h2>Skills</h2>
            <ul class="skills-list">
                <li data-aos="flip-left" data-aos-delay="200">UI/UX Design</li>
                <li data-aos="flip-left" data-aos-delay="300">HTML, CSS, JavaScript</li>
                <li data-aos="flip-left" data-aos-delay="400">Python, Node.js</li>
                <li data-aos="flip-left" data-aos-delay="500">Responsive Web Design</li>
                <li data-aos="flip-left" data-aos-delay="600">Problem Solving</li>
                <li data-aos="flip-left" data-aos-delay="700">Git & GitHub</li>
            </ul>
        </section>
        <section id="projects" class="card card-gradient" data-aos="fade-up" data-aos-delay="200">
            <h2>Projects</h2>
            <div class="projects-grid">
               
                <div class="flip-card" tabindex="0" aria-label="Portfolio Website Project Card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="portfolio-icon.png" alt="Portfolio Icon" class="project-icon" />
                            <h3>Portfolio Website</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>Portfolio Website</h3>
                            <p>A portfolio inspired by the Odoo homepage, demonstrating modern UI skills.</p>
                            <a href="https://github.com/rohitkjaiswal" target="_blank" aria-label="View Portfolio Website on GitHub">View on GitHub</a>
                        </div>
                    </div>
                </div>
                
                <div class="flip-card" tabindex="0" aria-label="MGIMT Student Portal Project Card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="student-portal-icon.png" alt="Student Portal Icon" class="project-icon" />
                            <h3>MGIMT Student Portal</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>MGIMT Student Portal</h3>
                            <p>Contributed to the student portal at MGIMT, enhancing user interface and experience.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section id="blog" class="card card-gradient" data-aos="fade-up" data-aos-delay="300">
            <h2>Blog</h2>
            <div class="blog-grid">
                <article class="blog-card">
                    <h3>How I Approach UI/UX Challenges</h3>
                    <p>Discover my design thinking process and how I solve real-world interface problems.</p>
                    <a href="#" aria-label="Read How I Approach UI/UX Challenges">Read More</a>
                </article>
                <article class="blog-card">
                    <h3>Latest Trends in Web Development</h3>
                    <p>My take on what’s new in frontend and backend technologies in 2025.</p>
                    <a href="#" aria-label="Read Latest Trends in Web Development">Read More</a>
                </article>
               
            </div>
        </section>
        <section id="testimonials" class="card card-gradient" data-aos="fade-up" data-aos-delay="400">
            <h2 style="font-family:'Tangerine',serif ;">Testimonials</h2>
            <div class="testimonials-grid">
                <blockquote class="testimonial-card">
                    <p>"Rohit has a unique approach to solving problems—his UI/UX work is intuitive and professional."</p>
                    <footer style="color: darkcyan;">– Aman Singh, Developer Peer</footer>
                </blockquote>
                <blockquote class="testimonial-card">
                    <p>"Highly recommended for web projects. Always delivers on time and exceeds expectations."</p>
                    <footer style="color: darkcyan;">– Priya Sharma, Project Manager</footer>
                </blockquote>
                
            </div>
        </section>
        <section id="contact" class="card card-gradient" data-aos="fade-up" data-aos-delay="500">
            <h2>Contact</h2>
            <form action="mailto:your-email@example.com" method="POST" class="contact-form">
                <input type="text" name="name" placeholder="Your Name" required aria-label="Your Name" />
                <input type="email" name="email" placeholder="Your Email" required aria-label="Your Email" />
                <textarea name="message" placeholder="Your Message" required aria-label="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
            <div class="contact-links">
                <a href="mailto:your-email@example.com" aria-label="Email Rohit">your-email@example.com</a> |
                <a href="https://www.linkedin.com/in/rohit-kumar-935091250/" target="_blank" aria-label="LinkedIn Profile">LinkedIn</a>
            </div>
        </section>
    </main>
    </>
  )
}

export default Main
