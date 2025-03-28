"use client";

import React from "react";

const CareerDreamsInput = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Career Dreams
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
        rows={3}
        placeholder="Describe your professional aspirations..."
      />
    </div>
  );
};

export default CareerDreamsInput;
