import React from 'react'

function Header() {
  return (
    <>
       <div class="parallax-bg"></div>
        <header>
        <nav aria-label="Main navigation">
            <div class="logo" tabindex="0">Rohit Kumar</div>
            <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
            <ul id="nav-menu" class="nav-menu" >
                <li><a href="#about" aria-label="About">About</a></li>
                <li><a href="#skills" aria-label="Skills">Skills</a></li>
                <li><a href="#projects" aria-label="Projects">Projects</a></li>
                <li><a href="#blog" aria-label="Blog">Blog</a></li>
                <li><a href="#testimonials" aria-label="Testimonials">Testimonials</a></li>
                <li><a href="#contact" aria-label="Contact">Contact</a></li>
                <li><a href="https://www.linkedin.com/in/rohit-kumar-935091250/" target="_blank" aria-label="LinkedIn">LinkedIn</a></li>
                <li><a href="https://github.com/rohitkjaiswal" target="_blank" aria-label="GitHub">GitHub</a></li>
            </ul>
        </nav>
        <section class="hero" data-aos="fade-up" data-aos-duration="1200">
            <div class="hero-content">
                <h1 data-aos="fade-right" data-aos-delay="200">Welcome, I'm Rohit Kumar</h1>
                <p class="subtitle" data-aos="fade-right" data-aos-delay="400">Full Stack Web Developer | Student at MGIMT, Lucknow</p>
                <p class="tagline" data-aos="fade-right" data-aos-delay="600">I have a unique technique to approach any kind of problem.</p>
                <a href="#contact" class="cta-btn" data-aos="zoom-in" data-aos-delay="800">Get in Touch</a>
            </div>
            <div class="hero-img" data-aos="fade-left" data-aos-delay="500">
                <img src="profile.png" alt="Profile Picture" />
            </div>
        </section>
    </header>
    </>
  )
}

export default Header
