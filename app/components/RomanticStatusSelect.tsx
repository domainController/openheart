import React, { useState } from "react";

const romanticStatusOptions = [
  {
    id: 6,
    status: "Divorced (Civil)",
    user_friendly_label: "Vous avez divorcé légalement.",
    requires_duration: false,
  },
  {
    id: 7,
    status: "Divorced for X Months/Years (Civil)",
    user_friendly_label: "Vous êtes divorcé(e) depuis X mois/années.",
    requires_duration: true,
  },
  {
    id: 8,
    status: "Divorced (Religious)",
    user_friendly_label: "Vous avez obtenu un divorce religieux.",
    requires_duration: false,
  },
  {
    id: 9,
    status: "Divorced for X Months/Years (Religious)",
    user_friendly_label:
      "Vous êtes divorcé(e) religieusement depuis X mois/années.",
    requires_duration: true,
  },
  {
    id: 10,
    status: "Widowed",
    user_friendly_label: "Vous avez perdu votre conjoint(e).",
    requires_duration: false,
  },
  {
    id: 11,
    status: "Widowed for X Months/Years",
    user_friendly_label:
      "Votre conjoint(e) est décédé(e) il y a X mois/années.",
    requires_duration: true,
  },
  {
    id: 12,
    status: "Married but Separated",
    user_friendly_label:
      "Vous êtes toujours marié(e), mais vous ne vivez plus ensemble.",
    requires_duration: false,
  },
  {
    id: 13,
    status: "Married but Separated for X Months/Years",
    user_friendly_label:
      "Vous êtes séparé(e) de votre conjoint(e) depuis X mois/années, mais toujours marié(e) officiellement.",
    requires_duration: true,
  },
  {
    id: 14,
    status: "Married but Separated (Religious)",
    user_friendly_label:
      "Votre mariage religieux est toujours valide, mais vous ne vivez plus ensemble.",
    requires_duration: false,
  },
  {
    id: 15,
    status: "Married but Separated for X Months/Years (Religious)",
    user_friendly_label:
      "Vous avez un mariage religieux, mais êtes séparé(e) depuis X mois/années.",
    requires_duration: true,
  },
];

const RomanticStatusSelect = ({ onChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [duration, setDuration] = useState("");

  const handleStatusChange = (e) => {
    const status = e.target.value;
    setSelectedStatus(status);
    setDuration(""); // Reset duration when status changes

    const requiresDuration = romanticStatusOptions.find(
      (option) => option.status === status
    )?.requires_duration;
    onChange({ status, duration: requiresDuration ? duration : null });
  };

  const handleDurationChange = (e) => {
    const newDuration = e.target.value;
    setDuration(newDuration);
    onChange({ status: selectedStatus, duration: newDuration });
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700"></label>
      <select
        value={selectedStatus}
        onChange={handleStatusChange}
        className="border p-2 w-full rounded"
      >
        <option value="">Romantic Status</option>
        {romanticStatusOptions.map((option) => (
          <option key={option.id} value={option.status}>
            {option.user_friendly_label}
          </option>
        ))}
      </select>

      {selectedStatus &&
        romanticStatusOptions.find((option) => option.status === selectedStatus)
          ?.requires_duration && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Depuis combien de temps ?
            </label>
            <input
              type="text"
              value={duration}
              onChange={handleDurationChange}
              placeholder="Ex: 2 ans, 6 mois"
              className="border p-2 w-full rounded"
            />
          </div>
        )}
    </div>
  );
};

export default RomanticStatusSelect;
