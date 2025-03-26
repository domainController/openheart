"use client";

import React from "react";
import { fileForm } from "@/app/components/formFields/UserProfileForm";

export default function PagePreviewForm() {
  return (
    <main className="p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          🔎 Profile Preview (UI Test)
        </h1>
        <fileForm userId="1" />
      </div>
    </main>
  );
}
