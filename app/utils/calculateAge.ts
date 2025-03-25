// utils/calculateAge.ts

export function calculateDecimalAge(birthDate: Date): number {
  const now = new Date();
  const years = now.getFullYear() - birthDate.getFullYear();
  const months = now.getMonth() - birthDate.getMonth();
  const days = now.getDate() - birthDate.getDate();

  let age = years + months / 12;
  if (days < 0) age -= 1 / 12; // retirer un dixième de mois si le jour n’est pas encore passé
  return Math.round(age * 10) / 10; // arrondi à 1 décimale
}


// components/BirthdateAgeCalculator.tsx

"use client";

import { useState } from "react";
import { calculateDecimalAge } from "../utils/calculateAge";

export default function BirthdateAgeCalculator({ onBirthdateChange }: { onBirthdateChange?: (date: Date) => void }) {
  const [birthdate, setBirthdate] = useState<string>("");
  const [age, setAge] = useState<number | null>(null);

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dateStr = e.target.value;
    setBirthdate(dateStr);
    const date = new Date(dateStr);
    if (!isNaN(date.getTime())) {
      const calculatedAge = calculateDecimalAge(date);
      setAge(calculatedAge);
      onBirthdateChange?.(date);
    } else {
      setAge(null);
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="birthdate" className="text-sm font-medium">
        Date of Birth
      </label>
      <div className="flex items-center space-x-4">
        <input
          id="birthdate"
          type="date"
          value={birthdate}
          onChange={handleDateChange}
          className="border p-2 rounded-md"
        />
        {age !== null && (
          <span className="text-sm text-gray-700">{age} years old</span>
        )}
      </div>
    </div>
  );
}