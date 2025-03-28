"use client";

import React from "react";

const CommitmentExpectationsSelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Commitment Expectation
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
        <option value="">Select an option</option>
        <option value="marriage">Marriage-based union</option>
        <option value="long-term">Long-term partnership</option>
        <option value="open">Open to different outcomes</option>
      </select>
    </div>
  );
};

export default CommitmentExpectationsSelect;
