// Petits textes de l'interface (boutons, menus). Les contenus sont dans src/data/.
export const languages = { fr: "Français", en: "English" } as const;
export type Lang = keyof typeof languages;

export const routes = {
  home: { fr: "/", en: "/en/" },
  garden: { fr: "/jardin/", en: "/en/garden/" },
  history: { fr: "/histoire/", en: "/en/history/" },
  moments: { fr: "/en-images/", en: "/en/in-pictures/" },
  map: { fr: "/carte/", en: "/en/map/" },
  hosts: { fr: "/vos-hotes/", en: "/en/your-hosts/" },
} as const;
export type RouteKey = keyof typeof routes;

export const ui = {
  fr: {
    navHouse: "La maison", navAround: "Autour", navReviews: "Avis", navGarden: "Le jardin", navHistory: "Histoire", navMoments: "En images", navMap: "Carte", navHosts: "Vos hôtes", mapPageLink: "Voir toutes nos adresses sur la carte →", navFaq: "FAQ",
    book: "Réserver", bookStay: "Réserver votre séjour", back: "← Retour à la maison",
    facts: { reviews: "avis Airbnb", guests: "voyageurs", rooms: "chambres climatisées", baths: "salles de bain", area: "habitables", porches: "de galeries couvertes" },
    captionGallery: "La galerie", photoSoon: "Photo à venir",
    gardenLink: "Découvrir les fruits du jardin →", historyLink: "Lire l'histoire du domaine →",
    mapLink: "Voir sur la carte ↗", mapTitle: "Carte interactive", mapText: "Plages, restaurants, marchés, randonnées : toutes nos adresses sur une seule carte.", mapButton: "Voir L'Enclos sur Google Maps",
    reviewsOn: "sur", reviewsAlso: (b: string, t: string, n: number) => `Également noté ${b}/10 sur Booking et ${t}/10 sur Trip.com (${n} avis).`, tripcomAlso: (t: string, n: number) => `Également noté ${t}/10 sur Trip.com (${n} avis).`, readReviews: "Lire les avis ↗", reviewCount: (n: number) => `${n} avis`, translated: "",
    badge: "Meilleur prix garanti en direct", from: "À partir de", night: "/ nuit",
    checkin: "Arrivée", checkout: "Départ", dates: "Dates du séjour", chooseIn: "Choisissez votre date d'arrivée", chooseOut: "Choisissez votre date de départ", nights: (n: number) => `${n} nuit${n > 1 ? "s" : ""}`, minNights: (n: number) => `${n} nuits minimum`, clear: "Effacer", done: "Valider", prevMonth: "Mois précédent", nextMonth: "Mois suivant", pickDates: "Choisir les dates", guests: "Voyageurs", check: "Voir les disponibilités",
    bookNote: "Calendrier en temps réel, synchronisé avec Airbnb et Booking.",
    hosts: "Vos hôtes : Gaël et Danie · français, anglais, português · réponse en moins d'une heure",
    registration: "Meublé de tourisme · n° d'enregistrement",
    langLabel: "Langue", menu: "Menu",
  },
  en: {
    navHouse: "The house", navAround: "Around", navReviews: "Reviews", navGarden: "The garden", navHistory: "History", navMoments: "In pictures", navMap: "Map", navHosts: "Your hosts", mapPageLink: "See all our places on the map →", navFaq: "FAQ",
    book: "Book", bookStay: "Book your stay", back: "← Back to the house",
    facts: { reviews: "Airbnb reviews", guests: "guests", rooms: "air-conditioned bedrooms", baths: "bathrooms", area: "living space", porches: "covered verandas" },
    captionGallery: "The veranda", photoSoon: "Photo coming soon",
    gardenLink: "Discover the garden fruit →", historyLink: "Read the estate's story →",
    mapLink: "Map ↗", mapTitle: "Interactive map", mapText: "Beaches, restaurants, markets, hikes: all our places on one map.", mapButton: "See L'Enclos on Google Maps",
    reviewsOn: "from", reviewsAlso: (b: string, t: string, n: number) => `Also rated ${b.replace(",", ".")}/10 on Booking and ${t.replace(",", ".")}/10 on Trip.com (${n} reviews).`, tripcomAlso: (t: string, n: number) => `Also rated ${t.replace(",", ".")}/10 on Trip.com (${n} reviews).`, readReviews: "Read the reviews ↗", reviewCount: (n: number) => `${n} reviews`, translated: "Translated from French",
    badge: "Best price guaranteed when booking direct", from: "From", night: "/ night",
    checkin: "Check-in", checkout: "Check-out", dates: "Your dates", chooseIn: "Choose your check-in date", chooseOut: "Choose your check-out date", nights: (n: number) => `${n} night${n > 1 ? "s" : ""}`, minNights: (n: number) => `${n}-night minimum`, clear: "Clear", done: "Done", prevMonth: "Previous month", nextMonth: "Next month", pickDates: "Choose dates", guests: "Guests", check: "Check availability",
    bookNote: "Live calendar, synced with Airbnb and Booking.",
    hosts: "Your hosts: Gaël and Danie · French, English, Portuguese · reply within an hour",
    registration: "Furnished tourist rental · registration no.",
    langLabel: "Language", menu: "Menu",
  },
} as const;
