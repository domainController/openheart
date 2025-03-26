"use client";

import romanticStatusOptions from "@/app/components/data/romantic_status_options_full.json";
import { supabase } from "@/utils/supabase/client";

interface RomanticStatusSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RomanticStatusSelectFull({
  value,
  onChange,
}: RomanticStatusSelectProps) {
  return (
    <div className="w-full space-y-1">
      <label htmlFor="romanticStatus" className="text-sm font-medium">
        Romantic Status
      </label>
      <select
        id="romanticStatus"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select your status</option>
        {romanticStatusOptions.map((option) => (
          <option key={option.status} value={option.status}>
            {option.status} — {option.user_friendly_label}
          </option>
        ))}
      </select>
    </div>
  );
}
