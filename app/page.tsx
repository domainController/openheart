// app/experimental/page.tsx
"use client";

import DraggableSections from "@/components/experimental/DraggableSections";

export default function ExperimentalPage() {
  return (
    <main className="p-8 bg-neutral-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">
        🧪 Proposal Layout Sandbox – Drag & Drop Test
      </h1>
      <p className="mb-4 text-gray-600">
        Tu peux tester ici la disposition des blocs d'information de profil à ta
        guise !
      </p>
      <DraggableSections />
    </main>
  );
}
