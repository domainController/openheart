"use client";

import React from "react";
import BaseSelect from "@/components/ui/BaseSelect";

const PreferredCountriesSelect = () => {
  return (
    <BaseSelect
      name="preferred_countries_of_residence"
      placeholder="Preferred Countries of Residence"
      options={[
        { label: "France", value: "france" },
        { label: "Morocco", value: "morocco" },
        { label: "Philippines", value: "philippines" },
        { label: "United States", value: "usa" },
        { label: "Canada", value: "canada" },
      ]}
    />
  );
};

export default PreferredCountriesSelect;

/*
This component displays a dropdown field specifically for selecting the user's preferred countries of residence.
It reuses the generic BaseSelect component, making it consistent with other dropdowns in the app.

Why we built it:
- Avoids hardcoding styles and logic for each dropdown.
- Enables placeholder to act as a label inside the field.
- Keeps the design tight, modern, and intuitive for future scalability.
- Allows rapid prototyping (real data from Algolia can be plugged in later).

This structure also makes it easier to keep visual alignment across the form.
*/
