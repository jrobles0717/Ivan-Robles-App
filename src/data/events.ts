export type EventItem = {
  date: string;
  location: string;
  description: string;
  time: string;
  status?: string;
  ticketUrl?: string;
  mapUrl?: string;
};

export const upcomingEvents: EventItem[] = [
  {
    date: "August 23, 2026",
    location: "Caribe Hilton Beach",
    description: "Fiesta en la Playa 2026 — Closing Summer. Tickets available at Ticket Center",
    time: "Sunday, Domingo 23 Agosto",
    status: "Tickets Available",
    ticketUrl: "https://www.tcpr.com/",
    mapUrl: "https://maps.app.goo.gl/uJ4jrBhMLGhRK2SbA",
  },
];

export type FeaturedEvent = {
  title: string;
  edition: string;
  date: string;
  location: string;
  flyer: string;
  video: string;
  videoPoster: string;
  ticketUrl: string;
};

export const featuredEvent: FeaturedEvent = {
  title: "Fiesta en la Playa 2026",
  edition: "Closing Summer",
  date: "Domingo 23 Agosto 2026",
  location: "Caribe Hilton Beach",
  flyer: "/assets/Fiesta-en-la-playa-2026-closing-summer.jpeg",
  video: "/assets/Fiesta-en-la-playa-2026-closing-summer.mp4",
  videoPoster: "/assets/Fiesta-en-la-playa-2026-closing-summer-video-thumb.jpeg",
  ticketUrl: "https://www.tcpr.com/",
};
