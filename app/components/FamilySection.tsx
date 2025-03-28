// app/components/FamilySection.tsx
"use client";

import React, { useState } from "react"; // ✅ nécessaire pour que useState fonctionne
import SectionCard from "@/app/components/ui/SectionCard";
import Select from "@/app/components/ui/Select";
import parentalStatus from "@/app/components/data/parental_status_reference.json";

const FamilySection = () => {
  const [formData, setFormData] = useState({
    hasChildren: "",
    parentalStatus: "",
  });

  console.log("formData.hasChildren:", formData.hasChildren); // 👈 ICI

  return (
    <SectionCard>
      <Select
        placeholder="Do you have any children?"
        value={formData.hasChildren}
        onChange={(val) =>
          setFormData({
            ...formData,
            hasChildren: val,
            parentalStatus: val === "yes" ? formData.parentalStatus : "",
          })
        }
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ]}
      />

      {formData.hasChildren === "yes" && (
        <Select
          placeholder="Parental Status"
          value={formData.parentalStatus}
          onChange={(val) => setFormData({ ...formData, parentalStatus: val })}
          options={parentalStatus}
        />
      )}
    </SectionCard>
  );
};

export default FamilySection;
