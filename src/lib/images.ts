import { existsSync } from "node:fs";
import { join } from "node:path";

// Une photo n'est affichée que si le fichier existe dans public/img/.
// Sinon, le site montre un emplacement « Photo à venir ».
// Chemin pris depuis la racine du projet : import.meta.url pointe vers le code compilé pendant le build.
const publicDir = join(process.cwd(), "public");

export function hasImage(path: string): boolean {
  return existsSync(join(publicDir, path.replace(/^\//, "")));
}
