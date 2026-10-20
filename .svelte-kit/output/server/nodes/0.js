import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D_m5yj0t.js","_app/immutable/chunks/DgK_E3yP.js","_app/immutable/chunks/CTpQ-7cu.js","_app/immutable/chunks/CJhnDUdm.js","_app/immutable/chunks/_shepvVY.js","_app/immutable/chunks/XSKVqT5r.js","_app/immutable/chunks/B4GK76TG.js","_app/immutable/chunks/DEmapEf2.js","_app/immutable/chunks/Ceq2rHYq.js","_app/immutable/chunks/D424SJjk.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/DuYro1aa.js"];
export const stylesheets = ["_app/immutable/assets/0.4zWQVyPj.css"];
export const fonts = [];
