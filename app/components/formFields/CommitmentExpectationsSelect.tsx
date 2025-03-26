"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

interface CommitmentExpectationsProps {
  value: string;
  onChange: (value: string) => void;
  userId: string;
}

export function CommitmentExpectationsSelect({
  value,
  onChange,
  userId,
}: CommitmentExpectationsProps) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("user_basic_info")
      .update({ commitment_expectations: value })
      .eq("user_id", userId);
    setLoading(false);
    if (error) {
      console.error(
        "Erreur lors de la sauvegarde des commitment expectations :",
        error.message
      );
    }
  };

  return (
    <div className="w-full space-y-1">
      <label htmlFor="commitment_expectations" className="text-sm font-medium">
        Commitment Expectations
      </label>
      <select
        id="commitment_expectations"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        {commitmentOptions.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.user_friendly_label} — {option.description}
          </option>
        ))}
      </select>
      <button
        onClick={handleSave}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
