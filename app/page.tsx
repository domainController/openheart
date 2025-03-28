"use client";

import BasicIdentitySection from "@/app/components/ui/BasicIdentitySection";
import RelationshipExpectationsSection from "@/app/components/RelationshipExpectationsSection";
import FamilySection from "@/app/components/FamilySection";
import RomanticStatusSection from "@/app/components/RomanticStatusSelect";

export default function UserProfileForm() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Première ligne : Slider au centre, colonne à droite */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zone centrale */}
        <div className="lg:col-span-2 flex items-center justify-center <h-[400px]> rounded-xl bg-white shadow-inner">
          <span className="text-gray-400">[ Photo Slider Here ]</span>
        </div>

        {/* Colonne de droite */}
        <div className="lg:col-span-1">
          <div className="rounded-xl bg-white p-4 shadow-md space-y-4">
            <BasicIdentitySection />
          </div>
        </div>
      </div>

      {/* Ligne du dessous : 3 colonnes côte à côte */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RelationshipExpectationsSection />
        <FamilySection />
        <RomanticStatusSection />
      </div>
    </main>
  );
}
