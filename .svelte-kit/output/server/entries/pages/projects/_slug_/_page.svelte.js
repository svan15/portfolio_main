import { a as sanitize_props, b as spread_props, c as slot, i as head, d as attr, e as escape_html, f as ensure_array_like, h as attr_class, j as derived } from "../../../../chunks/root.js";
import { I as Icon, r as resolve } from "../../../../chunks/Icon.js";
import { A as Arrow_left } from "../../../../chunks/arrow-left.js";
import { b as base } from "../../../../chunks/server.js";
function Chevron_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Chevron_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let project = derived(() => data.project);
    let activeImage = 0;
    let screenshots = derived(() => project().images?.length ? project().images : [project().image]);
    head("gygcht", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(project().name)} — Van</title>`);
      });
    });
    $$renderer2.push(`<article class="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24"><a${attr("href", resolve("/projects"))} class="inline-flex items-center gap-2 text-sm font-semibold">`);
    Arrow_left($$renderer2, { size: 16 });
    $$renderer2.push(`<!----> All projects</a> <p class="mt-16 text-xs font-bold tracking-[.15em] text-neutral-500">${escape_html(project().type)}</p> <h1 class="mt-4 text-6xl font-semibold tracking-[-.07em] md:text-8xl">${escape_html(project().name)}</h1> <p class="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">${escape_html(project().summary)}</p> <div class="mt-12"><div class="relative overflow-hidden rounded-xl bg-[#e8e7e1]" role="region"${attr("aria-label", `${project().name} screenshot gallery`)}><!---->`);
    {
      $$renderer2.push(`<img${attr("src", `${base}${screenshots()[activeImage]}`)}${attr("alt", `${project().name} screenshot ${activeImage + 1}`)} class="aspect-[16/10] w-full object-contain animate-gallery svelte-gygcht"/>`);
    }
    $$renderer2.push(`<!----> `);
    if (screenshots().length > 1) {
      $$renderer2.push(`<!--[0--><button type="button" aria-label="Previous screenshot" class="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white">`);
      Chevron_left($$renderer2, { size: 20 });
      $$renderer2.push(`<!----></button> <button type="button" aria-label="Next screenshot" class="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm transition hover:bg-white">`);
      Chevron_right($$renderer2, { size: 20 });
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (screenshots().length > 1) {
      $$renderer2.push(`<!--[0--><div class="mt-4 flex items-center justify-between"><span class="text-xs font-medium text-neutral-500">SCREENSHOT ${escape_html(String(activeImage + 1).padStart(2, "0"))}
          / ${escape_html(String(screenshots().length).padStart(2, "0"))}</span> <span class="text-xs text-neutral-400">Swipe or use arrows to explore</span></div> <div class="mt-5 flex gap-3 overflow-x-auto pb-2"><!--[-->`);
      const each_array = ensure_array_like(screenshots());
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let image = each_array[i];
        $$renderer2.push(`<button type="button"${attr("aria-label", `View screenshot ${i + 1}`)}${attr("aria-current", activeImage === i ? "true" : void 0)}${attr_class(
          `w-24 shrink-0 overflow-hidden rounded-lg border-2 transition md:w-30 ${activeImage === i ? "border-[#8a9c4b] opacity-100" : "border-transparent opacity-60 hover:opacity-100"}`,
          "svelte-gygcht"
        )}><img${attr("src", `${base}${image}`)} alt="" loading="lazy" class="aspect-video w-full object-cover"/></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-14 grid gap-12 md:grid-cols-2"><div><h2 class="text-2xl font-semibold">About the project</h2> <p class="mt-4 leading-8 text-neutral-600">${escape_html(project().desc)}</p></div> <div><h2 class="text-2xl font-semibold">Key features</h2> <ul class="mt-4 list-disc space-y-2 pl-5 text-neutral-600"><!--[-->`);
    const each_array_1 = ensure_array_like(project().features);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let feature = each_array_1[$$index_1];
      $$renderer2.push(`<li>${escape_html(feature)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <h3 class="mt-8 text-lg font-semibold">Tech stack</h3> <div class="mt-3 flex flex-wrap gap-2"><!--[-->`);
    const each_array_2 = ensure_array_like(project().tags);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let tag = each_array_2[$$index_2];
      $$renderer2.push(`<span class="rounded-full border border-neutral-300 px-3 py-1 text-xs">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></article>`);
  });
}
export {
  _page as default
};
