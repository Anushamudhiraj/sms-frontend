import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();

  const platforms = [
    { name: "Instagram", icon: <FaInstagram className="icon insta" /> },
    { name: "Facebook", icon: <FaFacebook className="icon fb" /> },
    { name: "LinkedIn", icon: <FaLinkedin className="icon li" /> },
    { name: "Twitter", icon: <FaTwitter className="icon tw" /> },
    { name: "YouTube", icon: <FaYoutube className="icon yt" /> },
    { name: "Pinterest", icon: <FaPinterest className="icon pt" /> },
  ];

  return (
    <div className="screen">
      <div className="card">
        <h2 className="title">Sign Up</h2>

        <input className="input" placeholder="Username" />
        <input className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />

        <p className="subtitle">Select Platforms</p>

        <div className="platforms">
          {platforms.map((p) => (
            <label key={p.name} className="platform-item">
              <input type="checkbox" />
              {p.icon}
              <span>{p.name}</span>
            </label>
          ))}
        </div>

        <button className="btn">Sign Up</button>

        <p className="link" onClick={() => navigate("/")}>
          Already have an account? Sign In
        </p>
      </div>
    </div>
  );
}