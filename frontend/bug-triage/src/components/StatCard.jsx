function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3>{title}</h3>
      </div>

      <p>{value}</p>
    </div>
  );
}

export default StatCard;
