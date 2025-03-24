"use client";

export default function ProposalDataEntry() {
  return <div>Proposal Data Entry Component</div>;
}

<RomanticStatusSelect onChange={(data) => setFormData({ ...formData, romantic_status: data })} />