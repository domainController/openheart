// ui/Select.tsx
"use client";

import {
  Select as ShadSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/design/select"; // modifie ce chemin si besoin
import { Label } from "@/app/components/ui/label";
import React from "react";

type Option = {
  id?: number | string;
  value: string;
  label: string;
};

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
};

const Select: React.FC<Props> = ({
  label,
  placeholder,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {label && <Label>{label}</Label>}
      <ShadSelect value={value} onValueChange={onChange}>
        <SelectTrigger className="border-none bg-transparent shadow-none focus:outline-none text-sm">
          <SelectValue placeholder={placeholder || "Sélectionner..."} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id ?? option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadSelect>
    </div>
  );
};

export default Select;
