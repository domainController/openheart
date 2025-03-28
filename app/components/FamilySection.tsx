// app/components/FamilySection.tsx
"use client";

export default function FamilySection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      <h2 className="text-lg font-semibold">Family & Children</h2>

      <div>
        <label className="block text-sm font-medium mb-1">
          Do you have children?
        </label>
        <select className="w-full p-2 border rounded-md">
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Parental Status
        </label>
        <select className="w-full p-2 border rounded-md">
          <option value="">Select...</option>
          <option value="single_parent">
            Single-Parent Raising Children Alone
          </option>
          <option value="co_parenting">
            Shared Custody (Active Co-Parenting)
          </option>
          <option value="joint_restriction">
            Joint Custody (Geographic Restriction)
          </option>
          <option value="not_applicable">Not applicable</option>
        </select>
      </div>
    </div>
  );
}
