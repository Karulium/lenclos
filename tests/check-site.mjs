// Vérifications automatiques du site, lancées par `npm test` après la construction.
// Elles échouent si une page manque, si un lien interne est cassé ou si un fichier de contenu est mal rempli.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const data = (f) => JSON.parse(readFileSync(new URL(`../src/data/${f}`, import.meta.url), "utf8"));
const errors = [];
const fail = (msg) => errors.push(msg);

// 1. Pages attendues
const pages = { "/": "fr", "/jardin/": "fr", "/histoire/": "fr", "/en-images/": "fr", "/carte/": "fr", "/en/": "en", "/en/garden/": "en", "/en/history/": "en", "/en/in-pictures/": "en", "/en/map/": "en" };
const titles = new Set();
const htmlByPath = {};
for (const [path, lang] of Object.entries(pages)) {
  const file = join(dist, path, "index.html");
  if (!existsSync(file)) { fail(`Page manquante : ${path}`); continue; }
  const html = readFileSync(file, "utf8");
  htmlByPath[path] = html;
  if (!html.includes(`<html lang="${lang}"`)) fail(`${path} : langue attendue ${lang}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
  if (!title) fail(`${path} : titre manquant`);
  else if (titles.has(title)) fail(`${path} : titre en double « ${title} »`);
  else titles.add(title);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(`${path} : description trop courte ou absente`);
  if (!html.includes('rel="canonical"')) fail(`${path} : lien canonique absent`);
  for (const l of ["fr", "en", "x-default"]) if (!html.includes(`hreflang="${l}"`)) fail(`${path} : hreflang ${l} absent`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) fail(`${path} : il faut exactement un titre h1`);
  if (html.includes("[[") || html.includes("]]")) fail(`${path} : un marqueur [[...]] n'a pas été converti`);
}
if (!existsSync(join(dist, "sitemap.xml"))) fail("sitemap.xml manquant");

// 2. Liens et images internes
const listFiles = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? listFiles(p) : [p];
});
const builtFiles = new Set(listFiles(dist).map((f) => "/" + f.slice(dist.length)));
const resolves = (url) => {
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return true;
  if (builtFiles.has(clean)) return true;
  return builtFiles.has(clean.replace(/\/?$/, "/") + "index.html");
};
for (const [path, html] of Object.entries(htmlByPath)) {
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    if (url.startsWith("//")) continue;
    if (!resolves(url)) fail(`${path} : lien interne cassé ${url}`);
  }
  for (const [, target, id] of html.matchAll(/href="(\/[^"#]*)?#([\w-]+)"/g)) {
    // une ancre doit exister sur la page visée (la page elle-même si le lien commence par #)
    const page = target ? htmlByPath[target] : html;
    if (page && !page.includes(`id="${id}"`)) fail(`${path} : ancre #${id} introuvable sur ${target ?? "la page"}`);
  }
}

// 3. Fichiers de contenu
const both = (o, keys, where) => {
  for (const l of ["fr", "en"]) for (const k of keys) {
    if (typeof o?.[l]?.[k] !== "string" || !o[l][k].trim()) fail(`${where} : « ${k} » manquant en ${l}`);
  }
};
data("autour.json").tabs.forEach((tab, i) => {
  if (!tab.id || !tab.fr || !tab.en) fail(`autour.json onglet ${i + 1} : id, fr ou en manquant`);
  tab.places.forEach((p, j) => both(p, ["name", "text"], `autour.json ${tab.id} adresse ${j + 1}`));
});
data("fruits.json").fruits.forEach((f, i) => {
  const where = `fruits.json fruit ${i + 1} (${f.slug})`;
  if (!/^[a-z0-9-]+$/.test(f.slug ?? "")) fail(`${where} : nom de fichier photo invalide`);
  if (!/^#[0-9a-fA-F]{6}$/.test(f.color ?? "")) fail(`${where} : couleur invalide`);
  if (!Array.isArray(f.months) || f.months.some((m) => !Number.isInteger(m) || m < 1 || m > 12)) fail(`${where} : mois invalides (1 à 12)`);
  both(f, ["name", "text", "season"], where);
});
data("faq.json").items.forEach((f, i) => both(f, ["q", "a"], `faq.json question ${i + 1}`));
data("maison.json").amenities.forEach((a, i) => { if (!a.fr || !a.en) fail(`maison.json équipement ${i + 1} : fr ou en manquant`); });
const site = data("site.json");
if (!/^\d+$/.test(site.beds24?.propId ?? "")) fail("site.json : identifiant Beds24 invalide");

// 4. Rappel des textes encore à compléter (pas une erreur)
const todos = new Set();
for (const html of Object.values(htmlByPath)) for (const [, t] of html.matchAll(/<mark class="todo">(.*?)<\/mark>/g)) todos.add(t);
if (todos.size) console.log(`ℹ️  ${todos.size} texte(s) encore à compléter :\n  - ${[...todos].join("\n  - ")}`);

if (errors.length) {
  console.error(`\n❌ ${errors.length} problème(s) :\n  - ${errors.join("\n  - ")}`);
  process.exit(1);
}
console.log(`✅ ${Object.keys(pages).length} pages vérifiées, liens et contenus corrects.`);
