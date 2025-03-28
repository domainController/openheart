// app/components/RelationshipExpectationsSection.tsx
"use client";

import React, { useState } from "react";
import Select from "@/app/components/ui/Select";
import romanticStatusOptions from "@/app/components/data/romantic_status_reference.json";
import SectionCard from "@/app/components/ui/SectionCard";

const romanticStatusFormatted = romanticStatusOptions.map((item) => ({
  value: item.status,
  label: item.user_friendly_label,
}));

const RelationshipExpectationsSection = () => {
  const [formData, setFormData] = useState({
    romanticStatus: "",
  });

  return (
    <SectionCard>
      <Select
        placeholder="Romantic Status"
        value={formData.romanticStatus}
        onChange={(val) => setFormData({ ...formData, romanticStatus: val })}
        options={romanticStatusFormatted}
      />
    </SectionCard>
  );
};

export default RelationshipExpectationsSection;
