import { useState } from "react";

function SimilarIssues({ issues }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? issues : issues.slice(0, 3);

  return (
    <div className="section-card">
      <h2>Similar Issues</h2>
      <p className="section-sub">Top similar issues from the database.</p>

      <div className="similar-list">
        {visible.map((issue, index) => (
          <div className="issue-row" key={index}>
            <div className="issue-left">
              <h3>{issue.title}</h3>
              {issue.description && (
                <p className="issue-desc">{issue.description}</p>
              )}
              <div className="issue-repo">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {issue.repo || "View on GitHub"}
              </div>
            </div>
            <div className="issue-right">
              <div className="sim-label">Similarity</div>
              <div className="sim-score">
                {(issue.similarity_score * 100).toFixed(0)}%
              </div>
              <a
                className="gh-link"
                href={issue.issue_url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {issues.length > 3 && (
        <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {showAll ? (
              <polyline points="18 15 12 9 6 15" />
            ) : (
              <polyline points="6 9 12 15 18 9" />
            )}
          </svg>
        </button>
      )}
    </div>
  );
}

export default SimilarIssues;
