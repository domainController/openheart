"use client";

import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
);

const romanticIndex = algoliaClient.initIndex("dev_romantic_status_options");
const commitmentIndex = algoliaClient.initIndex("dev_commitment_expectations_options");
const parentalStatusIndex = algoliaClient.initIndex("dev_parental_status_options");

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function UserProfileForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    birth_year: "",
    romantic_status: "",
    commitment_expectations: "",
    parental_status: "",
  });

  const [romanticOptions, setRomanticOptions] = useState<any[]>([]);
  const [commitmentOptions, setCommitmentOptions] = useState<any[]>([]);
  const [parentalOptions, setParentalOptions] = useState<any[]>([]);
  const [selectedLabels, setSelectedLabels] = useState({
    romantic_status: "",
    commitment_expectations: "",
    parental_status: "",
  });

  useEffect(() => {
    romanticIndex.search("").then(({ hits }) => setRomanticOptions(hits));
    commitmentIndex.search("").then(({ hits }) => setCommitmentOptions(hits));
    parentalStatusIndex.search("").then(({ hits }) => setParentalOptions(hits));
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const source =
      field === "romantic_status"
        ? romanticOptions
        : field === "commitment_expectations"
        ? commitmentOptions
        : parentalOptions;

    const label = source.find((opt) => opt.status === value || opt.name === value)?.user_friendly_label || "";
    setSelectedLabels((prev) => ({ ...prev, [field]: label }));
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from("user_basic_info").insert([formData]);
    if (error) {
      alert("Error saving profile.");
      console.error(error);
    } else {
      alert("Profile saved successfully.");
    }
  };

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <Input
        placeholder="First Name"
        value={formData.first_name}
        onChange={(e) => handleChange("first_name", e.target.value)}
      />
      <Input
        placeholder="Last Name"
        value={formData.last_name}
        onChange={(e) => handleChange("last_name", e.target.value)}
      />
      <Input
        placeholder="Username"
        value={formData.username}
        onChange={(e) => handleChange("username", e.target.value)}
      />
      <Input
        placeholder="Birth Year (e.g. 1980)"
        value={formData.birth_year}
        onChange={(e) => handleChange("birth_year", e.target.value)}
      />

      <div>
        <label>Romantic Status</label>
        <select
          className="w-full border p-2 rounded"
          value={formData.romantic_status}
          onChange={(e) => handleChange("romantic_status", e.target.value)}
        >
          <option value="">Select Romantic Status</option>
          {romanticOptions.map((opt) => (
            <option key={opt.objectID} value={opt.status}>
              {opt.status}
            </option>
          ))}
        </select>
        {selectedLabels.romantic_status && (
          <p className="text-sm text-gray-500 mt-1">{selectedLabels.romantic_status}</p>
        )}
      </div>

      <div>
        <label>Commitment Expectations</label>
        <select
          className="w-full border p-2 rounded"
          value={formData.commitment_expectations}
          onChange={(e) => handleChange("commitment_expectations", e.target.value)}
        >
          <option value="">Select Commitment Expectation</option>
          {commitmentOptions.map((opt) => (
            <option key={opt.objectID} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
        {selectedLabels.commitment_expectations && (
          <p className="text-sm text-gray-500 mt-1">{selectedLabels.commitment_expectations}</p>
        )}
      </div>

      <div>
        <label>Parental Status</label>
        <select
          className="w-full border p-2 rounded"
          value={formData.parental_status}
          onChange={(e) => handleChange("parental_status", e.target.value)}
        >
          <option value="">Select Parental Status</option>
          {parentalOptions.map((opt) => (
            <option key={opt.objectID} value={opt.status}>
              {opt.status}
            </option>
          ))}
        </select>
        {selectedLabels.parental_status && (
          <p className="text-sm text-gray-500 mt-1">{selectedLabels.parental_status}</p>
        )}
      </div>

      <Button onClick={handleSubmit}>Save Profile</Button>
    </div>
  );
}