"use client";

import React from "react";

interface FormFieldProps {
  label?: string;
  children: React.ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className="mb-2">
      {label && <label className="block text-sm text-gray-700 mb-1">{label}</label>}
      {children}
    </div>
  );
};

export default FormField;
