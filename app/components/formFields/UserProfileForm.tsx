"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase/client";

interface fileFormProps {
  userId: string;
}

export function fileForm({ userId }: fileFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [commitmentExpectations, setCommitmentExpectations] = useState("");
  const [romanticStatus, setRomanticStatus] = useState("");
  const [hasChildren, setHasChildren] = useState(false);
  const [parentalStatus, setParentalStatus] = useState("");
  const [regionOfOrigin, setRegionOfOrigin] = useState("");
  const [originalCountry, setOriginalCountry] = useState("");
  const [familyRoleVision, setFamilyRoleVision] = useState<string[]>([]);
  const [childrenEducationVision, setChildrenEducationVision] = useState<
    string[]
  >([]);
  const [desiredPrimaryIncomeEarner, setDesiredPrimaryIncomeEarner] = useState<
    string[]
  >([]);

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
        <h2 className="text-lg font-semibold mb-2">
          Relationship & Family Status
        </h2>
        <RomanticStatusOptionsSelectFull
          value={romanticStatus}
          onChange={setRomanticStatus}
        />
        <CommitmentExpectationsSelect
          value={commitmentExpectations}
          onChange={setCommitmentExpectations}
        />
        <HasChildrenToggle value={hasChildren} onChange={setHasChildren} />
        {hasChildren && (
          <ParentalStatusSelect
            value={parentalStatus}
            onChange={setParentalStatus}
          />
        )}
      </div>

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Origin</h2>
        <RegionOfOriginSelect
          value={regionOfOrigin}
          onChange={setRegionOfOrigin}
        />
        <OriginalCountrySelect
          value={originalCountry}
          onChange={setOriginalCountry}
        />
      </div>

      <div className="p-4 border rounded shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Partner Expectations</h2>
        <FamilyRoleVisionSelect
          value={familyRoleVision}
          onChange={setFamilyRoleVision}
          userId={userId}
        />
        <ChildrenEducationVisionSelect
          value={childrenEducationVision}
          onChange={setChildrenEducationVision}
          userId={userId}
        />
        <DesiredPrimaryIncomeEarnerSelect
          value={desiredPrimaryIncomeEarner}
          onChange={setDesiredPrimaryIncomeEarner}
          userId={userId}
        />
      </div>
    </div>
  );
}
