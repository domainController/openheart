"use client";

import React from "react";
import { supabase } from "@/utils/supabase/client";

interface HeightInputProps {
  value: string;
  onChange: (value: string) => void;
}

const HeightInput: React.FC<HeightInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full space-y-1">
      <label htmlFor="height" className="text-sm font-medium">
        Height (in cm)
      </label>
      <input
        id="height"
        type="text"
        placeholder="e.g. 175"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default HeightInput;
