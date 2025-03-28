"use client";

import React from "react";

const DealbreakersInput = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Dealbreakers (separate with commas)
      </label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
        placeholder="Smoking, No kids, Political views..."
      />
    </div>
  );
};

export default DealbreakersInput;
