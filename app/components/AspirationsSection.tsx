// app/components/AspirationsSection.tsx
"use client";
import SectionCard from "@/app/components/ui/SectionCard";

export default function AspirationsSection() {
  return (
    <SectionCard>
      <h2 className="font-semibold text-lg">Aspirations</h2>
      <input
        placeholder="Career dreams..."
        className="w-full p-2 border rounded-md mb-2"
      />
      <input
        placeholder="Education plans..."
        className="w-full p-2 border rounded-md"
      />
    </SectionCard>
  );
}
