"use client";

import { useState, useEffect } from "react";
import { calculateAge } from "@/app/utils/calculateAge";

interface BirthdateInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BirthdateInput({
  value,
  onChange,
}: BirthdateInputProps) {
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    if (value) {
      const result = calculateAge(value);
      setAge(result);
    } else {
      setAge(null);
    }
  }, [value]);

  return (
    <div className="w-full space-y-1">
      <label htmlFor="birthdate" className="text-sm font-medium">
        Birthdate
      </label>
      <input
        id="birthdate"
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {age !== null && (
        <p className="text-xs text-gray-600 mt-1">
          Estimated Age: <span className="font-semibold">{age}</span> years
        </p>
      )}
    </div>
  );
}
