import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialSections = [
  {
    id: "identity",
    title: "🪪 Identity",
    fields: ["First Name", "Last Name", "Username", "Birthdate"],
  },
  {
    id: "origin",
    title: "🌍 Origins",
    fields: ["Original Country", "Region of Origin", "Ethnicity"],
  },
  {
    id: "status",
    title: "📊 Social Status",
    fields: ["Romantic Status", "Has Children", "Parental Status"],
  },
  {
    id: "expectations",
    title: "💭 Partner Expectations",
    fields: [
      "Commitment Expectations",
      "Desired Primary Income Earner",
      "Family Role Vision",
      "Children Education Vision",
    ],
  },
];

function SortableSection({ id, title, fields }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    background: "#fff",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    cursor: "grab",
    width: "100%",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {fields.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProfileLayoutEditor() {
  const [sections, setSections] = useState(initialSections);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over.id);
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        🧩 Arrange your Profile Layout
      </h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {sections.map((section) => (
              <SortableSection
                key={section.id}
                id={section.id}
                title={section.title}
                fields={section.fields}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
