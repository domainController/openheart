"use client";

import React from "react";

const DesiredPrimaryIncomeEarnerSelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Who should be the primary income earner?
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
        <option value="">Select a preference</option>
        <option value="self">Me (the user)</option>
        <option value="partner">My future partner</option>
        <option value="equal">Equal responsibility</option>
        <option value="flexible">Open / Depends on context</option>
      </select>
    </div>
  );
};

export default DesiredPrimaryIncomeEarnerSelect;
