import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/client-dashboard", icon: "dashboard" },
  { name: "Scheduler", href: "/scheduler-client", icon: "calendar_today" },
  { name: "Analytics", href: "/analytics-client", icon: "monitoring" },
  { name: "AI Insights", href: "/ai-insights", icon: "auto_awesome" },
  { name: "Settings", href: "/settings", icon: "settings" },
];

export default function Layout({ children, title, subtitle }) {
  const location = useLocation();

  return (
    <div className="text-[#1b1b1e] overflow-x-hidden bg-[#fbf8fc]">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-full w-[240px] z-50 bg-[#1a2b4b] text-[#8293b8] flex flex-col gap-2 p-4">
        <div className="px-4 py-6 mb-4">
          <h1 className="font-['Manrope'] text-xl font-bold text-white">Client Dashboard</h1>
        </div>
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? "bg-[#1a2b4b]/20 text-white rounded-lg"
                  : "text-[#8293b8]/70 hover:text-white hover:bg-[#1a2b4b]/10"
              } px-4 py-2 rounded-lg flex items-center gap-4 transition-colors`}
            >
              <span className="material-symbols-outlined text-base">{item.icon}</span>
              <span className="font-['Inter'] text-sm">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
      {/* MAIN WRAPPER */}
      <div className="ml-[240px] flex flex-col min-h-screen">
        {/* TOP NAVBAR */}
        <header className="sticky top-0 z-40 w-full bg-[#fbf8fc] border-b border-[#c5c6cf] shadow-sm flex justify-end items-center px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              <h2 className="font-['Manrope'] text-xl font-bold text-[#031635]">{title}</h2>
              <p className="font-['Inter'] text-xs font-semibold text-[#44474e] uppercase tracking-wide">{subtitle}</p>
            </div>
            <div className="flex items-center gap-4 border-l border-[#c5c6cf] pl-6">
              <button className="relative p-2 hover:bg-[#e9e7eb] rounded-full transition-colors">
                <span className="material-symbols-outlined text-[#44474e]">notifications</span>
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#3e2700] border-2 border-[#fbf8fc] rounded-full"></span>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#031635] flex items-center justify-center text-white font-bold text-xs">SR</div>
              </div>
            </div>
          </div>
        </header>
        {/* CONTENT */}
        <main className="p-8 space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}