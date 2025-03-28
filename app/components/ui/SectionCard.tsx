// app/components/ui/SectionCard.tsx
"use client";

import React from "react";

type SectionCardProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <div className={`"bg-transparent p-4 w-full" ${className}`}>{children}</div>
  );
};
export default SectionCard;
