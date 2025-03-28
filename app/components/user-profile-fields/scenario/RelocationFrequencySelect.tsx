"use client";

import React from "react";

const RelocationFrequencySelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        How often are you open to relocating?
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
        <option value="">Choose frequency</option>
        <option value="never">Never</option>
        <option value="rarely">Once per decade</option>
        <option value="sometimes">Every 3-5 years</option>
        <option value="often">Every year if needed</option>
      </select>
    </div>
  );
};

export default RelocationFrequencySelect;
