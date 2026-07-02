import { useEffect, useState } from "react";

const LETTERS = "IssuePilot".split("");

function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState("enter"); // enter → hold → exit

  useEffect(() => {
    // Letters animate in for ~1.2s, hold for 0.8s, then exit
    const hold = setTimeout(() => setPhase("exit"), 2000);
    const done = setTimeout(() => onDone(), 2800);
    return () => {
      clearTimeout(hold);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <div className={`splash ${phase}`}>
      {/* Subtle animated grid */}
      <div className="splash-grid" />

      <div className="splash-content">
        <h1 className="splash-title">
          {LETTERS.map((char, i) => (
            <span
              key={i}
              className="splash-letter"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="splash-sub">AI-Powered Bug Triage</p>
      </div>

      {/* Loading bar */}
      <div className="splash-bar-wrap">
        <div className="splash-bar" />
      </div>
    </div>
  );
}

export default SplashScreen;
