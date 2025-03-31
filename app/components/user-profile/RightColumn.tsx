"use client";

import React from "react";
import TrackSection from "@/app/components/user-profile-fields/track/TrackSection";

const RightColumn = () => {
  return (
    <section className="w-full max-w-[560px] p-1 bg-white flex flex-col gap-1">
      <TrackSection />
    </section>
  );
};

export default RightColumn;
