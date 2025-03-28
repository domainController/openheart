// app/components/RelationshipExpectationsSection.tsx
"use client";

export default function RelationshipExpectationsSection() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      <h2 className="text-lg font-semibold">Relationship Expectations</h2>

      <div>
        <label className="block text-sm font-medium mb-1">
          Type of Commitment
        </label>
        <select className="w-full p-2 border rounded-md">
          <option value="">Select...</option>
          <option value="marriage">Marriage-based Union</option>
          <option value="long_term">Long-Term Relationship</option>
          <option value="not_sure">Still Figuring Out</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Dealbreakers?</label>
        <textarea
          placeholder="Describe anything that would be a dealbreaker for you"
          className="w-full p-2 border rounded-md"
          rows={3}
        />
      </div>
    </div>
  );
}
