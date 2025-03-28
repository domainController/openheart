// app/components/BasicInfoSidebar.tsx
"use client";

export default function BasicInfoSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      <h2 className="text-lg font-semibold">Identity</h2>

      <input
        placeholder="First Name"
        className="w-full p-2 border rounded-md"
      />
      <input placeholder="Last Name" className="w-full p-2 border rounded-md" />
      <input placeholder="Username" className="w-full p-2 border rounded-md" />
      <input
        placeholder="Birth Year"
        type="number"
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
}
