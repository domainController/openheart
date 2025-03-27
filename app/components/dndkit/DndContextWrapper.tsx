// app/components/dndkit/DndContextWrapper.tsx
"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

export default function DndContextWrapper({
  children,
  ids,
  onDragEnd,
}: {
  children: React.ReactNode;
  ids: string[];
  onDragEnd: (newOrder: string[]) => void;
}) {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
          const oldIndex = ids.indexOf(active.id as string);
          const newIndex = ids.indexOf(over?.id as string);
          const newOrder = arrayMove(ids, oldIndex, newIndex);
          onDragEnd(newOrder);
        }
      }}
    >
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}
