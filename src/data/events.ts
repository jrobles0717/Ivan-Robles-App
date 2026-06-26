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
    date: "April 18, 2026",
    location: "Fifty Eight @ La Concha Renaissance by Marriott San Juan Resort",
    description: "Tickets available at Ticket Center",
    time: "Doors Open @ 8 PM",
    status: "Tickets Available",
    ticketUrl: "https://tcpr.com/es-PR/shows/the%20return%20ivan%20robles/events",
    mapUrl: "https://maps.app.goo.gl/3MsLPnfPww6Mv6a59",
  },
];
