import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();

  // 🔷 state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔷 login handler
  const handleLogin = async () => {
    try {
      const res = await login({
        email,
        password,
      });

      console.log("Login response:", res);

      // 🔥 role-based navigation
      if (res.role === "CLIENT") {
        navigate("/client");
      } else if (res.role === "SMH") {
        navigate("/smh");
      } else {
        alert("Unknown role");
      }

    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="screen">
      <div className="card">

        <h2 className="title">Sign In</h2>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Sign In
        </button>

        <p className="link" onClick={() => navigate("/signup")}>
          Don’t have an account? Sign Up
        </p>

      </div>
    </div>
  );
}

