export default function SMHDashboard() {
  return (
    <div className="dashboard">
      <h2>SMH Dashboard</h2>

      {/* CLIENT MANAGEMENT */}
      <div className="section">
        <h3>Client Management</h3>
        <button className="btn">Add New Client</button>
        <p>Manage all client accounts</p>
      </div>

      {/* PLATFORM */}
      <div className="section">
        <h3>Platforms</h3>
        <p>Instagram • Facebook • LinkedIn • Twitter</p>
      </div>

      {/* CONTENT */}
      <div className="section">
        <h3>Create Content</h3>
        <textarea className="input" placeholder="Write caption..." />
        <button className="btn">Save Content</button>
      </div>

      {/* AI */}
      <div className="section">
        <h3>AI Generator</h3>
        <textarea className="input" placeholder="Enter prompt..." />
        <button className="btn">Generate</button>
      </div>

      {/* SCHEDULE */}
      <div className="section">
        <h3>Schedule Post</h3>
        <input type="datetime-local" className="input" />
        <button className="btn">Schedule</button>
      </div>

      {/* STATUS */}
      <div className="section">
        <h3>Post Status</h3>
        <div className="grid">
          <Card title="Draft" value="10" />
          <Card title="Scheduled" value="5" />
          <Card title="Posted" value="30" />
          <Card title="Failed" value="2" />
        </div>
      </div>

      {/* ANALYTICS */}
      <div className="section">
        <h3>Analytics</h3>
        <div className="grid">
          <Card title="Likes" value="5000" />
          <Card title="Comments" value="1200" />
          <Card title="Reach" value="20000" />
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