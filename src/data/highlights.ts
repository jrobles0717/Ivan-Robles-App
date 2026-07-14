export type VideoItem = {
  src: string;
  title: string;
  thumbnail: string;
};

export const partyHighlights: VideoItem[] = [
  {
    src: "/assets/Fiesta-en-la-playa-2026.mp4",
    title: "Fiesta en la Playa 2026",
    thumbnail: "/assets/Fiesta-en-la-playa-2026-thumbnail.jpeg",
  },
  {
    src: "/assets/April-18-2026-party-video.mp4",
    title: "The Return 2026",
    thumbnail: "/assets/April-18-2026-party.webp",
  },
  {
    src: "/assets/Love-beats-trailer-2026.mp4",
    title: "Love Beats 2026",
    thumbnail: "/assets/Love-beats-trailer-2026-thumbnail.webp",
  },
];

export type PastEventItem = {
  src: string;
  title: string;
  date: string;
  thumbnail: string;
};

export const pastEvents: PastEventItem[] = [
  {
    src: "/assets/Recap-2025.mp4",
    title: "Recap 2025",
    date: "December 2025",
    thumbnail: "/assets/Recap-2025-thumbnail.webp",
  },
  {
    src: "/assets/Fiesta-en-la-playa-II-2025.mp4",
    title: "Fiesta En La Playa II",
    date: "Summer 2025",
    thumbnail: "/assets/irob-playa-2-thumbnail.webp",
  },
  {
    src: "/assets/irob-caribe-hilton-video.mp4",
    title: "Fiesta En La Playa I",
    date: "2025",
    thumbnail: "/assets/irob-playa-1-thumbnail.webp",
  },
  {
    src: "/assets/irob-home-video.mp4",
    title: "La Vida Es Bonita",
    date: "2025",
    thumbnail: "/assets/La-Vida-Es-Bonita-thumbnail.webp",
  },
  {
    src: "/assets/irob-moonlight-video.mp4",
    title: "Moonlight Mirage",
    date: "2025",
    thumbnail: "/assets/Moonlight-Mirage-thumbnail.webp",
  },
];
