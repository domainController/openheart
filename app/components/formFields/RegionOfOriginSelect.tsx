"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";

interface RegionOfOriginSelectProps {
  value: string;
  onChange: (value: string) => void;
  userId: string;
}

export function RegionOfOriginSelect({
  value,
  onChange,
  userId,
}: RegionOfOriginSelectProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = async () => {
    onChange(inputValue);
    const supabase = (await import("@/utils/supabase/client")).createClient();
    await supabase
      .from("user_basic_info")
      .update({ region_of_origin: inputValue })
      .eq("user_id", userId);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Region of Origin (free text)
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="e.g. Kabylie, Tamil Nadu, Bafoussam..."
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
      />
    </div>
  );
}
