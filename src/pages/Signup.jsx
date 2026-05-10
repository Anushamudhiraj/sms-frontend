import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const handlePlatformChange = (value) => {
    if (platforms.includes(value)) {
      setPlatforms(platforms.filter((p) => p !== value));
    } else {
      setPlatforms([...platforms, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, navigate to login
    navigate("/login");
  };

  return (
    <div className="bg-[#fbf8fc] text-[#1b1b1e] min-h-screen flex items-center justify-center p-4 font-['Inter',sans-serif]">
      <main className="w-full max-w-[440px]">
        <div className="bg-white rounded-xl shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)] border border-[#e5e7eb] p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h2 className="font-['Manrope'] text-2xl font-bold text-[#031635]">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1b1b1e]/80" htmlFor="fullname">Full name</label>
                <input
                  className="w-full h-11 px-4 border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-[#031635]/5 focus:border-[#031635] transition-all bg-white outline-none placeholder:text-slate-400"
                  id="fullname"
                  placeholder="John Doe"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1b1b1e]/80" htmlFor="email">Email</label>
                <input
                  className="w-full h-11 px-4 border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-[#031635]/5 focus:border-[#031635] transition-all bg-white outline-none placeholder:text-slate-400"
                  id="email"
                  placeholder="john@agency.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1b1b1e]/80" htmlFor="password">Password</label>
                <input
                  className="w-full h-11 px-4 border border-[#e5e7eb] rounded-lg text-sm focus:ring-2 focus:ring-[#031635]/5 focus:border-[#031635] transition-all bg-white outline-none placeholder:text-slate-400"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-medium text-[#1b1b1e]/80">Select platforms</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: "instagram", label: "Instagram", icon: "https://via.placeholder.com/20?text=I" },
                  { value: "facebook", label: "Facebook", icon: "https://via.placeholder.com/20?text=F" },
                  { value: "linkedin", label: "LinkedIn", icon: "https://via.placeholder.com/20?text=L" },
                  { value: "twitter", label: "Twitter/X", icon: "https://via.placeholder.com/20?text=T" },
                  { value: "youtube", label: "YouTube", icon: "https://via.placeholder.com/20?text=Y" },
                  { value: "pinterest", label: "Pinterest", icon: "https://via.placeholder.com/20?text=P" },
                ].map((platform) => (
                  <label key={platform.value} className="flex items-center gap-3 px-4 py-2 border border-[#e5e7eb] rounded-lg hover:border-[#031635]/30 hover:bg-slate-50 transition-all cursor-pointer relative group">
                    <input
                      className="peer sr-only"
                      name="platforms"
                      type="checkbox"
                      value={platform.value}
                      checked={platforms.includes(platform.value)}
                      onChange={() => handlePlatformChange(platform.value)}
                    />
                    <div className="w-5 h-5 rounded border border-[#e5e7eb] flex items-center justify-center peer-checked:bg-[#031635] peer-checked:border-[#031635] transition-colors">
                      <span className="material-symbols-outlined text-white text-sm hidden peer-checked:block">check</span>
                    </div>
                    <img src={platform.icon} alt={platform.label} className="w-5 h-5" />
                    <span className="text-sm font-medium text-[#1b1b1e]/80">{platform.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="w-full bg-[#031635] text-white h-12 rounded-lg text-base font-semibold hover:opacity-95 active:scale-95 transition-all flex items-center justify-center"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <div className="pt-6 border-t border-slate-100 flex justify-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link to="/login" className="text-[#031635] font-semibold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}