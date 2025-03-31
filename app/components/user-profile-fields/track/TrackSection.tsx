"use client";

import React from "react";

const TrackSection = () => {
  return (
    <section className="flex flex-col gap-2">
      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Immigration Status</option>
        <option value="citizen">Citizen</option>
        <option value="resident">Permanent Resident</option>
        <option value="visa">Work Visa</option>
      </select>

      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Occupation</option>
        <option value="employed">Employed</option>
        <option value="freelancer">Freelancer</option>
        <option value="stay_home">Stay-at-home</option>
      </select>

      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Graduation Status</option>
        <option value="graduated">Graduated</option>
        <option value="studying">Currently Studying</option>
        <option value="dropout">College Dropout</option>
      </select>

      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Degree Earned</option>
        <option value="bachelor">Bachelor’s</option>
        <option value="master">Master’s</option>
        <option value="phd">PhD</option>
      </select>

      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Education & Skill Development</option>
        <option value="bootcamp">Coding Bootcamp</option>
        <option value="online">Online Courses</option>
        <option value="school">Traditional School</option>
      </select>

      <select className="w-full p-2 border border-gray-300 rounded text-sm text-gray-700">
        <option value="">Career Aspirations</option>
        <option value="manager">Become a Manager</option>
        <option value="entrepreneur">Start a Business</option>
        <option value="expert">Specialize in Field</option>
      </select>
    </section>
  );
};

export default TrackSection;
