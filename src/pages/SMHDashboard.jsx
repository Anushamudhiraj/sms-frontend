export default function SMHDashboard() {
  return (
    <div className="dashboard">
      <h2>SMH Dashboard</h2>

      {/* ANALYTICS */}
      <div className="section">
        <h3>Analytics</h3>
        <div className="grid">
          <Card title="Total Reach" value="20K" icon="📊" />
          <Card title="Clients" value="12" icon="👥" />
        </div>
      </div>

      {/* PLATFORM REACH */}
      <div className="section">
        <h3>Platform Reach</h3>
        <div className="grid">
          <Card title="Instagram" value="5K" icon="📸" />
          <Card title="Facebook" value="4K" icon="📘" />
          <Card title="LinkedIn" value="3K" icon="💼" />
          <Card title="Twitter" value="2K" icon="🐦" />
          <Card title="YouTube" value="4K" icon="▶️" />
          <Card title="Pinterest" value="2K" icon="📌" />
        </div>
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