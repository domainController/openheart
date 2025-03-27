// app/components/GridSectionLayout.tsx
"use client";

import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import DroppableZone from "@/app/components/DroppableZone";
import { sectionsData } from "@/app/data/sectionsData";

export default function GridSectionLayout() {
  const [sections, setSections] = useState(sectionsData);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over?.id);
      const newSections = [...sections];
      const [moved] = newSections.splice(oldIndex, 1);
      newSections.splice(newIndex, 0, moved);
      setSections(newSections);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 bg-gray-100 min-h-screen">
        {sections.map((section, index) => (
          <DroppableZone
            key={section.id}
            id={section.id}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </DndContext>
  );
}
