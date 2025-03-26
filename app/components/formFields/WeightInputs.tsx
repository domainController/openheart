"use client";

import { Input } from "@/components/form_components/inputs/Input";
import { supabase } from "@/utils/supabase/client";

interface WeightInputProps {
  value: string;
  onChange: (value: string) => void;
}

const WeightInput: React.FC<WeightInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full space-y-1">
      <label htmlFor="weight" className="text-sm font-medium">
        Weight (in kg)
      </label>
      <Input
        id="weight"
        placeholder="e.g. 68"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default WeightInput;
