import FamilySection from "@/app/components/FamilySection";
import PhotoSlider from "@/app/components/PhotoSlider";
import AspirationsSection from "@/app/components/AspirationsSection";
import SidebarRight from "@/app/components/SidebarRight";

export default function Grid() {
  return (
    <div className="p-8 space-y-4 bg-white text-black min-h-screen">
      <PhotoSlider />
      <AspirationsSection />
      <FamilySection />
      <div className="md:col-span-1">
        <SidebarRight />
      </div>
    </div>
  );
}
