"use client";

import React from "react";

interface SectionCardProps {
  children: React.ReactNode;
  className?: string;
}

const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <div className={`bg-gray-100 text-black p-4 ${className}`}>{children}</div>
  );
};

export default SectionCard;
