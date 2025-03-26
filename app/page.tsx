"use client";

import React from "react";
import UserProfileForm from "./components/formFields/UserProfileForm";

export default function Page() {
  const userId = "58588cac-c2f3-4d46-a5b2-97e85b969cb5"; // UUID de test

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Proposal</h1>
      <UserProfileForm userId={userId} />
    </div>
  );
}
