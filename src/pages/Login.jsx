import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) return alert("Select role");

    role === "client" ? navigate("/client") : navigate("/smh");
  };

  return (
    <div className="screen">
      <div className="card">
        <h2 className="title">SMS LOGIN</h2>

        <input className="input" placeholder="Username / Email" />
        <input type="password" className="input" placeholder="Password" />

        <select className="input" onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="client">Client</option>
          <option value="smh">SMH</option>
        </select>

        <button className="btn" onClick={handleLogin}>Login</button>

        <p className="link" onClick={() => navigate("/signup")}>
          Don’t have an account? Sign Up
        </p>
      </div>
    </div>
  );
}