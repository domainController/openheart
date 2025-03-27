"use client";

import React from "react";
import DroppableGrid from "@/app/components/dndkit/DroppableGrid";

const GridLayoutWrapper = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] p-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Proposal UX – Interactive Grid Builder (16 zones)
        </h1>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white">
          <DroppableGrid />
        </div>
      </div>
    </div>
  );
};

export default GridLayoutWrapper;
