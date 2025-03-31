"use client";

import React from "react";

const FamilyRoleVisionInput = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-3 shadow-sm">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Your vision of family roles (education, parenting, balance...)
      </label>
      <textarea
        className="w-full border border-gray-300 rounded-md p-2 text-sm"
        rows={3}
        placeholder="E.g. I want to be involved in daily parenting and prioritize home education..."
      />
    </div>
  );
};

export default FamilyRoleVisionInput;
