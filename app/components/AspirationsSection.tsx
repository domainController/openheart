"use client";

import React, { useState } from "react";
import SectionCard from "@/app/components/ui/SectionCard";

const AspirationsSection = () => {
  const [formData, setFormData] = useState({
    careerDreams: "",
    educationPlans: "",
    educationalVision: "",
    desiredFamilyRole: "",
    financialResponsibility: "",
    commitmentExpectation: "",
    preferredCountriesOfResidence: "",
    relocationPreferences: {
      willingness: "",
      frequency: "",
    },
  });

  return (
    <SectionCard>
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Career dreams..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.careerDreams}
          onChange={(e) =>
            setFormData({ ...formData, careerDreams: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Education plans..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.educationPlans}
          onChange={(e) =>
            setFormData({ ...formData, educationPlans: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Vision éducative pour les enfants..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.educationalVision}
          onChange={(e) =>
            setFormData({ ...formData, educationalVision: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Desired domestic role (e.g., Stay-at-home, Equal share)..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.desiredFamilyRole}
          onChange={(e) =>
            setFormData({ ...formData, desiredFamilyRole: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Financial responsibility expectations (e.g., Primary earner)..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.financialResponsibility}
          onChange={(e) =>
            setFormData({
              ...formData,
              financialResponsibility: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Commitment expectations (e.g., Religious marriage, Civil marriage)..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.commitmentExpectation}
          onChange={(e) =>
            setFormData({ ...formData, commitmentExpectation: e.target.value })
          }
        />

        {/* New fields for Residence Preferences */}
        <input
          type="text"
          placeholder="Preferred Countries of Residence..."
          className="w-full bg-white text-black px-3 py-2"
          value={formData.preferredCountriesOfResidence}
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredCountriesOfResidence: e.target.value,
            })
          }
        />
        <div className="space-y-2">
          <select
            className="w-full bg-white text-black px-3 py-2"
            value={formData.relocationPreferences.willingness}
            onChange={(e) =>
              setFormData({
                ...formData,
                relocationPreferences: {
                  ...formData.relocationPreferences,
                  willingness: e.target.value,
                },
              })
            }
          >
            <option value="">Relocation Willingness...</option>
            <option value="Willing">Willing</option>
            <option value="Not willing">Not willing</option>
            <option value="Undecided">Undecided</option>
          </select>
          <select
            className="w-full bg-white text-black px-3 py-2"
            value={formData.relocationPreferences.frequency}
            onChange={(e) =>
              setFormData({
                ...formData,
                relocationPreferences: {
                  ...formData.relocationPreferences,
                  frequency: e.target.value,
                },
              })
            }
          >
            <option value="">Relocation Frequency...</option>
            <option value="Frequent">Frequent</option>
            <option value="Occasional">Occasional</option>
            <option value="Rare">Rare</option>
          </select>
        </div>
      </div>
    </SectionCard>
  );
};

export default AspirationsSection;
