export type Sponsor = {
  name: string;
  logo: string;
  category: string;
  description: string;
  url: string;
};

export const sponsors: Sponsor[] = [
  {
    name: "Pioneer DJ",
    logo: "/assets/PioneerDJ.jpeg",
    category: "Official Sponsor",
    description: "Supporting the sound, energy, and experience behind the Ivan Robles brand.",
    url: "https://www.pioneerdj.com/",
  },
];
