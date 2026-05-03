import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="card">

        <h2 className="title">Sign In</h2>

        <input className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />

        <button className="btn" onClick={() => navigate("/client")}>
          Sign In
        </button>

        <p className="link" onClick={() => navigate("/signup")}>
          Don’t have an account? Sign Up
        </p>

      </div>
    </div>
  );
}