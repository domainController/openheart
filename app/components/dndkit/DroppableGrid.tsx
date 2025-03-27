"use client";

import { FC } from "react";
import DraggableSection from "@/app/components/dndkit/DraggableSection";

const sectionLabels = [
  "Section 1",
  "Section 2",
  "Section 3",
  "Section 4",
  "Section 5",
  "Section 6",
  "Section 7",
  "Section 8",
  "Section 9",
  "Section 10",
  "Section 11",
  "Section 12",
  "Section 13",
  "Section 14",
  "Section 15",
  "Section 16",
];

const DroppableGrid: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {sectionLabels.map((label, index) => (
        <DraggableSection key={index} sectionId={`section-${index + 1}`}>
          <div className="text-sm font-semibold text-gray-700 mb-2">
            {label}
          </div>
          <div className="text-gray-500 italic">Drag a component here</div>
        </DraggableSection>
      ))}
    </div>
  );
};

export default DroppableGrid;
