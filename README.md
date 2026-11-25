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

**Sans code** : textes et photos se modifient dans [Pages CMS](https://app.pagescms.org), voir le mode d'emploi [docs/modifier-le-site.md](docs/modifier-le-site.md). Les formulaires sont décrits dans `.pages.yml` ; `npm test` vérifie qu'ils couvrent toutes les clés de `src/data/`.

## Photos

- Photos principales : liste `home.photos` de `pages.json` (5 photos, la première = la vue depuis la galerie, format paysage, environ 1600 px de large).
- Fruits : champ `image` de chaque fruit dans `fruits.json`, sinon `public/img/fruits/<slug>.jpg` (par exemple `mangues.jpg`).

Tant qu'une photo manque, le site affiche « Photo à venir ».

## Carte interactive

Créer une carte sur [Google My Maps](https://www.google.com/mymaps), la rendre publique, puis copier son identifiant (la partie `mid=…` du lien de partage) dans `myMapsId` de `site.json`. Les points se modifient ensuite directement dans Google.

## Mise en ligne (Cloudflare Pages, gratuit)

1. Cloudflare > Workers & Pages > Créer > importer le dépôt GitHub `lenclos`.
2. Commande de build : `npm run build` · Commande de déploiement : `npx wrangler deploy` (la config est dans `wrangler.jsonc`).
3. Ajouter le domaine personnalisé, puis mettre la même adresse dans `site` de `astro.config.mjs` et dans `public/robots.txt`.

Chaque modification sur `main` met le site à jour automatiquement. Chaque autre branche et chaque pull request obtient sa propre adresse d'aperçu, affichée dans Cloudflare (Workers & Pages > lenclos) et sur la pull request.

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm test         # construit le site et vérifie pages, liens et contenus
```

Node 22.23.4 ou plus récent (voir `.node-version`).
