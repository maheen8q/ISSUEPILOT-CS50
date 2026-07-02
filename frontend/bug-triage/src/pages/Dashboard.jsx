import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const response = await api.get("/dashboard");
        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <main className="container page-enter">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
        <div className="dashboard-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="stat-card">
              <div className="skeleton skeleton-stat-label" />
              <div className="skeleton skeleton-stat-value" />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container page-enter">
      <h1 className="dashboard-title">Dashboard</h1>

      <p className="dashboard-subtitle">
        Monitor your IssuePilot statistics and model performance.
      </p>

      <div className="dashboard-grid">
        <StatCard title="Total Analyses" value={stats.total_predictions} />
        <StatCard title="High Priority" value={stats.high_priority} />
        <StatCard title="Medium Priority" value={stats.medium_priority} />
        <StatCard title="Low Priority" value={stats.low_priority} />
        <StatCard
          title="Most Common Component"
          value={stats.most_common_component}
        />
        <StatCard title="Model Accuracy" value={`${stats.model_accuracy}%`} />
      </div>
    </main>
  );
}

export default Dashboard;
