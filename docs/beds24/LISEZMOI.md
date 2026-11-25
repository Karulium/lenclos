# Page de réservation Beds24 aux couleurs du site

Le bouton « Voir les disponibilités » du site mène à la page **/reserver/** (en anglais **/en/book/**) :
récapitulatif du séjour, avis, hôtes joignables, et le moteur Beds24 affiché dans la page.

Pour que la partie Beds24 ressemble au site, quatre réglages sont faits dans Beds24
(Moteur de réservation › Page de réservation des propriété › Développeur). Ils sont déjà en place
depuis le 25/11/2026 ; ces fichiers en gardent la copie :

| Fichier | Champ Beds24 |
|---|---|
| `booking-page.css` | CSS personnalisé |
| `booking-page-head-bottom.html` | Insérer dans HTML `<HEAD>` bottom (polices) |
| `booking-page-body-top.html` | Insérer dans HTML `<BODY>` top (résumé de la maison à côté du prix) |
| `booking-page-body-bottom.html` | Insérer dans HTML `<BODY>` bottom (en-tête, hauteur automatique dans le site) |

Beds24 refuse en silence un champ HTML trop long (vers 2 000 caractères) : garder ces scripts courts.

Dans Propriétés › Questions relatives à la réservation, le formulaire a été allégé : Titre, Mobile,
Adresse, Ville et Code postal ne sont plus demandés ; le téléphone est obligatoire.

## Paiement en ligne (Stripe, depuis le 25/11/2026)

- Paiements › Passerelles › Stripe : connecté, priorité 10, cartes sauvegardées Oui, capture Oui,
  affichage Embedded, titre « Paiement sécurisé par carte ».
- Propriétés › Règles de réservation : type de réservation « Confirmed with deposit collection 1 -
  via payment gateway », acompte 1 = 30 %. Si l'arrivée est à moins de 30 jours : acompte 2 = 100 %.
  Une réservation non payée est annulée.
- Paiements › Règles de paiement › 22115 « Solde J-30 (carte Stripe) » : auto, statut Confirmé,
  montant limité au solde de la réservation (jamais de double prélèvement).
- Gestion des clients › Actions automatisées › 646594 « Solde 70 % à J-30 (réservations directes) » :
  à l'arrivée −30 jours, réservations directes confirmées dont le solde est positif, crée un paiement
  de 100 % du solde dû, prélevé à 10:00 sur la carte enregistrée via la règle 22115.

Le texte du site (`payNote` et le point « Paiement sécurisé » dans `src/i18n/ui.ts`) décrit ce fonctionnement :
à changer si l'acompte ou le délai changent.
