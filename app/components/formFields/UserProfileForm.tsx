"use client";

import React from "react";
import { Input } from "@/components/design/input";
import { Button } from "@/components/design/button";

// Exemple de composants : à remplacer par les vrais champs interactifs
const FieldGroup = ({ title, fields }: { title: string; fields: string[] }) => (
  <div className="space-y-3">
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
    {fields.map((placeholder, i) => (
      <div key={i} className="flex gap-2">
        <Input placeholder={`Enter ${placeholder}`} className="w-full" />
        <Button variant="outline">Save</Button>
      </div>
    ))}
  </div>
);

export default function UserProfileGrid() {
  return (
    <div className="min-h-screen bg-[#fdfcf9] px-12 py-10">
      <h1 className="text-4xl font-bold mb-10">
        <span role="img" aria-label="search">
          🔍
        </span>{" "}
        Proposal MVP - User Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* ORIGIN */}
        <FieldGroup
          title="Origin"
          fields={[
            "original country",
            "current country",
            "region of origin",
            "ethnicity",
            "hometown region",
          ]}
        />

        {/* BASIC IDENTITY */}
        <FieldGroup
          title="Basic Identity"
          fields={[
            "first name",
            "last name",
            "username",
            "birth year",
            "current residence",
          ]}
        />

        {/* SOCIAL & CAREER */}
        <FieldGroup
          title="Social & Career"
          fields={[
            "romantic status",
            "parental status",
            "graduation status",
            "professional status",
            "professional stability",
          ]}
        />

        {/* PREFERENCES */}
        <FieldGroup
          title="Preferences"
          fields={[
            "commitment expectations",
            "desired primary income",
            "family role vision",
            "religious preferences",
            "relocation willingness",
          ]}
        />
      </div>
    </div>
  );
}
