"use client";

import React from "react";
import CommitmentExpectationsSelect from "@/app/components/user-profile-fields/scenario/CommitmentExpectationsSelect";
import DealbreakersInput from "@/app/components/user-profile-fields/scenario/DealbreakersInput";
import PreferredCountriesSelect from "@/app/components/user-profile-fields/scenario/PreferredCountriesSelect";
import RelocationWillingnessSelect from "@/app/components/user-profile-fields/scenario/RelocationWillingnessSelect";
import DesiredPrimaryIncomeEarnerSelect from "@/app/components/user-profile-fields/scenario/DesiredPrimaryIncomeEarnerSelect";
import FamilyRoleVisionSelect from "@/app/components/user-profile-fields/scenario/FamilyRoleVisionSelect";
import RelocationFrequencySelect from "@/app/components/user-profile-fields/scenario/RelocationFrequencySelect";
import CoupleRelationshipValuesSelect from "@/app/components/user-profile-fields/scenario/CoupleRelationshipValuesSelect";

const ScenarioSection = () => {
  return (
    <section className="flex flex-col gap-1 w-full">
      <div className="flex flex-col gap-1 p-2 bg-gray-50">
        <CommitmentExpectationsSelect />
        <DesiredPrimaryIncomeEarnerSelect />
        <FamilyRoleVisionSelect />
        <RelocationWillingnessSelect />
        <RelocationFrequencySelect />
        <DealbreakersInput />
        <PreferredCountriesSelect />
        <CoupleRelationshipValuesSelect />
      </div>
    </section>
  );
};

export default ScenarioSection;
