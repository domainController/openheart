// app/components/Grid.tsx
"use client";

import PhotoSlider from "./PhotoSlider";
import BasicInfoSidebar from "./BasicInfoSidebar";
import AspirationsSection from "./AspirationsSection";
import RelationshipExpectationsSection from "./RelationshipExpectationsSection";
import FamilySection from "./FamilySection";

export default function Grid() {
  return (
    <div className="grid grid-cols-12 gap-4 w-full p-6 min-h-screen bg-slate-100">
      {/* Centre - Slider */}
      <div className="col-span-9">
        <PhotoSlider />

        <div className="space-y-6 mt-6">
          <AspirationsSection />
          <RelationshipExpectationsSection />
          <FamilySection />
        </div>
      </div>

      {/* Colonne droite */}
      <div className="col-span-3">
        <BasicInfoSidebar />
      </div>
    </div>
  );
}
