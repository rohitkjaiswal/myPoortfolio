import "./FlipCard.css";

export default function FlipCard({ frontIcon, frontTitle, backTitle, backDesc, backLink }) {
  return (
    <div className="flip-card" tabIndex={0} aria-label={frontTitle + " Project Card"}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontIcon} alt={frontTitle + " Icon"} className="project-icon" />
          <h3>{frontTitle}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{backTitle}</h3>
          <p>{backDesc}</p>
          {backLink && (
            <a href={backLink.href} target="_blank" rel="noopener noreferrer" aria-label={backLink.label}>
              {backLink.label}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}