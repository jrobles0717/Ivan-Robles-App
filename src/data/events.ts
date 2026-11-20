export type EventItem = {
  date: string;
  location: string;
  description: string;
  time: string;
  status?: string;
  ticketUrl?: string;
  mapUrl?: string;
  /** Free event: shows "Free Entry" instead of a ticket button. */
  freeEntry?: boolean;
  /** ISO date-time after which the event is hidden automatically. */
  expiresAt?: string;
};

/** True while the event hasn't passed (or has no expiry set). */
export const isEventActive = (event: { expiresAt?: string }) =>
  !event.expiresAt || Date.now() < new Date(event.expiresAt).getTime();

export const upcomingEvents: EventItem[] = [
  {
    date: "Wednesday, November 25, 2026",
    location: "Caribe Hilton",
    description:
      "Dancegiving — Thanksgiving Eve with Pablo Flores and Iván Robles. The first party of the holiday season.",
    time: "8:00 PM",
    status: "Free Entry",
    freeEntry: true,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Caribe+Hilton+San+Juan+Puerto+Rico",
    expiresAt: "2026-11-26T12:00:00-04:00",
  },
];

export type FeaturedEvent = {
  title: string;
  edition: string;
  date: string;
  location: string;
  /** Optional flyer image; without it the video takes the left column. */
  flyer?: string;
  video: string;
  videoPoster: string;
  ticketUrl?: string;
  mapUrl: string;
  freeEntry?: boolean;
  lineup?: string[];
  tagline: string;
  blurb: string;
  expiresAt?: string;
};

export const featuredEvent: FeaturedEvent = {
  title: "Dancegiving 2026",
  edition: "Thanksgiving Eve",
  date: "Wednesday, November 25, 2026",
  location: "Caribe Hilton",
  video: "/assets/Dancegiving-2026.mp4",
  videoPoster: "/assets/Dancegiving-2026-poster.webp",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Caribe+Hilton+San+Juan+Puerto+Rico",
  freeEntry: true,
  lineup: ["Pablo Flores", "Iván Robles"],
  tagline: "The first party of the holiday season",
  blurb:
    "A night to remember at the Caribe Hilton. United for Lavinya — free entry for everyone.",
  expiresAt: "2026-11-26T12:00:00-04:00",
};
