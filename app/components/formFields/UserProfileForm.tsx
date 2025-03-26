"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  userId: string;
};

export default function UserProfileForm({ userId }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [romanticStatus, setRomanticStatus] = useState("");
  const [commitmentExpectations, setCommitmentExpectations] = useState("");
  const [parentalStatus, setParentalStatus] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabase
        .from("user_basic_info")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) {
        console.error("Erreur lors du chargement :", error);
        return;
      }

      setFirstName(data.first_name || "");
      setLastName(data.last_name || "");
      setUsername(data.username || "");
      setRomanticStatus(data.romantic_status || "");
      setCommitmentExpectations(data.commitment_expectations || "");
      setParentalStatus(data.parental_status || "");
    }

    fetchUserData();
  }, [userId]);

  async function saveField(fieldName: string, value: string) {
    const { error } = await supabase
      .from("user_basic_info")
      .update({ [fieldName]: value })
      .eq("user_id", userId);

    if (error) {
      console.error(
        `Erreur lors de la sauvegarde du champ ${fieldName} :`,
        error
      );
    } else {
      console.log(`Champ ${fieldName} sauvegardé avec succès.`);
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <label>First Name</label>
        <input
          className="border p-2 ml-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() => saveField("first_name", firstName)}
        >
          Save
        </button>
      </div>

      <div>
        <label>Last Name</label>
        <input
          className="border p-2 ml-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() => saveField("last_name", lastName)}
        >
          Save
        </button>
      </div>

      <div>
        <label>Username</label>
        <input
          className="border p-2 ml-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() => saveField("username", username)}
        >
          Save
        </button>
      </div>

      <div>
        <label>Romantic Status</label>
        <input
          className="border p-2 ml-2"
          value={romanticStatus}
          onChange={(e) => setRomanticStatus(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() => saveField("romantic_status", romanticStatus)}
        >
          Save
        </button>
      </div>

      <div>
        <label>Commitment Expectations</label>
        <input
          className="border p-2 ml-2"
          value={commitmentExpectations}
          onChange={(e) => setCommitmentExpectations(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() =>
            saveField("commitment_expectations", commitmentExpectations)
          }
        >
          Save
        </button>
      </div>

      <div>
        <label>Parental Status</label>
        <input
          className="border p-2 ml-2"
          value={parentalStatus}
          onChange={(e) => setParentalStatus(e.target.value)}
        />
        <button
          className="ml-2 px-3 py-1 border rounded"
          onClick={() => saveField("parental_status", parentalStatus)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
