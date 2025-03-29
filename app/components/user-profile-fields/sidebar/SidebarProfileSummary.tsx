"use client";

import React from "react";
import ReactionBar from "@/app/components/user-profile-fields/sidebar/ReactionBar";

const PlaceholderBlock = ({ title }: { title: string }) => (
  <div className="bg-white border border-gray-200 rounded-md p-3 text-sm mb-2">
    <span className="text-gray-600 font-medium">{title}</span>
  </div>
);

const Separator = ({ label }: { label: string }) => (
  <div className="text-xs uppercase tracking-widest text-gray-400 my-3 text-center">
    {label}
  </div>
);

const SidebarProfileSummary = () => {
  return (
    <div className="flex flex-col gap-4">
      <PlaceholderBlock title="First Name + Last Name" />
      <PlaceholderBlock title="Romantic Status + Parental Status" />
      <PlaceholderBlock title="Age (calculated from birthdate)" />
      <PlaceholderBlock title="Religion" />
      <PlaceholderBlock title="Nationality (Passport or ID)" />
      <PlaceholderBlock title="Birthplace" />
      <PlaceholderBlock title="Current Residence (Based in)" />
      <PlaceholderBlock title="Ethnicity" />
      <PlaceholderBlock title="Languages Spoken" />

      <Separator label="Reactions" />
      <ReactionBar reactions={["CRUSH", "LOVE", "LIKE", "NOT SURE"]} />
      <ReactionBar
        reactions={["NOT MY TYPE", "MISS STH", "NOT A MATCH", "HIDE", "BLOCK"]}
      />

      <Separator label="Appearance & Health" />
      <PlaceholderBlock title="Physical Appearance" />
      <PlaceholderBlock title="Sports Played" />
      <PlaceholderBlock title="Medical Information" />

      <Separator label="Religious Preferences" />
      <PlaceholderBlock title="Religious Preferences" />
    </div>
  );
};

export default SidebarProfileSummary;
