import type { OptionType } from "./types";
import type { StylesConfig } from "react-select";
export const customSelectStyles: StylesConfig<OptionType, false> = {
  container: (base) => ({
    ...base,
    width: "100%",
  }),
  control: (base) => ({
    ...base,
    backgroundColor: "#000",
    borderColor: "gray.600",
    boxShadow: "none",
    minHeight: "56px",
    "&:hover": { borderColor: "#00aaff" },
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "gray.400",
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    backgroundColor: "#1a1a1a",
  }),
  option: (base, { isFocused }) => ({
    ...base,
    backgroundColor: isFocused ? "#0026b9" : "transparent",
    color: "white",
    cursor: "pointer",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "gray.600",
    "&:hover": { color: "#00aaff" },
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "gray.600",
  }),
};

export const countryOptions = [
  { value: "us", label: "United States" },
  { value: "pr", label: "Puerto Rico" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "jp", label: "Japan" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "br", label: "Brazil" },
  { value: "za", label: "South Africa" },
  { value: "mx", label: "Mexico" },
  { value: "ru", label: "Russia" },
  { value: "kr", label: "South Korea" },
  { value: "nl", label: "Netherlands" },
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "fi", label: "Finland" },
  { value: "dk", label: "Denmark" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "sg", label: "Singapore" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "hk", label: "Hong Kong" },
  { value: "tw", label: "Taiwan" },
  { value: "ng", label: "Nigeria" },
  { value: "ke", label: "Kenya" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
  { value: "co", label: "Colombia" },
  { value: "ve", label: "Venezuela" },
  { value: "th", label: "Thailand" },
  { value: "my", label: "Malaysia" },
  { value: "ph", label: "Philippines" },
  { value: "vn", label: "Vietnam" },
  { value: "cz", label: "Czech Republic" },
  { value: "hu", label: "Hungary" },
  { value: "ro", label: "Romania" },
  { value: "bg", label: "Bulgaria" },
  { value: "sk", label: "Slovakia" },
  { value: "si", label: "Slovenia" },
  { value: "lt", label: "Lithuania" },
  { value: "lv", label: "Latvia" },
  { value: "ee", label: "Estonia" },
  { value: "is", label: "Iceland" },
  { value: "mt", label: "Malta" },
  { value: "cy", label: "Cyprus" },
  { value: "by", label: "Belarus" },
  { value: "ua", label: "Ukraine" },
  { value: "kz", label: "Kazakhstan" },
  { value: "uz", label: "Uzbekistan" },
  { value: "az", label: "Azerbaijan" },
  { value: "ge", label: "Georgia" },
  { value: "am", label: "Armenia" },
  { value: "md", label: "Moldova" },
  { value: "tj", label: "Tajikistan" },
  { value: "tm", label: "Turkmenistan" },
  { value: "kg", label: "Kyrgyzstan" },
  { value: "np", label: "Nepal" },
  { value: "bd", label: "Bangladesh" },
  { value: "lk", label: "Sri Lanka" },
  { value: "mm", label: "Myanmar" },
  { value: "la", label: "Laos" },
  { value: "kh", label: "Cambodia" },
  { value: "bt", label: "Bhutan" },
  { value: "mv", label: "Maldives" },
  { value: "mn", label: "Mongolia" },
  { value: "np", label: "Nepal" },
  { value: "af", label: "Afghanistan" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "sy", label: "Syria" },
  { value: "ye", label: "Yemen" },
  { value: "sd", label: "Sudan" },
  { value: "ly", label: "Libya" },
  { value: "dz", label: "Algeria" },
  { value: "ma", label: "Morocco" },
  { value: "tn", label: "Tunisia" },
  { value: "eg", label: "Egypt" },
  { value: "ci", label: "Ivory Coast" },
  { value: "gh", label: "Ghana" },
  { value: "tz", label: "Tanzania" },
  { value: "ug", label: "Uganda" },
  { value: "zm", label: "Zambia" },
  { value: "zw", label: "Zimbabwe" },
  { value: "sc", label: "Seychelles" },
  { value: "mu", label: "Mauritius" },
  { value: "bw", label: "Botswana" },
  { value: "na", label: "Namibia" },
  { value: "ls", label: "Lesotho" },
  { value: "sz", label: "Eswatini" },
  { value: "cv", label: "Cape Verde" },
  { value: "gm", label: "Gambia" },
  { value: "sl", label: "Sierra Leone" },
  { value: "lr", label: "Liberia" },
  { value: "ne", label: "Niger" },
  { value: "ml", label: "Mali" },
  { value: "sn", label: "Senegal" },
  { value: "gh", label: "Ghana" },
  { value: "ke", label: "Kenya" },
  { value: "dj", label: "Djibouti" },
  { value: "so", label: "Somalia" },
  { value: "et", label: "Ethiopia" },
  { value: "cm", label: "Cameroon" },
  { value: "ng", label: "Nigeria" },
  { value: "gh", label: "Ghana" },
  { value: "tg", label: "Togo" },
  { value: "bw", label: "Botswana" },
  { value: "na", label: "Namibia" },
  { value: "ls", label: "Lesotho" },
  { value: "sz", label: "Eswatini" },
  { value: "cv", label: "Cape Verde" },
  { value: "gq", label: "Equatorial Guinea" },
  { value: "st", label: "Sao Tome and Principe" },
  { value: "ao", label: "Angola" },
  { value: "mz", label: "Mozambique" },
  { value: "bi", label: "Burundi" },
  { value: "rw", label: "Rwanda" },
  { value: "tz", label: "Tanzania" },
  { value: "ug", label: "Uganda" },
  { value: "zm", label: "Zambia" },
  { value: "zw", label: "Zimbabwe" },
  { value: "other", label: "Other" }, // Fallback option
];

export const referralOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "tiktok", label: "TikTok" },
  { value: "youtube", label: "Youtube" },
  { value: "twitch", label: "Twitch" },
  { value: "mixcloud", label: "Mixcloud" },
  { value: "friend", label: "Friend" },
  { value: "radio", label: "Radio" },
  { value: "other", label: "Other" },
];
