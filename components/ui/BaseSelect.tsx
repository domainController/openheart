"use client";

type Option = {
  label: string;
  value: string;
};

interface BaseSelectProps {
  name: string;
  placeholder: string;
  options: Option[];
}

const BaseSelect = ({ name, placeholder, options }: BaseSelectProps) => {
  return (
    <select
      name={name}
      className="w-full text-sm leading-tight px-3 py-2 border border-gray-300 rounded-md bg-white"
    >
      <option value="">{placeholder}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;

/**
 * ──────────────────────────────────────────────
 * 📁 FILE: BaseSelect.tsx
 * ──────────────────────────────────────────────
 * This component is a generic dropdown (select) field
 * used across the Proposal app to standardize the UI.
 *
 * ✅ WHY IT'S USEFUL:
 * - Eliminates repeated HTML code across the app
 * - Ensures a consistent visual design
 * - Allows reusable dropdowns with different values
 *
 * ✅ WHERE IT'S USED:
 * - In LeftColumn (Scenario), RightColumn (Track), and Sidebar
 * - Examples: "Preferred Country", "Occupation", "Degree Earned", etc.
 *
 * ✅ HOW TO USE:
 * <BaseSelect placeholder="Select a country" options={["France", "India", "Brazil"]} />
 *
 * 🧠 GOAL:
 * Make the code more readable, maintainable, and friendly
 * for junior developers or new contributors with strong moral values
 * but limited technical background.
 * ──────────────────────────────────────────────
 */
