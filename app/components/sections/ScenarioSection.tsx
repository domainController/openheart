"use client";

import React from "react";
import CommitmentExpectationsSelect from "@/app/components/user-profile-fields/scenario/CommitmentExpectationsSelect";
import PartnerRoleSelect from "@/app/components/user-profile-fields/scenario/PartnerRoleSelect";
import DealbreakersInput from "@/app/components/user-profile-fields/scenario/DealbreakersInput";
import CareerDreamsInput from "@/app/components/user-profile-fields/scenario/CareerDreamsInput";

const ScenarioSection = () => {
  return (
    <section className="w-full bg-neutral-50 rounded-xl border border-neutral-200 p-4 flex flex-col gap-4">
      <CommitmentExpectationsSelect />
      <PartnerRoleSelect />
      <DealbreakersInput />
      <CareerDreamsInput />
    </section>
  );
};

export default ScenarioSection;
