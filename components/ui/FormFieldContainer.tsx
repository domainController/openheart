"use client";

import React from "react";
import { Label } from "@/app/components/ui/label";

interface FormFieldContainerProps {
  label: string;
  children: React.ReactNode;
}

const FormFieldContainer: React.FC<FormFieldContainerProps> = ({
  label,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-sm font-medium text-gray-700">{label}</Label>
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  );
};

export default FormFieldContainer;
