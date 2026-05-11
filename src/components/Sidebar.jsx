export default function Sidebar({ role }) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6">
      <h2 className="text-xl font-bold mb-8">SMMS</h2>

      <nav className="space-y-4">
        <p className="hover:text-blue-400 cursor-pointer">Overview</p>

        {role === "SMH" && (
          <>
            <p>Clients</p>
            <p>Content</p>
            <p>AI Generator</p>
            <p>Posts</p>
            <p>Reports</p>
          </>
        )}

        <p>Analytics</p>
        <p className="text-red-400 mt-10">Logout</p>
      </nav>
    </div>
  );
}