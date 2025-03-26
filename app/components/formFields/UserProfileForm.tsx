"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  userId: string;
};

export default function UserProfileForm({ userId }: Props) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    romantic_status: "",
    commitment_expectations: "",
    parental_status: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("user_profile")
        .select(
          "first_name, last_name, username, romantic_status, commitment_expectations, parental_status"
        )
        .eq("user_id", userId)
        .single();

      if (!error && data) {
        setFormData((prev) => ({ ...prev, ...data }));
      }
    };

    fetchData();
  }, [userId]);

  const saveField = async (field: keyof typeof formData) => {
    await supabase
      .from("user_profile")
      .update({ [field]: formData[field] })
      .eq("user_id", userId);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {Object.entries({
          first_name: "First Name",
          last_name: "Last Name",
          username: "Username",
          romantic_status: "Romantic Status",
          commitment_expectations: "Commitment Expectations",
          parental_status: "Parental Status",
        }).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <label className="w-56 font-semibold">{label}</label>
            <input
              className="border p-2 rounded w-full"
              value={formData[key as keyof typeof formData] || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [key]: e.target.value,
                }))
              }
            />
            <button
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
              onClick={() => saveField(key as keyof typeof formData)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
