export default function ClientDashboard() {
  return (
    <div className="dashboard">
      <h2>Client Dashboard</h2>

      <div className="section">
        <h3>Connected Platforms</h3>
        <p>Instagram • Facebook • LinkedIn</p>
      </div>

      <div className="section">
        <h3>Analytics</h3>
        <div className="grid">
          <Card title="Likes" value="1200" />
          <Card title="Comments" value="300" />
          <Card title="Reach" value="5000" />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="box">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}