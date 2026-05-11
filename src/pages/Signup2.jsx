import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

import { signup } from "../services/authService";

export default function Signup() {
  const navigate = useNavigate();

  // 🔷 State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // 🔷 Platforms (IMPORTANT: use VALUE for backend)
  const platforms = [
    { value: "INSTAGRAM", label: "Instagram", icon: <FaInstagram /> },
    { value: "FACEBOOK", label: "Facebook", icon: <FaFacebook /> },
    { value: "LINKEDIN", label: "LinkedIn", icon: <FaLinkedin /> },
    { value: "TWITTER", label: "Twitter", icon: <FaTwitter /> },
    { value: "YOUTUBE", label: "YouTube", icon: <FaYoutube /> },
    { value: "PINTEREST", label: "Pinterest", icon: <FaPinterest /> },
  ];

  // 🔷 Handle checkbox
  const handleCheckboxChange = (value) => {
    if (selectedPlatforms.includes(value)) {
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== value));
    } else {
      setSelectedPlatforms([...selectedPlatforms, value]);
    }
  };

  // 🔷 Signup handler
  const handleSignup = async () => {
    try {
      const res = await signup({
        email,
        password,
        username,
        platforms: selectedPlatforms,
      });

      console.log("Signup response:", res);

      // 🔥 Redirect after success
      navigate("/");

    } catch (error) {
  console.error("FULL ERROR:", error);
  console.log("RESPONSE:", error?.response?.data);
  alert("Signup failed");
}
  };

  return (
    <div className="screen">
      <div className="card">
        <h2 className="title">Sign Up</h2>

        <input
          className="input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <p className="subtitle">Select Platforms</p>

        <div className="platforms">
          {platforms.map((p) => (
            <label key={p.value} className="platform-item">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(p.value)}
              />
              {p.icon}
              <span>{p.label}</span>
            </label>
          ))}
        </div>

        <button className="btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="link" onClick={() => navigate("/")}>
          Already have an account? Sign In
        </p>
      </div>
    </div>
  );
}

