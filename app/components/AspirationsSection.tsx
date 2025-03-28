// app/components/AspirationsSection.tsx
"use client";

export default function AspirationsSection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Aspirations</h2>
      <input
        placeholder="Career dreams..."
        className="w-full p-2 border rounded-md mb-2"
      />
      <input
        placeholder="Education plans..."
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
}
