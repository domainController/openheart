"use client";

import React from "react";

interface Section {
  id: string;
  content?: React.ReactNode;
}

interface GridLayoutWrapperProps {
  sections: Section[];
}
export default function GridLayoutWrapper({
  sections,
}: GridLayoutWrapperProps) {
  return (
    <div className="w-full min-h-screen bg-blue-100 p-8">
      <div className="grid grid-cols-4 gap-4 w-full min-h-screen">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl shadow p-4 h-full min-h-[160px] flex flex-col justify-start"
          >
            <h3 className="text-sm font-semibold text-gray-800 mb-2">
              {section.id.replace("section-", "Section ")}
            </h3>

            {section.content ? (
              section.content
            ) : (
              <p className="text-sm italic text-muted-foreground">
                Drag a component here
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
