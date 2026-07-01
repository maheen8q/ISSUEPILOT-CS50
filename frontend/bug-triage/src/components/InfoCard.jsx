function InfoCard({ title, children }) {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <div className="info-content">{children}</div>
    </div>
  );
}

export default InfoCard;
