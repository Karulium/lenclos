// Vérifie que l'éditeur Pages CMS (.pages.yml) décrit bien tous les contenus de src/data/*.json :
// une clé oubliée n'apparaîtrait pas dans l'éditeur, une liste mal déclarée serait mal enregistrée.
import { readFileSync, existsSync } from "node:fs";
import { parse } from "yaml";

const root = new URL("../", import.meta.url);
const config = parse(readFileSync(new URL(".pages.yml", root), "utf8"));
const errors = [];
const fail = (msg) => errors.push(msg);

const mediaNames = new Set((config.media ?? []).map((m) => m.name));
for (const m of config.media ?? []) {
  if (!existsSync(new URL(m.input + "/", root))) fail(`média « ${m.name} » : dossier ${m.input} introuvable`);
}
if (config.settings?.content?.merge !== true) {
  fail("settings.content.merge doit valoir true : plusieurs formulaires partagent pages.json et site.json");
}

// Fusionne les champs de tous les formulaires qui visent le même fichier.
const byFile = new Map();
for (const entry of config.content ?? []) {
  if (entry.type !== "file") continue;
  if (!byFile.has(entry.path)) byFile.set(entry.path, []);
  byFile.get(entry.path).push(...entry.fields);
}

const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);

function checkValue(value, field, where) {
  if (field.options?.media && !mediaNames.has(field.options.media)) fail(`${where} : média « ${field.options.media} » inconnu`);
  const multiple = (field.type === "image" || field.type === "file") && field.options?.multiple;
  if (field.list || multiple) {
    if (!Array.isArray(value)) return fail(`${where} : une liste est attendue`);
    value.forEach((v, i) => checkSingle(v, field, `${where}[${i}]`));
  } else {
    if (Array.isArray(value)) return fail(`${where} : liste trouvée, mais le champ n'est pas déclaré « list: true »`);
    checkSingle(value, field, where);
  }
}

function checkSingle(value, field, where) {
  if (value === null || value === undefined) return;
  switch (field.type) {
    case "object":
      if (!isPlainObject(value)) return fail(`${where} : un objet est attendu`);
      checkObject(value, field.fields, where);
      break;
    case "string": case "text": case "image": case "file": case "select":
      if (typeof value !== "string") fail(`${where} : du texte est attendu (${field.type})`);
      if (field.type === "select" && !field.options?.values?.includes(value)) fail(`${where} : « ${value} » n'est pas dans la liste de choix`);
      break;
    case "number":
      if (typeof value !== "number") fail(`${where} : un nombre est attendu`);
      break;
    case "boolean":
      if (typeof value !== "boolean") fail(`${where} : vrai/faux attendu`);
      break;
    default:
      fail(`${where} : type de champ inconnu « ${field.type} »`);
  }
}

function checkObject(obj, fields = [], where) {
  const declared = new Map(fields.map((f) => [f.name, f]));
  for (const [key, value] of Object.entries(obj)) {
    const field = declared.get(key);
    if (!field) fail(`${where}.${key} : absent de .pages.yml (invisible dans l'éditeur)`);
    else checkValue(value, field, `${where}.${key}`);
  }
}

for (const [path, fields] of byFile) {
  const data = JSON.parse(readFileSync(new URL(path, root), "utf8"));
  checkObject(data, fields, path.replace("src/data/", ""));
}

// Chaque fichier de contenu doit avoir son formulaire.
for (const f of ["site", "pages", "maison", "autour", "fruits", "faq", "moments"]) {
  if (!byFile.has(`src/data/${f}.json`)) fail(`src/data/${f}.json n'a pas de formulaire dans .pages.yml`);
}

if (errors.length) {
  console.error(`✗ Éditeur Pages CMS : ${errors.length} problème(s)\n  - ` + errors.join("\n  - "));
  process.exit(1);
}
console.log(`✓ Éditeur Pages CMS : ${byFile.size} fichiers de contenu entièrement décrits dans .pages.yml`);
