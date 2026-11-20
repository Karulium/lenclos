import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Une photo n'est affichée que si le fichier existe dans public/img/.
// Sinon, le site montre un emplacement « Photo à venir ».
const publicDir = fileURLToPath(new URL("../../public/", import.meta.url));

export function hasImage(path: string): boolean {
  return existsSync(publicDir + path.replace(/^\//, ""));
}
