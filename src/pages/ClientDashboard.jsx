export default function ClientDashboard() {
  return (
    <div className="dashboard">
      <h2>Client Dashboard</h2>

      <div className="grid">
        <Card title="Posts" value="24" icon="📝" />
        <Card title="Likes" value="1.2K" icon="❤️" />
        <Card title="Reach" value="5K" icon="📈" />
        <Card title="Analytics" value="View" icon="📊" />
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="box">
      <div className="icon">{icon}</div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}