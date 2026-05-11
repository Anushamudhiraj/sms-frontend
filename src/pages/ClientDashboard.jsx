import ClientLayout from "../components/ClientLayout";

export default function ClientDashboard() {
  return (
    <ClientLayout>
      <div className="p-6">

        {/* Welcome Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#031635] mb-2">
            Welcome back, Sarah
          </h2>

          <p className="text-gray-500">
            Your agency performance is up 12% this week.
          </p>
        </section>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

          <Card
            title="Posts"
            value="24"
            icon="📝"
            color="bg-blue-50"
          />

          <Card
            title="Likes"
            value="1.2K"
            icon="❤️"
            color="bg-pink-50"
          />

          <Card
            title="Reach"
            value="5K"
            icon="📈"
            color="bg-green-50"
          />

          <Card
            title="Analytics"
            value="View"
            icon="📊"
            color="bg-yellow-50"
          />

        </section>

        {/* Detailed Analytics */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-2xl mb-3 block">
              ✏️
            </span>

            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Posts this month
            </p>

            <h3 className="text-4xl font-bold text-[#031635]">
              24
            </h3>

            <div className="flex items-center gap-2 mt-3 text-green-600">
              <span>📈</span>

              <span className="font-semibold text-sm">
                +4.2%
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <span className="text-2xl mb-3 block">
              ❤️
            </span>

            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Total likes
            </p>

            <h3 className="text-4xl font-bold text-[#031635]">
              12.8K
            </h3>

            <div className="flex items-center gap-2 mt-3 text-green-600">
              <span>📈</span>

              <span className="font-semibold text-sm">
                +8.1%
              </span>
            </div>
          </div>

        </section>

        {/* Connected Platforms */}
        <section>

          <h3 className="text-2xl font-bold text-[#031635] mb-5">
            Connected Platforms
          </h3>

          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">

            <PlatformCard name="Instagram" />

            <PlatformCard name="Facebook" />

            <PlatformCard name="LinkedIn" />

            <PlatformCard name="YouTube" />

          </div>

        </section>

      </div>
    </ClientLayout>
  );
}

/* =========================
   CARD COMPONENT
========================= */

function Card({ title, value, icon, color }) {
  return (
    <div
      className={`${color} rounded-2xl p-6 border border-gray-200 shadow-sm`}
    >
      <div className="text-3xl mb-4">
        {icon}
      </div>

      <h4 className="text-gray-500 font-medium mb-2">
        {title}
      </h4>

      <p className="text-3xl font-bold text-[#031635]">
        {value}
      </p>
    </div>
  );
}

/* =========================
   PLATFORM CARD
========================= */

function PlatformCard({ name }) {
  return (
    <div className="flex-shrink-0 bg-white px-6 py-4 rounded-xl border border-gray-200 flex items-center gap-3 shadow-sm">

      <div className="w-3 h-3 rounded-full bg-green-500"></div>

      <span className="font-semibold text-gray-700">
        {name}
      </span>

    </div>
  );
}