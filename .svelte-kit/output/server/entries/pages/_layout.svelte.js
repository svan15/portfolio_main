import "clsx";
import { a as sanitize_props, b as spread_props, c as slot, d as attr, f as ensure_array_like, e as escape_html } from "../../chunks/root.js";
import "../../chunks/state.svelte.js";
import "@sveltejs/kit/internal";
import "../../chunks/url.js";
import "../../chunks/utils2.js";
import { I as Icon, r as resolve } from "../../chunks/Icon.js";
import "../../chunks/exports.js";
import { A as Arrow_up_right } from "../../chunks/arrow-up-right.js";
function Menu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["line", { "x1": "4", "x2": "20", "y1": "12", "y2": "12" }],
    ["line", { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }],
    ["line", { "x1": "4", "x2": "20", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iNiIgeTI9IjYiIC8+CiAgPGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/menu
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
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let menuOpen = false;
    const links = [
      { name: "About", href: resolve("/#about") },
      { name: "Projects", href: resolve("/#projects") },
      { name: "Skills", href: resolve("/#skills") },
      { name: "Experience", href: resolve("/#experience") },
      { name: "Contact", href: resolve("/#contact") }
    ];
    $$renderer2.push(`<header class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-[#f6f5f1]/95 backdrop-blur-md"><div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:px-10"><a${attr("href", resolve("/"))} class="text-xl font-black tracking-[-.09em]">van<span class="text-[#8a9c4b]">.</span></a> <nav class="hidden items-center gap-8 md:flex"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="text-xs font-semibold text-neutral-600 transition hover:text-black">${escape_html(link.name)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav> <a${attr("href", resolve("/#contact"))} class="hidden items-center gap-2 rounded-full border border-neutral-800 px-5 py-2.5 text-xs font-bold transition hover:bg-neutral-900 hover:text-white md:flex">Let's talk `);
    Arrow_up_right($$renderer2, { size: 15 });
    $$renderer2.push(`<!----></a> <button type="button" class="flex h-10 w-10 items-center justify-center md:hidden"${attr("aria-label", "Open menu")}${attr("aria-expanded", menuOpen)} aria-controls="mobile-navigation">`);
    {
      $$renderer2.push("<!--[-1-->");
      Menu($$renderer2, { size: 24 });
    }
    $$renderer2.push(`<!--]--></button></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="border-t hairline px-6 py-7 md:px-10"><div class="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-xs text-neutral-500"><span>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Van. Built with SvelteKit.</span><a${attr("href", resolve("/"))} class="font-semibold text-neutral-800">Back to top ↑</a></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Navbar($$renderer);
  $$renderer.push(`<!----> <div class="min-h-screen pt-18">`);
  children($$renderer);
  $$renderer.push(`<!----></div> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
