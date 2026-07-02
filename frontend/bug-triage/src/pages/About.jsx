import { useEffect, useState } from "react";
import api from "../services/api";
import InfoCard from "../components/InfoCard";

function About() {
  const [about, setAbout] = useState(null);
  const [health, setHealth] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const aboutRes = await api.get("/about");
        const healthRes = await api.get("/health");
        const modelRes = await api.get("/model-info");

        setAbout(aboutRes.data);
        setHealth(healthRes.data);
        setModel(modelRes.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (!about || !health || !model) {
    return (
      <main className="container page-enter">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
        <div className="about-grid">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="info-card">
              <div className="skeleton skeleton-card-heading" />
              {[...Array(4)].map((_, j) => (
                <div key={j} className="skeleton skeleton-line" />
              ))}
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container page-enter">
      <section className="about-header">
        <h1>About IssuePilot</h1>
        <p>
          AI-powered bug triage system that predicts issue priority, identifies
          affected components, and retrieves similar GitHub issues.
        </p>
      </section>

      <div className="about-grid">
        <InfoCard title="Project Information">
          <p>
            <strong>Project:</strong> {about.project}
          </p>
          <p>
            <strong>Version:</strong> {about.version}
          </p>
          <p>
            <strong>Frontend:</strong> {about.frontend}
          </p>
          <p>
            <strong>Backend:</strong> {about.backend}
          </p>
          <p>
            <strong>Machine Learning:</strong> {about.ml}
          </p>
          <p>
            <strong>Dataset Size:</strong> {about.dataset_size}
          </p>
        </InfoCard>

        <InfoCard title="System Status">
          <p>
            <strong>Status:</strong> {health.status}
          </p>
        </InfoCard>

        <InfoCard title="Model Information">
          <p>
            <strong>Priority Model:</strong> {model.priority_model}
          </p>
          <p>
            <strong>Component Model:</strong> {model.component_model}
          </p>
          <p>
            <strong>Vectorizer:</strong> {model.vectorizer}
          </p>
          <p>
            <strong>Similarity:</strong> {model.similarity}
          </p>
        </InfoCard>
      </div>
    </main>
  );
}

export default About;
