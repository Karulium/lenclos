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

Quand le paiement Stripe sera branché dans Beds24, changer la phrase `payNote` dans `src/i18n/ui.ts`
(« Aucun paiement n'est demandé en ligne… ») par une phrase sur le paiement sécurisé par carte.
