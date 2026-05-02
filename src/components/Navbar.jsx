export default function Navbar() {
  return (
    <div className="bg-white px-6 py-4 shadow-sm flex justify-between items-center">
      <input
        className="border rounded-lg px-3 py-2 w-1/3"
        placeholder="Search..."
      />

      <div className="flex items-center gap-4">
        <div className="text-gray-600">Anusha</div>
        <div className="w-9 h-9 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
}