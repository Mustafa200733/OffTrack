export const DUMMY_TRIPS = [
  {
    id: "barcelona-2026",
    title: "Barcelona city break",
    location: "Barcelona, Spain",
    date: "Mar 2026",
    excerpt: "Gaudí, tapas, strandwandelingen en een late night in El Born.",
    cover: require("../images/Barcelona.png"),
    story:
      "We begonnen bij Sagrada Família en liepen daarna richting de gotische wijk. Elke dag eindigde met tapas en een korte wandeling langs het strand.",
  },
  {
    id: "newyork-2025",
    title: "New York highlights",
    location: "New York, USA",
    date: "Dec 2025",
    excerpt: "Central Park, skyline views en veel te veel coffee stops.",
    cover: require("../images/Newyork.png"),
    story:
      "Van Brooklyn Bridge tot Top of the Rock: we probeerden elke dag één buurt te doen en veel te voet te ontdekken. De avonden waren voor food en street vibes.",
  },
  {
    id: "tokyo-2024",
    title: "Tokyo adventure",
    location: "Tokyo, Japan",
    date: "Aug 2024",
    excerpt: "Shibuya, ramen, arcades en rustige tempels in de ochtend.",
    cover: require("../images/Tokyo.png"),
    story:
      "We combineerden drukke plekken zoals Shibuya en Akihabara met rustige momenten bij Meiji Jingu. Beste tip: vroeg ontbijten en daarna pas de metro in.",
  },
];

export function getTripById(id) {
  return DUMMY_TRIPS.find((trip) => trip.id === id);
}

