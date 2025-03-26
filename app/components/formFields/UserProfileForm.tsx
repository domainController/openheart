"use client";

import { useState } from "react";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { UsernameInput } from "./UsernameInput";
import { CommitmentExpectationsSelect } from "./CommitmentExpectationsSelect";
import { HasChildrenToggle } from "./HasChildrenToggle";
import { ParentalStatusSelect } from "./ParentalStatusSelect";
import { RegionOfOriginSelect } from "./RegionOfOriginSelect";
import { OriginalCountrySelect } from "./OriginalCountrySelect";
import { createClient } from "@/utils/supabase/client";

interface UserProfileFormProps {
  userId: string;
}

export function UserProfileForm({ userId }: UserProfileFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [commitmentExpectations, setCommitmentExpectations] = useState("");
  const [hasChildren, setHasChildren] = useState(false);
  const [parentalStatus, setParentalStatus] = useState("");
  const [regionOfOrigin, setRegionOfOrigin] = useState("");
  const [originalCountry, setOriginalCountry] = useState("");

  return (
    <div className="space-y-8">
      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Identity</h2>
        <FirstNameInput
          value={firstName}
          onChange={setFirstName}
          userId={userId}
        />
        <LastNameInput
          value={lastName}
          onChange={setLastName}
          userId={userId}
        />
        <UsernameInput
          value={username}
          onChange={setUsername}
          userId={userId}
        />
      </div>

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Origin</h2>
        <OriginalCountrySelect
          value={originalCountry}
          onChange={setOriginalCountry}
          userId={userId}
        />
        <RegionOfOriginSelect
          value={regionOfOrigin}
          onChange={setRegionOfOrigin}
          userId={userId}
        />
      </div>

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Commitment</h2>
        <CommitmentExpectationsSelect
          value={commitmentExpectations}
          onChange={setCommitmentExpectations}
          userId={userId}
        />
      </div>

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Parental Status</h2>
        <HasChildrenToggle
          value={hasChildren}
          onChange={setHasChildren}
          userId={userId}
        />
        <ParentalStatusSelect
          value={parentalStatus}
          onChange={setParentalStatus}
          userId={userId}
          hasChildren={hasChildren}
        />
      </div>
    </div>
  );
}
