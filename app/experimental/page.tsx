import React from "react";
import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const fields = [
  { id: "original_country", label: "Original Country" },
  { id: "region_of_origin", label: "Region of Origin" },
  { id: "ethnicity", label: "Ethnicity" },
  { id: "birth_year", label: "Birth Year" },
  { id: "romantic_status", label: "Romantic Status" },
];

function DraggableField({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-4 border rounded-md shadow bg-white cursor-move hover:bg-gray-100"
    >
      {label}
    </div>
  );
}

export default function ExperimentalLayout() {
  return (
    <main className="p-6 min-h-screen bg-neutral-100">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          🧪 Experimental Layout Playground
        </h1>
        <p className="mb-8 text-gray-600">
          Here you can test your drag & drop layout ideas!
        </p>

        <DndContext>
          <SortableContext
            items={fields.map((f) => f.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fields.map((field) => (
                <DraggableField
                  key={field.id}
                  id={field.id}
                  label={field.label}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </main>
  );
}
