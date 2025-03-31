"use client";

import React from "react";
import Slider from "@/app/components/user-profile/Slider";
import LeftColumn from "@/app/components/user-profile/LeftColumn";
import RightColumn from "@/app/components/user-profile/RightColumn";
import SidebarRight from "@/app/components/SidebarRight";
import Navbar from "@/app/components/Navbar";

const UserProfilePage = () => {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-2 py-4">
      <div className="flex flex-row gap-1">
        <Navbar />
        <div className="flex flex-col w-full gap-2">
          <Slider />
          <div className="flex flex-row gap-1">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
        <SidebarRight />
      </div>
    </main>
  );
};

export default UserProfilePage;
