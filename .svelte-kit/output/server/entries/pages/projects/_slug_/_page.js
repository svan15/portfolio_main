import { p as projects } from "../../../../chunks/projects.js";
import { error } from "@sveltejs/kit";
function load({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) error(404, "Project not found");
  return { project };
}
function entries() {
  return projects.map((p) => ({ slug: p.slug }));
}
export {
  entries,
  load
};
