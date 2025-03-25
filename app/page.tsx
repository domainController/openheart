"use client";

import React, { useEffect, useState } from "react";
import algoliasearch from "algoliasearch/lite";

type Option = {
  value: string;
  label: string;
};

type AlgoliaHit = {
  objectID: string;
  user_friendly_label?: string;
  status?: string;
  name?: string;
};

const calculatePreciseAge = (birthDate: Date): number => {
  const now = new Date();
  const ageInMs = now.getTime() - birthDate.getTime();
  const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(ageInYears * 10) / 10;
};

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [calculatedAge, setCalculatedAge] = useState<number | null>(null);
  const [hasChildren, setHasChildren] = useState(false);

  const [romanticOptions, setRomanticOptions] = useState<Option[]>([]);
  const [commitmentOptions, setCommitmentOptions] = useState<Option[]>([]);
  const [parentalOptions, setParentalOptions] = useState<Option[]>([]);

  const [selectedLabels, setSelectedLabels] = useState({
    romantic_status: "",
    commitment_expectations: "",
    parental_status: "",
  });

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!
  );
  const romanticIndex = searchClient.initIndex("dev_romantic_status_options");
  const commitmentIndex = searchClient.initIndex(
    "dev_commitment_expectations_options"
  );
  const parentalStatusIndex = searchClient.initIndex(
    "dev_parental_status_options"
  );

  useEffect(() => {
    romanticIndex.search("").then(({ hits }) => {
      setRomanticOptions(
        hits.map((hit: AlgoliaHit) => ({
          value: hit.objectID,
          label: `${hit.name || hit.status || "Unknown"} — ${
            hit.user_friendly_label || ""
          }`,
        }))
      );
    });

    commitmentIndex.search("").then(({ hits }) => {
      setCommitmentOptions(
        hits.map((hit: AlgoliaHit) => ({
          value: hit.objectID,
          label: `${hit.name || hit.status || "Unknown"} — ${
            hit.user_friendly_label || ""
          }`,
        }))
      );
    });

    parentalStatusIndex.search("").then(({ hits }) => {
      setParentalOptions(
        hits.map((hit: AlgoliaHit) => ({
          value: hit.objectID,
          label: `${hit.status || "Unknown"} — ${
            hit.user_friendly_label || ""
          }`,
        }))
      );
    });
  }, [romanticIndex, commitmentIndex, parentalStatusIndex]);

  const handleSelect = (field: string, value: string) => {
    setSelectedLabels((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    const payload = {
      first_name: firstName,
      last_name: lastName,
      username,
      birth_date: birthDate,
      calculated_age: calculatedAge,
      has_children: hasChildren,
      ...selectedLabels,
    };

    try {
      const response = await fetch("/api/save_profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 🔥 Obligatoire
        },
        body: JSON.stringify(payload), // 🔥 On stringify l'objet JS
      });

      const result = await response.json();
      console.log("✅ Sauvegarde réussie :", result);
    } catch (error) {
      console.error("❌ Erreur lors de la sauvegarde :", error);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border px-2 py-1 w-full"
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border px-2 py-1 w-full"
      />
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border px-2 py-1 w-full"
      />
      <input
        type="date"
        value={birthDate}
        onChange={(e) => {
          const date = e.target.value;
          setBirthDate(date);
          setCalculatedAge(calculatePreciseAge(new Date(date)));
        }}
        className="border px-2 py-1 w-full"
      />
      {calculatedAge && <div>Age: {calculatedAge}</div>}

      <div>
        <label className="block font-medium mb-1">Has Children?</label>
        <input
          type="checkbox"
          checked={hasChildren}
          onChange={() => setHasChildren(!hasChildren)}
        />
      </div>

      <select
        value={selectedLabels.romantic_status}
        onChange={(e) => handleSelect("romantic_status", e.target.value)}
        className="border px-2 py-1 w-full"
      >
        <option value="">Select Romantic Status</option>
        {romanticOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <select
        value={selectedLabels.commitment_expectations}
        onChange={(e) =>
          handleSelect("commitment_expectations", e.target.value)
        }
        className="border px-2 py-1 w-full"
      >
        <option value="">Select Commitment Expectations</option>
        {commitmentOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {hasChildren && (
        <select
          value={selectedLabels.parental_status}
          onChange={(e) => handleSelect("parental_status", e.target.value)}
          className="border px-2 py-1 w-full"
        >
          <option value="">Select Parental Status</option>
          {parentalOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}
