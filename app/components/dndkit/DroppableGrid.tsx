"use client";

import React from "react";

type Section = {
  id: string;
  content?: React.ReactNode;
};

type Props = {
  sections: Section[];
};

export default function GridLayoutWrapper({ sections }: Props) {
  return (
    <div className="w-full min-h-screen bg-blue-100 p-8">
      <div className="grid grid-cols-4 gap-4 w-full min-h-screen">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl shadow p-4 h-full min-h-[160px] flex flex-col justify-start"
          >
            <h2 className="font-semibold text-sm mb-2">{section.id}</h2>
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
{
  sections.map((section) => (
    <div key={section.id} className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-sm mb-2">{section.id}</h2>

      {section.content ? (
        section.content
      ) : (
        <p className="text-sm italic text-muted-foreground">
          Drag a component here
        </p>
      )}
    </div>
  ));
}
