import React from "react";
import { supabase } from "@/utils/supabase/client";
interface LastNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

const LastNameInput: React.FC<LastNameInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full space-y-1">
      <label htmlFor="lastName" className="text-sm font-medium">
        Last Name
      </label>
      <Input
        id="lastName"
        placeholder="e.g. Abdallah"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LastNameInput;
