import Layout from "../components/Layout";

export default function ClientDashboard() {
  return (
    <Layout title="My Dashboard" subtitle="Your social media overview — May 6, 2026">
      {/* ANALYTICS ROW */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-[#c5c6cf]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-2">
          <span className="font-['Inter'] text-xs font-semibold text-[#44474e] uppercase tracking-wide">Posts this month</span>
          <div className="flex items-end justify-between">
            <span className="font-['Manrope'] text-3xl font-bold text-[#031635]">24</span>
            <span className="font-['Inter'] text-xs font-semibold text-teal-600 flex items-center">
              +12% <span className="material-symbols-outlined text-sm">trending_up</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-[#c5c6cf]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-2">
          <span className="font-['Inter'] text-xs font-semibold text-[#44474e] uppercase tracking-wide">Total likes</span>
          <div className="flex items-end justify-between">
            <span className="font-['Manrope'] text-3xl font-bold text-[#031635]">1.7K</span>
            <span className="font-['Inter'] text-xs font-semibold text-teal-600 flex items-center">
              +8% <span className="material-symbols-outlined text-sm">trending_up</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-[#c5c6cf]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-2">
          <span className="font-['Inter'] text-xs font-semibold text-[#44474e] uppercase tracking-wide">Total reach (30d)</span>
          <div className="flex items-end justify-between">
            <span className="font-['Manrope'] text-3xl font-bold text-[#031635]">15.2K</span>
            <span className="font-['Inter'] text-xs font-semibold text-red-500 flex items-center">
              -2% <span className="material-symbols-outlined text-sm">trending_down</span>
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-[#c5c6cf]/30 shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col gap-2">
          <span className="font-['Inter'] text-xs font-semibold text-[#44474e] uppercase tracking-wide">Scheduled posts</span>
          <div className="flex items-end justify-between">
            <span className="font-['Manrope'] text-3xl font-bold text-[#031635]">5</span>
            <span className="font-['Inter'] text-xs font-semibold text-[#b6c6ef]">On track</span>
          </div>
        </div>
      </section>
      {/* SEARCH BAR AREA */}
      <section className="max-w-none">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#75777f]">search</span>
          <input
            className="w-full bg-[#f5f3f6] border border-[#c5c6cf] rounded-full pl-12 pr-4 py-3 focus:ring-1 focus:ring-[#031635] focus:border-[#031635] outline-none transition-all font-['Inter'] text-sm shadow-sm"
            placeholder="Search posts, platforms, analytics..."
            type="text"
          />
        </div>
      </section>
      {/* Additional content can be added here */}
    </Layout>
  );
}