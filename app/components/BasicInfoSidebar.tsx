// app/components/BasicInfoSidebar.tsx
"use client";
import SectionCard from "@/app/components/ui/SectionCard";

export default function BasicInfoSidebar() {
  return (
    <SectionCard>
      <h2 className="font-semibold text-lg">Identity</h2>

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
    </SectionCard>
  );
}
