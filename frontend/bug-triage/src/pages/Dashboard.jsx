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
      <main className="container">
        <h1>Dashboard</h1>
        <p>Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h1 className="dashboard-title">Dashboard</h1>

      <p className="dashboard-subtitle">
        Monitor your IssuePilot statistics and model performance.
      </p>

      <div className="dashboard-grid">
        <StatCard
          title="Total Analyses"
          value={stats.total_predictions}
          // icon="📊"
        />

        <StatCard title="High Priority" value={stats.high_priority} />

        <StatCard
          title="Medium Priority"
          value={stats.medium_priority}
          //icon="🟡"
        />

        <StatCard title="Low Priority" value={stats.low_priority} />

        <StatCard
          title="Most Common Component"
          value={stats.most_common_component}
          //icon="🧩"
        />

        <StatCard
          title="Model Accuracy"
          value={`${stats.model_accuracy}%`}
          //icon="🎯"
        />
      </div>
    </main>
  );
}

export default Dashboard;
