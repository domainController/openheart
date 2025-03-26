"use client";

import { UserProfileForm } from "@/components/formFields/UserProfileForm";

export default function UserProfileForm({ userId }: fileFormProps) {
  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">
          🔎 Profile Preview (UI Test)
        </h1>
        <UserProfileForm userId="1" />
      </div>
    </main>
  );
}
