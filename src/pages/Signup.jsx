import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <div className="card">
        <h2 className="title">Create Account</h2>

        <input className="input" placeholder="Username / Email" />
        <input type="password" className="input" placeholder="Password" />
        <input type="password" className="input" placeholder="Confirm Password" />

        <select className="input">
          <option>Select Platform</option>
          <option>Instagram</option>
          <option>Facebook</option>
          <option>LinkedIn</option>
          <option>Twitter</option>
          <option>YouTube</option>
          <option>Pinterest</option>
        </select>

        <button className="btn">Sign Up</button>

        <p className="link" onClick={() => navigate("/")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}