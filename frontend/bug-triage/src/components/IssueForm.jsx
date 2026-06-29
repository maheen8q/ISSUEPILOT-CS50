import { useState } from "react";
import api from "../services/api";

function IssueForm({ setResult }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await api.post("/analyze", { title, description });
      if (setResult) setResult(response.data);
    } catch (err) {
      setError("Failed to analyze issue. Please try again.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="section-card form-card">
      <h2>Describe the Issue</h2>
      <p className="section-sub">
        Provide a title and detailed description of the issue.
      </p>

      <label>Issue Title</label>
      <input
        type="text"
        placeholder="e.g. API returns 500 when creating order"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        rows={5}
        placeholder="Describe what happened, steps to reproduce, and any error messages..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="run-btn" onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Run Triage"}
      </button>

      {error && <p className="error-msg">{error}</p>}

      <p className="secure-note">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Your data is secure and never stored.
      </p>
    </div>
  );
}

export default IssueForm;
