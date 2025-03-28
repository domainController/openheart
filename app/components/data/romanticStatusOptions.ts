import { formatDuration } from "@/utils/formatDateUtils";
export const romanticStatusOptions = [
  {
    id: 1,
    status: "Single",
    user_friendly_label: "Pas de relation récente.",
    internal_label: "No recent relationship."
  },
  {
    id: 2,
    status: "Single for X Months/Years",
    user_friendly_label: "Vous êtes célibataire depuis X mois/années.",
    internal_label: "User has been single for a defined period (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 3,
    status: "Never Married",
    user_friendly_label: "Représente une vision traditionnelle où les relations sont liées au mariage.",
    internal_label: "Represents a traditional view where relationships are tied to marriage."
  },
  {
    id: 4,
    status: "Last Relationship Ended X Months/Years Ago",
    user_friendly_label: "Votre dernière relation s'est terminée il y a X mois/années.",
    internal_label: "User's last relationship ended X months/years ago (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 5,
    status: "Separated from Long-Term Partner X Months/Years Ago",
    user_friendly_label: "Vous êtes séparé(e) de votre partenaire de longue date depuis X mois/années.",
    internal_label: "User separated from a long-term partner X months/years ago (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 6,
    status: "Divorced (Civil)",
    user_friendly_label: "Vous avez divorcé légalement.",
    internal_label: "Confirms legal divorce status."
  },
  {
    id: 7,
    status: "Divorced for X Months/Years (Civil)",
    user_friendly_label: "Vous êtes divorcé(e) depuis X mois/années.",
    internal_label: "User has been legally divorced for X months/years (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 8,
    status: "Divorced (Religious)",
    user_friendly_label: "Vous avez obtenu un divorce religieux.",
    internal_label: "Confirms religious divorce status."
  },
  {
    id: 9,
    status: "Divorced for X Months/Years (Religious)",
    user_friendly_label: "Vous êtes divorcé(e) religieusement depuis X mois/années.",
    internal_label: "User has been religiously divorced for X months/years (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 10,
    status: "Widowed",
    user_friendly_label: "Vous avez perdu votre conjoint(e).",
    internal_label: "Lost spouse through passing."
  },
  {
    id: 11,
    status: "Widowed for X Months/Years",
    user_friendly_label: "Votre conjoint(e) est décédé(e) il y a X mois/années.",
    internal_label: "User has been widowed for X months/years (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 12,
    status: "Married but Separated",
    user_friendly_label: "Vous êtes toujours marié(e), mais vous ne vivez plus ensemble.",
    internal_label: "User is married but currently separated."
  },
  {
    id: 13,
    status: "Married but Separated for X Months/Years",
    user_friendly_label: "Vous êtes séparé(e) de votre conjoint(e) depuis X mois/années, mais toujours marié(e) officiellement.",
    internal_label: "User has been married but separated for X months/years (proof required for monetization).",
    requires_duration: true
  },
  {
    id: 14,
    status: "Married but Separated (Religious)",
    user_friendly_label: "Votre mariage religieux est toujours valide, mais vous ne vivez plus ensemble.",
    internal_label: "User is religiously married but currently separated."
  },
  {
    id: 15,
    status: "Married but Separated for X Months/Years (Religious)",
    user_friendly_label: "Vous avez un mariage religieux, mais êtes séparé(e) depuis X mois/années.",
    internal_label: "User has been religiously married but separated for X months/years (proof required for monetization).",
    requires_duration: true
  }
];

// ✅ **Export du fichier**
export default romanticStatusOptions;