import * as universal from '../entries/pages/projects/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.B-zN9cl4.js","_app/immutable/chunks/KdD7vvqh.js","_app/immutable/chunks/CTpQ-7cu.js","_app/immutable/chunks/DgK_E3yP.js","_app/immutable/chunks/XSKVqT5r.js","_app/immutable/chunks/CJhnDUdm.js","_app/immutable/chunks/B4GK76TG.js","_app/immutable/chunks/DEmapEf2.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/_shepvVY.js","_app/immutable/chunks/BTZRZy5o.js"];
export const stylesheets = ["_app/immutable/assets/4.D8pZFrFT.css"];
export const fonts = [];
