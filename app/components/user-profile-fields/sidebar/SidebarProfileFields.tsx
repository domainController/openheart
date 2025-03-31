"use client";

import React from "react";

const SidebarProfileFields = () => {
  return (
    <section className="flex flex-col gap-1 bg-white p-1 w-full">
      {/* Name Fields (side-by-side) */}
      <div className="flex gap-1">
        <select className="w-1/2 p-1 border border-gray-300 text-sm text-gray-700">
          <option value="">First Name</option>
          <option value="khalil">Khalil</option>
          <option value="amina">Amina</option>
          <option value="leila">Leila</option>
        </select>
        <select className="w-1/2 p-1 border border-gray-300 text-sm text-gray-700">
          <option value="">Last Name</option>
          <option value="ben">Ben</option>
          <option value="abdul">Abdul</option>
          <option value="el-hadi">El Hadi</option>
        </select>
      </div>

      {/* Username */}
      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Username</option>
        <option value="moonlight47">moonlight47</option>
        <option value="honestseeker">honestseeker</option>
        <option value="amina93">amina93</option>
      </select>

      {/* Status */}
      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Romantic Status</option>
        <option value="single">Single</option>
        <option value="divorced">Divorced</option>
        <option value="widowed">Widowed</option>
      </select>

      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Parental Status</option>
        <option value="no-children">No Children</option>
        <option value="co-parenting">Shared Custody</option>
        <option value="single-parent">Single Parent</option>
      </select>

      {/* Height */}
      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Height (cm)</option>
        <option value="160">160</option>
        <option value="170">170</option>
        <option value="180">180</option>
      </select>

      {/* Calculated Age */}
      <input
        type="text"
        className="w-full p-1 border border-gray-300 text-sm text-gray-700"
        placeholder="Age (auto-calculated)"
      />

      {/* Religion */}
      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Religion</option>
        <option value="islam">Islam</option>
        <option value="christianity">Christianity</option>
        <option value="none">Not Religious</option>
      </select>

      {/* Origin / Location */}
      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Passport Nationality</option>
        <option value="morocco">Morocco</option>
        <option value="france">France</option>
        <option value="tunisia">Tunisia</option>
      </select>

      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Birthplace</option>
        <option value="casablanca">Casablanca</option>
        <option value="paris">Paris</option>
        <option value="algiers">Algiers</option>
      </select>

      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Current Residence</option>
        <option value="rabat">Rabat</option>
        <option value="toulouse">Toulouse</option>
        <option value="istanbul">Istanbul</option>
      </select>

      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Ethnicity</option>
        <option value="north-african">North African</option>
        <option value="west-african">West African</option>
        <option value="middle-eastern">Middle Eastern</option>
      </select>

      <select className="w-full p-1 border border-gray-300 text-sm text-gray-700">
        <option value="">Languages</option>
        <option value="arabic">Arabic</option>
        <option value="french">French</option>
        <option value="english">English</option>
      </select>

      {/* 💚 Positive Reactions */}
      <div className="flex flex-wrap gap-1 border-t border-gray-200 pt-2">
        {["Crush", "Like", "Love", "Maybe"].map((reaction) => (
          <button
            key={reaction}
            className="text-xs px-2 py-1 bg-green-100 hover:bg-green-200 text-green-800 rounded"
          >
            {reaction}
          </button>
        ))}
      </div>

      {/* 💔 Negative Reactions */}
      <div className="flex flex-wrap gap-1 border-t border-gray-200 pt-2">
        {["Not My Type", "Missing Something", "Hide", "Block"].map(
          (reaction) => (
            <button
              key={reaction}
              className="text-xs px-2 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded"
            >
              {reaction}
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default SidebarProfileFields;
