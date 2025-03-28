"use client";

import React from "react";

const options = [
  "I expect to take the lead in domestic and parenting roles",
  "I expect my partner to take the lead",
  "I expect to share all responsibilities equally",
];

const FamilyRoleVisionSelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Domestic & Parenting Role Vision
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
        <option value="">Select a vision</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FamilyRoleVisionSelect;
