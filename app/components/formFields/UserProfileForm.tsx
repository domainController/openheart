"use client";

import React from "react";
import { Input } from "@/components/design/input";
import { Button } from "@/components/design/button";

const fieldWrapper = "flex flex-col gap-1";
const labelStyle = "text-sm font-medium text-gray-700";
const inputStyle =
  "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/50";
const buttonStyle =
  "px-4 py-1 rounded-md border shadow-sm text-sm font-semibold bg-white hover:bg-gray-50";

const sectionTitle = "text-xl font-semibold mb-4 text-black";
const sectionWrapper = "space-y-6";

export default function UserProfileForm({ userId }: { userId: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-8 py-12 bg-[#fdfdfc]">
      {/* Origin */}
      <div className={sectionWrapper}>
        <h2 className={sectionTitle}>Origin</h2>
        {renderField("Original Country")}
        {renderField("Current Country")}
        {renderField("Region of Origin")}
        {renderField("Ethnicity")}
        {renderField("Hometown Region")}
      </div>

      {/* Basic Identity */}
      <div className={sectionWrapper}>
        <h2 className={sectionTitle}>Basic Identity</h2>
        {renderField("First Name")}
        {renderField("Last Name")}
        {renderField("Username")}
        {renderField("Birth Year")}
        {renderField("Current Residence")}
      </div>

      {/* Social & Career */}
      <div className={sectionWrapper}>
        <h2 className={sectionTitle}>Social & Career</h2>
        {renderField("Romantic Status")}
        {renderField("Parental Status")}
        {renderField("Graduation Status")}
        {renderField("Professional Status")}
        {renderField("Professional Stability")}
      </div>

      {/* Preferences */}
      <div className={sectionWrapper}>
        <h2 className={sectionTitle}>Preferences</h2>
        {renderField("Commitment Expectations")}
        {renderField("Desired Primary Income Earner")}
        {renderField("Family Role Vision")}
        {renderField("Religious Preferences")}
        {renderField("Relocation Willingness")}
      </div>
    </div>
  );
}

function renderField(label: string) {
  return (
    <div className={fieldWrapper}>
      <label className={labelStyle}>{label}</label>
      <div className="flex gap-2">
        <Input
          className={inputStyle}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <Button className={buttonStyle}>Save</Button>
      </div>
    </div>
  );
}
