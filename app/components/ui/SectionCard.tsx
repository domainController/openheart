// app/components/ui/SectionCard.tsx
import React from "react";

export default function SectionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl p-3 bg-white shadow-sm space-y-3">
      {children}
    </div>
  );
}
