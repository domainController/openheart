"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

const options = [
  { value: "Me", label: "I expect to be the primary income earner" },
  {
    value: "Partner",
    label: "I expect my partner to be the primary income earner",
  },
  { value: "Both", label: "Shared income responsibility (both)" },
  { value: "Flexible", label: "Depends on the situation / flexible" },
];

export default function DesiredPrimaryIncomeEarnerSelect({
  selectedValues,
  onChange,
}: {
  selectedValues: string[];
  onChange: (values: string[]) => void;
}) {
  const [internalSelected, setInternalSelected] = useState<string[]>(
    selectedValues || []
  );

  const toggleValue = (value: string) => {
    const newSelected = internalSelected.includes(value)
      ? internalSelected.filter((v) => v !== value)
      : [...internalSelected, value];
    setInternalSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">
        Desired Primary Income Earner (multiple allowed)
      </label>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={internalSelected.includes(opt.value)}
              onChange={() => toggleValue(opt.value)}
              className="accent-blue-500"
            />
            <span className="text-sm">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
