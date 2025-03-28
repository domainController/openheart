// app/components/user-profile-fields/FirstNameInput.tsx
"use client";

import { Input } from "@/components/design/input";

type FirstNameInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function FirstNameInput({
  value,
  onChange,
}: FirstNameInputProps) {
  return (
    <Input
      placeholder="First name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
