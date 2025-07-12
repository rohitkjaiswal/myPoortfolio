import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavLinkClick = () => setOpen(false);

  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="logo" tabIndex={0}>Rohit Kumar</div>
      <button
        className={`hamburger${open ? " is-active" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span><span></span><span></span>
      </button>
      <ul id="nav-menu" className={`nav-menu${open ? " nav-active" : ""}`}>
        {[
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#blog", label: "Blog" },
          { href: "#testimonials", label: "Testimonials" },
          { href: "#contact", label: "Contact" },
          { href: "https://www.linkedin.com/in/rohit-kumar-935091250/", label: "LinkedIn", external: true },
          { href: "https://github.com/rohitkjaiswal", label: "GitHub", external: true },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              aria-label={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}