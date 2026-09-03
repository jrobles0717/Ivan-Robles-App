export type EventItem = {
  date: string;
  location: string;
  description: string;
  time: string;
  status?: string;
  ticketUrl?: string;
  mapUrl?: string;
};

export const upcomingEvents: EventItem[] = [];

export type FeaturedEvent = {
  title: string;
  edition: string;
  date: string;
  location: string;
  flyer: string;
  video: string;
  videoPoster: string;
  ticketUrl: string;
  mapUrl: string;
};

export const featuredEvent: FeaturedEvent = {
  title: "Fiesta en la Playa 2026",
  edition: "Closing Summer",
  date: "Domingo 23 Agosto 2026",
  location: "Caribe Hilton Beach",
  flyer: "/assets/Fiesta-en-la-playa-2026-closing-summer.webp",
  video: "/assets/Fiesta-en-la-playa-2026-closing-summer.mp4",
  videoPoster: "/assets/Fiesta-en-la-playa-2026-closing-summer-video-thumb.jpeg",
  ticketUrl:
    "https://tcpr.com/es-PR/shows/fiesta%20en%20la%20playa%20closing%20summer/events",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Caribe+Hilton+San+Juan+Puerto+Rico",
};
