"use client";

import React from "react";

interface SectionWrapperProps {
  title?: string;
  children: React.ReactNode;
}

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <section className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow-sm">
      {title && (
        <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
