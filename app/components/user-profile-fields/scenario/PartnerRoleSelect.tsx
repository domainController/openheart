"use client";

import React from "react";

const PartnerRoleSelect = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Desired Partner Role
      </label>
      <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
        <option value="">Select a role</option>
        <option value="stay-at-home">Stay-at-home</option>
        <option value="shared">Equal responsibilities</option>
        <option value="provider">Primary provider</option>
      </select>
    </div>
  );
};

export default PartnerRoleSelect;
