function Prediction({ result }) {
  const priority = result.priority.toLowerCase();
  const component = result.component.toLowerCase();

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
        <div className="pred-box">
          <h3>Priority</h3>
          <div className="pred-value">
            <span className={`dot ${dotClass(priority)}`}></span>
            <span className={colorClass(priority)}>
              {result.priority.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="pred-box">
          <h3>Component</h3>
          <div className="pred-value">
            <span className={`dot ${dotClass(component)}`}></span>
            <span className={colorClass(component)}>
              {result.component.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
