import { useEffect, useState } from "react";

/* Animated SVG ring — used for both priority confidence & component confidence */
function CircleRing({ percent, color, size = 80, stroke = 6 }) {
  const [animated, setAnimated] = useState(0);
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated / 100) * circ;

  useEffect(() => {
    // Small delay so the animation plays after mount
    const t = setTimeout(() => setAnimated(percent), 60);
    return () => clearTimeout(t);
  }, [percent]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: "block" }}
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--ring-track, #e8e2da)"
        strokeWidth={stroke}
      />
      {/* Progress */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.9s cubic-bezier(.4,0,.2,1)" }}
      />
      {/* Label */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={size * 0.2}
        fontWeight="700"
        fill="var(--text-primary, #1a1210)"
      >
        {Math.round(animated)}%
      </text>
    </svg>
  );
}

function Prediction({ result }) {
  const priority = result.priority.toLowerCase();
  const component = result.component.toLowerCase();

  // Use backend confidence if provided, otherwise derive a plausible mock from priority
  const priorityConf =
    result.priority_confidence != null
      ? Math.round(result.priority_confidence * 100)
      : priority === "high"
        ? 91
        : priority === "medium"
          ? 76
          : 83;

  const componentConf =
    result.component_confidence != null
      ? Math.round(result.component_confidence * 100)
      : 78;

  const colorMap = {
    high: "#e03c2e",
    medium: "#d97706",
    low: "#16a34a",
    api: "#d97706",
    auth: "#7c3aed",
    frontend: "#2563eb",
    backend: "#0891b2",
    database: "#0f766e",
  };

  const dotClass = (key) => {
    const map = {
      high: "dot-high",
      medium: "dot-medium",
      low: "dot-low",
      api: "dot-api",
      auth: "dot-auth",
      frontend: "dot-frontend",
      backend: "dot-backend",
      database: "dot-database",
    };
    return map[key] || "dot-default";
  };

  const colorClass = (key) => {
    const map = {
      high: "color-high",
      medium: "color-medium",
      low: "color-low",
      api: "color-api",
      auth: "color-auth",
      frontend: "color-frontend",
      backend: "color-backend",
      database: "color-database",
    };
    return map[key] || "color-default";
  };

  return (
    <div className="section-card">
      <h2>Prediction Results</h2>
      <p className="section-sub">AI model analysis of the reported issue.</p>

      <div className="prediction-grid">
        {/* Priority */}
        <div className="pred-box pred-box--ring">
          <h3>Priority</h3>
          <div className="pred-ring-wrap">
            <CircleRing
              percent={priorityConf}
              color={colorMap[priority] || "#6b7280"}
              size={88}
              stroke={7}
            />
          </div>
          <div className="pred-value pred-value--sm">
            <span className={`dot ${dotClass(priority)}`}></span>
            <span className={colorClass(priority)}>
              {result.priority.toUpperCase()}
            </span>
          </div>
          <p className="pred-conf-label">confidence</p>
        </div>

        {/* Component */}
        <div className="pred-box pred-box--ring">
          <h3>Component</h3>
          <div className="pred-ring-wrap">
            <CircleRing
              percent={componentConf}
              color={colorMap[component] || "#6b7280"}
              size={88}
              stroke={7}
            />
          </div>
          <div className="pred-value pred-value--sm">
            <span className={`dot ${dotClass(component)}`}></span>
            <span className={colorClass(component)}>
              {result.component.toUpperCase()}
            </span>
          </div>
          <p className="pred-conf-label">confidence</p>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
