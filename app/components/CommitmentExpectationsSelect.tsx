"use client";

import React from "react";

const CommitmentExpectationsSelect = () => {
  return (
    <select
      name="commitment_expectations"
      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
      defaultValue=""
    >
      <option value="" disabled>
        Select your expectations
      </option>
      <option value="marriage_soon">Marriage in the near future</option>
      <option value="open_to_marriage">Open to marriage</option>
      <option value="long_term_without_marriage">Long-term, no marriage</option>
      <option value="short_term">Short-term connection</option>
      <option value="undecided">Still thinking about it</option>
      <option value="no_commitment">No commitment expected</option>
    </select>
  );
};

export default CommitmentExpectationsSelect;
