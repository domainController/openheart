"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

interface FirstNameInputProps {
  value: string;
  onChange: (value: string) => void;
  userId: string;
}

export default function FirstNameInput({
  value,
  onChange,
  userId,
}: FirstNameInputProps) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("user_basic_info")
      .update({ first_name: value })
      .eq("user_id", userId);
    setLoading(false);
    if (error) {
      console.error("Erreur lors de la sauvegarde :", error.message);
    }
  };

  return (
    <div className="w-full space-y-1">
      <label htmlFor="firstName" className="text-sm font-medium">
        First Name
      </label>
      <Input
        id="firstName"
        value={value}
        placeholder="e.g. Aïcha"
        onChange={(e) => onChange(e.target.value)}
      />
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
