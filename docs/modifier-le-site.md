# Modifier les textes et les photos du site

L'éditeur est **Pages CMS**, un service gratuit qui affiche des formulaires à la place du code.
Chaque enregistrement met le site à jour tout seul en 1 à 2 minutes (Cloudflare reconstruit le site).
Le design ne change pas : on ne modifie que les textes et les photos.

Ce qui n'est **pas** ici : les prix, le calendrier et les réservations, qui restent dans Beds24 et PriceLabs.

## Se connecter (la première fois)

1. Aller sur **https://app.pagescms.org** et cliquer sur **Sign in with GitHub**. Se connecter avec son propre compte GitHub.
2. Si Pages CMS le demande, cliquer sur **Install** pour installer l'application Pages CMS sur GitHub,
   choisir **Only select repositories** puis le dépôt **lenclos**, et valider.
3. Revenir sur Pages CMS et ouvrir le dépôt **lenclos**.
4. En haut à gauche, choisir la branche **main** : c'est celle du site en ligne.

Les fois suivantes, il suffit d'ouvrir https://app.pagescms.org : la connexion est gardée.

## Modifier un texte

1. Dans le menu de gauche, choisir la page, par exemple **Page : Accueil**.
2. Ouvrir **Français** (ou **English** pour la version anglaise) et modifier le champ, par exemple **Grand titre**.
3. Cliquer sur **Save** en haut à droite.

Le site est à jour 1 à 2 minutes plus tard. Penser à modifier aussi la version anglaise.

Astuce : un texte écrit entre `[[doubles crochets]]` s'affiche surligné en orange sur le site.
C'est pratique pour noter ce qui reste à compléter.

## Changer une photo

1. Ouvrir le formulaire qui contient la photo (par exemple **Page : Accueil > Photos du haut de page**,
   **La maison > Chambres**, **Fruits du jardin**, **Page : Vos hôtes > Photo des hôtes**).
2. Cliquer sur la photo pour la remplacer : choisir une photo déjà envoyée ou cliquer sur **Upload** pour en ajouter une.
3. Remplir la description de la photo (elle sert aux malvoyants et à Google), puis **Save**.

Conseils : photos en JPG, format paysage, environ 1600 px de large (moins de 1 Mo si possible).
Les vidéos de **En images** sont des MP4 verticaux en 720p, 25 Mo maximum.

## Ce que contient chaque rubrique

| Rubrique | Contenu |
|---|---|
| Page : Accueil | photos du haut, titre, introduction, « Pourquoi réserver ici », textes des sections |
| Page : Le jardin | textes de la page et des saisons |
| Page : Histoire | chronologie, chapitres, photos, sources |
| Page : Vos hôtes | portraits, photo des hôtes, « Nous écrire » |
| Page : En images / Carte (textes) | textes et boutons de ces pages |
| La maison | chambres, photos de la maison, équipements |
| Fruits du jardin | chaque fruit : photo, nom, description, mois de récolte |
| Autour | onglets et adresses (avec la position GPS pour la carte) |
| En images | photos et vidéos plein écran, dans l'ordre |
| Questions fréquentes | questions et réponses |
| Infos générales | adresse, WhatsApp, e-mail, prix « à partir de », n° d'enregistrement, Karulium |
| Notes et avis voyageurs | notes Airbnb et Booking, extraits d'avis |

## En cas d'erreur

Chaque enregistrement est gardé dans l'historique du dépôt sur GitHub : rien n'est perdu.
Si une modification casse quelque chose, l'ancien site reste en ligne et Claude peut revenir en arrière.
