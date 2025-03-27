"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

type DraggableSectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

export default function DraggableSection({
  id,
  title,
  children,
}: DraggableSectionProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border border-gray-300 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-move"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <div className="space-y-2">
        {children || (
          <p className="text-sm text-gray-500">This section is empty.</p>
        )}
      </div>
    </div>
  );
}
