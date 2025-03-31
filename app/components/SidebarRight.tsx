"use client";

import React from "react";
import SidebarProfileFields from "@/app/components/user-profile-fields/sidebar/SidebarProfileFields";

const SidebarRight = () => {
  return (
    <aside className="w-full max-w-[340px] p-1 bg-white flex flex-col gap-1 overflow-y-auto">
      <SidebarProfileFields />
    </aside>
  );
};

export default SidebarRight;
