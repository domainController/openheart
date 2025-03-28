// app/components/ui/SectionCard.tsx
"use client";

import React from "react";

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <div
      className={`"bg-white shadow-sm p-4 w-full border border-gray-200" ${className}`}
    >
      {children}
    </div>
  );
};
export default SectionCard;
