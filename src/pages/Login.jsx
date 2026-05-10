import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, navigate to client-dashboard
    navigate("/client-dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#fbf8fc] font-['Inter',sans-serif]">
      <main className="w-full max-w-[440px]">
        <div className="bg-white rounded-xl p-8 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-[#e4e2e5]/50">
          <div className="mb-8">
            <h1 className="font-['Manrope'] text-2xl font-bold text-[#031635] mb-1">Sign In</h1>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-xs text-[#44474e] uppercase tracking-wide" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-[#c5c6cf] bg-[#fbf8fc] text-sm focus:border-[#031635] focus:ring-1 focus:ring-[#031635] outline-none transition-all placeholder:text-[#75777f]/50"
                id="email"
                name="email"
                placeholder="name@company.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-xs text-[#44474e] uppercase tracking-wide" htmlFor="password">Password</label>
              <input
                className="w-full px-4 py-3 rounded-lg border border-[#c5c6cf] bg-[#fbf8fc] text-sm focus:border-[#031635] focus:ring-1 focus:ring-[#031635] outline-none transition-all placeholder:text-[#75777f]/50"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-[#031635] text-on-primary font-semibold text-base py-3 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-200 mt-4"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="font-['Inter'] text-sm text-[#44474e]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#031635] font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:block fixed -bottom-10 -right-10 opacity-10">
          <img
            alt=""
            className="w-64 h-auto grayscale rotate-12"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujLIo2tXXOSmsvcPByJg4RmDdJCtaUS19xFpDcM1D4WOF_6fK-e8zAAdFwr5OQa3PBM9aItSY9ZihrjEaTVHYf6H1H9Fw22UqTZvTIrpo5BWGiwuoPg_y0G7bxp5CXAEwCy9k9_0exfDPZUOtFuBVcyB4awS2IaSxQYNwMJUVuP58AGaCGvewf0GhQ2ejmDOAZQi8JXHln78s3kRuLLi14nKKbRPC6qvyf_IIlE131rW_KrgQjdSi1bDxOGYTKHG12YjfTreIisozA"
          />
        </div>
      </main>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e4e2e5_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
    </div>
  );
}