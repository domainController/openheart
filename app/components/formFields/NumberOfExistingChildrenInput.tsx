"use client";

import { InputHTMLAttributes } from "react";

interface NumberOfExistingChildrenInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function NumberOfExistingChildrenInput({
  value,
  onChange,
  ...rest
}: NumberOfExistingChildrenInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor="numberOfExistingChildren"
        className="block font-semibold mb-1"
      >
        Number of Existing Children
      </label>
      <input
        id="numberOfExistingChildren"
        type="number"
        min="0"
        value={value ?? ""}
        onChange={onChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      />
    </div>
  );
}
