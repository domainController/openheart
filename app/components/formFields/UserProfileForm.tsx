// app/components/formFields/UserProfileForm.tsx

"use client";

import React from "react";
import FirstNameInput from "./FirstNameInput";
import LastNameInput from "./LastNameInput";
import UsernameInput from "./UsernameInput";
import BirthdateInput from "./BirthdateInput";
import RomanticStatusOptionsSelectFull from "./RomanticStatusOptionsSelectFull";

export default function UserProfileForm() {
  return (
    <div className="space-y-6">
      {/* 🔷 Identity Section */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">🧬 Identity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FirstNameInput value="" onChange={() => {}} />
          <LastNameInput value="" onChange={() => {}} />
          <UsernameInput value="" onChange={() => {}} />
          <BirthdateInput value="" onChange={() => {}} />
        </div>
      </div>

      {/* 💘 Romantic Status Section */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">💘 Romantic Status</h2>
        <RomanticStatusOptionsSelectFull value="" onChange={() => {}} />
      </div>

      {/* 🔮 Vision / Aspirations Section (à venir) */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">🔮 Vision & Aspirations</h2>
        <p className="text-sm text-gray-500">(À venir...)</p>
      </div>

      {/* 🌍 Origins Section (à venir) */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">🌍 Origins & Heritage</h2>
        <p className="text-sm text-gray-500">(À venir...)</p>
      </div>

      {/* 🧠 Preferences & Expectations (à venir) */}
      <div className="border p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          🧠 Preferences & Partner Expectations
        </h2>
        <p className="text-sm text-gray-500">(À venir...)</p>
      </div>
    </div>
  );
}
