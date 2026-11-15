# L'Enclos de Vieux-Habitants — site de réservation directe

Site de la maison L'Enclos de Vieux-Habitants (Guadeloupe), en français et en anglais, avec réservation directe via Beds24.

## Pages

| Français | English |
|---|---|
| `/` accueil | `/en/` |
| `/jardin/` fruits du jardin | `/en/garden/` |
| `/histoire/` histoire du domaine | `/en/history/` |

## Modifier le contenu

Tout le contenu est dans `src/data/`, séparé du design :

| Fichier | Contenu |
|---|---|
| `site.json` | adresse, WhatsApp, e-mail, prix « à partir de », n° d'enregistrement, Karulium, identifiant Beds24, carte Google |
| `maison.json` | chambres et équipements |
| `autour.json` | onglets « Autour » et leurs adresses |
| `fruits.json` | fruits du jardin, saisons (mois 1 à 12), couleurs |
| `faq.json` | questions fréquentes |
| `pages.json` | textes des pages (titres, paragraphes) |

Un texte écrit entre `[[doubles crochets]]` s'affiche surligné en orange : c'est un rappel de ce qui reste à compléter. `npm test` en donne la liste.

**Sans code** : connecter le dépôt sur [Pages CMS](https://app.pagescms.org) avec son compte GitHub. Les formulaires sont décrits dans `.pages.yml`.

## Photos

- Photos principales : `public/img/photo1.jpg` à `photo5.jpg` (photo1 = la vue depuis la galerie, format paysage, environ 1600 px de large).
- Fruits : `public/img/fruits/<slug>.jpg`, par exemple `mangues.jpg` (le `slug` de chaque fruit est dans `fruits.json`).

Tant qu'une photo manque, le site affiche « Photo à venir ».

## Carte interactive

Créer une carte sur [Google My Maps](https://www.google.com/mymaps), la rendre publique, puis copier son identifiant (la partie `mid=…` du lien de partage) dans `myMapsId` de `site.json`. Les points se modifient ensuite directement dans Google.

## Mise en ligne (Cloudflare Pages, gratuit)

1. Cloudflare > Workers & Pages > Créer > Pages > Connecter à Git > choisir ce dépôt.
2. Commande de build : `npm run build` · Dossier de sortie : `dist`.
3. Ajouter le domaine personnalisé, puis mettre la même adresse dans `site` de `astro.config.mjs` et dans `public/robots.txt`.

Chaque modification sur `main` met le site à jour automatiquement.

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # construit le site et vérifie pages, liens et contenus
```

Node 22.23.4 ou plus récent (voir `.node-version`).
