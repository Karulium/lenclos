// Les textes à compléter sont écrits entre doubles crochets dans les fichiers de contenu,
// par exemple « Horaires [[à préciser]] ». Ils s'affichent surlignés en orange sur le site.
const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function rich(s: string | undefined | null): string {
  if (!s) return "";
  return escape(s).replace(/\[\[(.+?)\]\]/g, '<mark class="todo">$1</mark>');
}

export function plain(s: string | undefined | null): string {
  return (s ?? "").replace(/\[\[(.+?)\]\]/g, "$1");
}
