"use client";

import React from "react";
import BaseSelect from "@/components/ui/BaseSelect";

const CoupleRelationshipValues = () => {
  return (
    <BaseSelect
      name="couple_relationship_values"
      placeholder="Couple Relationship Values"
      options={[
        { label: "Trust & Loyalty", value: "trust loyalty" },
        { label: "Mutual Support", value: "mutual support" },
        { label: "Compromise & Patience", value: "compromise patience" },
      ]}
    />
  );
};

export default CoupleRelationshipValues;

/*
This component displays a dropdown for selecting core values expected
in a romantic relationship (trust, compromise, patience, etc.).

It relies on the BaseSelect component to ensure styling and behavior consistency
across the app’s dropdowns.

Why we built it:
– Values are important for matchmaking and compatibility filtering.
– Allows centralization of UI logic for dropdown fields.
– Keeps placeholder inside the field to save vertical space.
– Makes switching to Algolia autocomplete effortless later.

This structure is reusable and lightweight, ideal for MVP iterations.
*/
