"use client";

import { useEffect, useState } from "react";

interface OriginalCountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  userId: string;
}

export function OriginalCountrySelect({
  value,
  onChange,
  userId,
}: OriginalCountrySelectProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleBlur = async () => {
    onChange(inputValue);
    const supabase = (await import("@/utils/supabase/client")).createClient();
    await supabase
      .from("user_basic_info")
      .update({ original_country: inputValue })
      .eq("user_id", userId);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        Original Country (free text)
      </label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="e.g. Algeria, Cameroon, India, Palestine..."
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm"
      />
      <p className="text-xs text-gray-500 mt-1">
        Please enter the country your family originally comes from — regardless
        of your current citizenship.
      </p>
    </div>
  );
}
