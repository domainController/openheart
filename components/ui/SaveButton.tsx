"use client";

import React from "react";

interface SaveButtonProps {
  onClick?: () => void;
  label?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick, label = "Save" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 text-sm bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
    >
      {label}
    </button>
  );
};

export default SaveButton;
