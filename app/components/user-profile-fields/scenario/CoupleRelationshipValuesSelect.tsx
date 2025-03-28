"use client";

import React from "react";

const values = [
  "Trust",
  "Communication",
  "Compromise",
  "Loyalty",
  "Faith",
  "Mutual Respect",
  "Patience",
  "Emotional Support",
];

const CoupleRelationshipValuesSelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Key values you expect in a couple
      </label>
      <div className="grid grid-cols-2 gap-2">
        {values.map((value) => (
          <label key={value} className="flex items-center text-sm gap-2">
            <input
              type="checkbox"
              value={value}
              className="accent-indigo-500"
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CoupleRelationshipValuesSelect;
