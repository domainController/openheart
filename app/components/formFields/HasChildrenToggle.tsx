"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

interface HasChildrenToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  userId: string;
}

export function HasChildrenToggle({
  value,
  onChange,
  userId,
}: HasChildrenToggleProps) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value === "true");
  };

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("user_basic_info")
      .update({ has_children: value })
      .eq("user_id", userId);
    setLoading(false);
    if (error) {
      console.error(
        "Erreur lors de la sauvegarde de has_children :",
        error.message
      );
    }
  };

  return (
    <div className="w-full space-y-1">
      <label htmlFor="has_children" className="text-sm font-medium">
        Has Children
      </label>
      <select
        id="has_children"
        value={value.toString()}
        onChange={handleChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select an option</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
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
