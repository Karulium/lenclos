// Petits textes de l'interface (boutons, menus). Les contenus sont dans src/data/.
export const languages = { fr: "Français", en: "English" } as const;
export type Lang = keyof typeof languages;

export const routes = {
  home: { fr: "/", en: "/en/" },
  garden: { fr: "/jardin/", en: "/en/garden/" },
  history: { fr: "/histoire/", en: "/en/history/" },
  moments: { fr: "/en-images/", en: "/en/in-pictures/" },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  fr: {
    navHouse: "La maison", navAround: "Autour", navReviews: "Avis", navGarden: "Le jardin", navHistory: "Histoire", navMoments: "En images", navFaq: "FAQ",
    book: "Réserver", bookStay: "Réserver votre séjour", back: "← Retour à la maison",
    facts: { reviews: "avis Airbnb", guests: "voyageurs", rooms: "chambres climatisées", baths: "salles de bain" },
    captionGallery: "La galerie", photoSoon: "Photo à venir",
    gardenLink: "Découvrir les fruits du jardin →", historyLink: "Lire l'histoire du domaine →",
    mapLink: "Voir sur la carte ↗", mapTitle: "Carte interactive", mapText: "Toutes nos adresses sur une carte Google, bientôt ici.", mapButton: "Voir L'Enclos sur Google Maps",
    reviewsOn: "sur", reviewsAlso: (b: string, t: string, n: number) => `Également noté ${b}/10 sur Booking et ${t}/10 sur Trip.com (${n} avis).`,
    badge: "Meilleur prix garanti en direct", from: "À partir de", night: "/ nuit",
    checkin: "Arrivée", checkout: "Départ", dates: "Dates du séjour", chooseIn: "Choisissez votre date d'arrivée", chooseOut: "Choisissez votre date de départ", nights: (n: number) => `${n} nuit${n > 1 ? "s" : ""}`, minNights: (n: number) => `${n} nuits minimum`, clear: "Effacer", done: "Valider", prevMonth: "Mois précédent", nextMonth: "Mois suivant", pickDates: "Choisir les dates", guests: "Voyageurs", check: "Voir les disponibilités",
    bookNote: "Calendrier en temps réel, synchronisé avec Airbnb et Booking.",
    hosts: "Vos hôtes : Gaël et Danie · français, anglais, português · réponse en moins d'une heure",
    registration: "Meublé de tourisme · n° d'enregistrement", offeredBy: "Une maison proposée par",
    langLabel: "Langue", menu: "Menu",
  },
  en: {
    navHouse: "The house", navAround: "Around", navReviews: "Reviews", navGarden: "The garden", navHistory: "History", navMoments: "In pictures", navFaq: "FAQ",
    book: "Book", bookStay: "Book your stay", back: "← Back to the house",
    facts: { reviews: "Airbnb reviews", guests: "guests", rooms: "air-conditioned bedrooms", baths: "bathrooms" },
    captionGallery: "The veranda", photoSoon: "Photo coming soon",
    gardenLink: "Discover the garden fruit →", historyLink: "Read the estate's story →",
    mapLink: "Map ↗", mapTitle: "Interactive map", mapText: "All our places on a Google map, coming soon.", mapButton: "See L'Enclos on Google Maps",
    reviewsOn: "from", reviewsAlso: (b: string, t: string, n: number) => `Also rated ${b.replace(",", ".")}/10 on Booking and ${t.replace(",", ".")}/10 on Trip.com (${n} reviews).`,
    badge: "Best price guaranteed when booking direct", from: "From", night: "/ night",
    checkin: "Check-in", checkout: "Check-out", dates: "Your dates", chooseIn: "Choose your check-in date", chooseOut: "Choose your check-out date", nights: (n: number) => `${n} night${n > 1 ? "s" : ""}`, minNights: (n: number) => `${n}-night minimum`, clear: "Clear", done: "Done", prevMonth: "Previous month", nextMonth: "Next month", pickDates: "Choose dates", guests: "Guests", check: "Check availability",
    bookNote: "Live calendar, synced with Airbnb and Booking.",
    hosts: "Your hosts: Gaël and Danie · French, English, Portuguese · reply within an hour",
    registration: "Furnished tourist rental · registration no.", offeredBy: "A house offered by",
    langLabel: "Language", menu: "Menu",
  },
} as const;
