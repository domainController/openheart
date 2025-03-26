"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/form_components/inputs/Input";
import { createClient } from "@/utils/supabase/client";
import calculateAge from "@/utils/calculateAge";

interface BirthdateInputProps {
  birthdate: string;
  onChange: (value: string) => void;
  userId: string;
}

export function BirthdateInput({
  birthdate,
  onChange,
  userId,
}: BirthdateInputProps) {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState<string | null>(null);

  useEffect(() => {
    if (birthdate) {
      const calculated = calculateAge(birthdate);
      setAge(calculated);
    }
  }, [birthdate]);

  const handleSave = async () => {
    setLoading(true);
    const { error } = await supabase
      .from("user_basic_info")
      .update({ birthdate })
      .eq("user_id", userId);
    setLoading(false);
    if (error) {
      console.error(
        "Erreur lors de la sauvegarde de la date de naissance :",
        error.message
      );
    }
  };

  return (
    <div className="w-full space-y-1">
      <label htmlFor="birthdate" className="text-sm font-medium">
        Birthdate{" "}
        {age && <span className="text-gray-500">(Age: {age} years)</span>}
      </label>
      <Input
        id="birthdate"
        type="date"
        value={birthdate}
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
