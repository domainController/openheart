"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";

interface ParentalStatusSelectProps {
  value: string;
  onChange: (value: string) => void;
  userId: string;
  hasChildren: boolean;
}

export function ParentalStatusSelect({
  value,
  onChange,
  userId,
  hasChildren,
}: ParentalStatusSelectProps) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("user_basic_info")
      .update({ parental_status: value })
      .eq("user_id", userId);
    setLoading(false);
    if (error) {
      console.error(
        "Erreur lors de la sauvegarde de parental_status :",
        error.message
      );
    }
  };

  if (!hasChildren) return null;

  return (
    <div className="w-full space-y-1">
      <label htmlFor="parental_status" className="text-sm font-medium">
        Parental Status
      </label>
      <select
        id="parental_status"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        {parentalStatusOptions.map((option: any) => (
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
