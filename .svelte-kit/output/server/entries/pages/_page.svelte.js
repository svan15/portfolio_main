import { a as sanitize_props, b as spread_props, c as slot, d as attr, f as ensure_array_like, e as escape_html, h as attr_class, i as head } from "../../chunks/root.js";
import "clsx";
import { I as Icon, r as resolve } from "../../chunks/Icon.js";
import { A as Arrow_up_right } from "../../chunks/arrow-up-right.js";
import { p as projects } from "../../chunks/projects.js";
import { A as Arrow_left } from "../../chunks/arrow-left.js";
function Arrow_down_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m7 7 10 10" }],
    ["path", { "d": "M17 7v10H7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-down-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowDownRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNyA3IDEwIDEwIiAvPgogIDxwYXRoIGQ9Ik0xNyA3djEwSDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-down-right
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
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function Code_xml($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m18 16 4-4-4-4" }],
    ["path", { "d": "m6 8-4 4 4 4" }],
    ["path", { "d": "m14.5 4-5 16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "code-xml" },
    $$sanitized_props,
    {
      /**
       * @component @name CodeXml
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTggMTYgNC00LTQtNCIgLz4KICA8cGF0aCBkPSJtNiA4LTQgNCA0IDQiIC8+CiAgPHBhdGggZD0ibTE0LjUgNC01IDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/code-xml
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
function Github($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "github" },
    $$sanitized_props,
    {
      /**
       * @component @name Github
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
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
function Linkedin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    ["rect", { "width": "4", "height": "12", "x": "2", "y": "9" }],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "linkedin" },
    $$sanitized_props,
    {
      /**
       * @component @name Linkedin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgOGE2IDYgMCAwIDEgNiA2djdoLTR2LTdhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjdoLTR2LTdhNiA2IDAgMCAxIDYtNnoiIC8+CiAgPHJlY3Qgd2lkdGg9IjQiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjkiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/linkedin
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=linkedin instead. This icon will be removed in v1.0
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
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      { "width": "20", "height": "16", "x": "2", "y": "4", "rx": "2" }
    ],
    ["path", { "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Im0yMiA3LTguOTcgNS43YTEuOTQgMS45NCAwIDAgMS0yLjA2IDBMMiA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/mail
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
function Move_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M13 5H19V11" }],
    ["path", { "d": "M19 5L5 19" }]
  ];
  Icon($$renderer, spread_props([
    { name: "move-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name MoveUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMgNUgxOVYxMSIgLz4KICA8cGF0aCBkPSJNMTkgNUw1IDE5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/move-up-right
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
function FloatingBackground($$renderer) {
  $$renderer.push(`<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden svelte-ubeb0e" aria-hidden="true"><div class="float-shape absolute left-[6%] top-[15%] h-20 w-20 rounded-full border border-[#9da884]/25 svelte-ubeb0e"></div> <div class="float-shape float-delay absolute right-[42%] top-[18%] h-10 w-10 rotate-45 border border-[#9da884]/30 svelte-ubeb0e"></div> <div class="float-shape float-slow absolute bottom-[12%] left-[45%] h-24 w-24 rounded-full bg-[#d6f36a]/10 blur-xl svelte-ubeb0e"></div> <div class="absolute right-[4%] top-[30%] h-64 w-64 rounded-full bg-[#d9dfcb]/20 blur-3xl svelte-ubeb0e"></div></div>`);
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section id="home" class="relative isolate mx-auto grid max-w-7xl items-center gap-10 px-6 pb-22 pt-16 md:grid-cols-[1.15fr_.85fr] md:gap-16 md:px-10 md:pb-30 md:pt-24">`);
    FloatingBackground($$renderer2);
    $$renderer2.push(`<!----> <div class="relative z-10 reveal"><div class="mb-9 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.22em]"><span class="h-2 w-2 rounded-full bg-[#8ba348]"></span> Available for
      opportunities <span class="ml-3 h-px w-12 bg-neutral-400"></span></div> <p class="mb-3 text-sm font-medium text-neutral-500">Hello, I'm Van —</p> <h1 class="text-[clamp(3.8rem,9vw,8rem)] leading-[.89] font-semibold tracking-[-.09em]">Building<br/><span class="serif font-normal italic tracking-[-.09em]">what's next.</span></h1> <p class="mt-8 max-w-md text-base leading-8 text-neutral-600">Full-Stack Developer with a background in Information Technology, building
      practical digital solutions through thoughtful design and development.</p> <div class="mt-9 flex flex-wrap gap-3"><a${attr("href", resolve("/#projects"))} class="inline-flex items-center gap-3 rounded-full bg-[#1e1e1d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42423c]">Explore my work `);
    Arrow_up_right($$renderer2, { size: 17 });
    $$renderer2.push(`<!----></a><a href="#contact" class="inline-flex items-center gap-2 rounded-full border border-neutral-400 px-6 py-3.5 text-sm font-semibold transition hover:bg-white">Get in touch `);
    Arrow_right($$renderer2, { size: 16 });
    $$renderer2.push(`<!----></a></div> <div class="mt-14 flex items-center gap-4 text-xs text-neutral-500"><span class="h-px w-12 bg-neutral-400"></span> SCROLL TO EXPLORE `);
    Arrow_down_right($$renderer2, { size: 15 });
    $$renderer2.push(`<!----></div></div> <div class="relative z-10 reveal" style="animation-delay:.12s"><div class="absolute -right-3 -top-3 h-25 w-25 rounded-full border border-[#b6b8a6] md:-right-7 md:-top-7"></div> <div class="relative aspect-[4/4.5] overflow-hidden rounded-[12px] bg-[#dddcd5]"><img${attr("src", resolve("/images/profile/photo.jpg"))} alt="My Photo" class="h-full w-full object-cover"/></div> <div class="absolute -bottom-5 -right-3 rounded-md bg-[#d6f36a] px-5 py-4 text-xs font-bold shadow-sm md:-right-5">IDEA × CODE<br/><span class="text-neutral-600"></span></div></div></section>`);
  });
}
function About($$renderer) {
  const phrases = [
    "Curiosity driven",
    "Thoughtfully built",
    "Always learning",
    "Based in the Philippines"
  ];
  $$renderer.push(`<div class="overflow-hidden border-y border-neutral-800 bg-[#1e1e1d] text-[#f6f5f1]"><div class="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-10 py-5 md:flex"><!--[-->`);
  const each_array = ensure_array_like(phrases);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let phrase = each_array[$$index];
    $$renderer.push(`<span class="text-[10px] font-semibold uppercase tracking-[.19em]">${escape_html(phrase)}</span>`);
  }
  $$renderer.push(`<!--]--></div> <div class="overflow-hidden py-4 md:hidden"><div class="marquee-track flex w-max items-center svelte-7hpc9t"><!--[-->`);
  const each_array_1 = ensure_array_like([0, 1]);
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let copy = each_array_1[$$index_2];
    $$renderer.push(`<div class="flex shrink-0 items-center gap-7 pr-7"${attr("aria-hidden", copy === 1 ? "true" : void 0)}><!--[-->`);
    const each_array_2 = ensure_array_like(phrases);
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let phrase = each_array_2[$$index_1];
      $$renderer.push(`<span class="shrink-0 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.16em]">${escape_html(phrase)}</span> <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6f36a]"></span>`);
    }
    $$renderer.push(`<!--]--></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <section id="about" class="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[.4fr_.6fr] md:px-10 md:py-28"><div><span class="text-xs font-bold tracking-[.15em] text-neutral-500">01 / ABOUT</span> <h2 class="mt-5 text-5xl font-semibold tracking-[-.07em] md:text-6xl">More than<br/> <span class="serif italic font-normal">just code.</span></h2></div> <div class="md:pt-12"><p class="max-w-2xl text-xl leading-relaxed tracking-[-.02em] md:text-2xl">I enjoy transforming ideas into experiences that feel
      simple, intentional, and useful.</p> <p class="mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">I'm an Information Technology graduate from the University
      of Saint Louis Tuguegarao, with hands-on experience in
      full-stack development, technical freelancing, and
      enterprise application support.

      My experience includes developing web applications,
      integrating APIs, working with databases, troubleshooting
      software issues, and collaborating with teams to deliver
      practical solutions.</p></div></section>`);
}
function ProjectCarousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section id="projects" class="bg-[#ebeae4] px-6 py-24 md:px-10 md:py-30"><div class="mx-auto max-w-7xl"><div class="mb-10 flex flex-wrap items-end justify-between gap-5"><div><span class="text-xs font-bold tracking-[.15em] text-neutral-500">02 / SELECTED WORK</span> <h2 class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-7xl">Things I've <span class="serif italic font-normal">made.</span></h2></div> <div class="flex gap-2"><button aria-label="Previous project" class="rounded-full border border-neutral-400 p-3 transition hover:bg-white">`);
    Arrow_left($$renderer2, { size: 19 });
    $$renderer2.push(`<!----></button><button aria-label="Next project" class="rounded-full border border-neutral-400 p-3 transition hover:bg-white">`);
    Arrow_right($$renderer2, { size: 19 });
    $$renderer2.push(`<!----></button></div></div> <div class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      $$renderer2.push(`<article class="group w-[87%] shrink-0 snap-start overflow-hidden rounded-xl border border-[#d9d8d1] bg-[#f6f5f1] sm:w-[65%] lg:w-[calc(50%-10px)]"><a${attr("href", resolve(`/projects/${project.slug}`))} class="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#e8e7e1]"><img${attr("src", resolve(project.image))}${attr("alt", "Preview of " + project.name)} loading="lazy" class="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"/></a> <div class="p-6 md:p-8"><div class="flex justify-between gap-2 text-[10px] font-bold tracking-[.13em] text-neutral-500"><span>${escape_html(project.type)}</span><span>${escape_html(project.n)}</span></div> <h3 class="mt-6 text-3xl font-semibold tracking-[-.05em]">${escape_html(project.name)}</h3> <p class="mt-3 min-h-14 text-sm leading-7 text-neutral-600">${escape_html(project.desc)}</p> <div class="mt-5 flex flex-wrap gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(project.tags);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$renderer2.push(`<span class="rounded-full border border-[#d7d5cb] px-3 py-1.5 text-[11px]">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div> <a${attr("href", resolve(`/projects/${project.slug}`))} class="mt-7 inline-flex items-center gap-2 text-sm font-bold hover:underline">Explore project `);
      Arrow_up_right($$renderer2, { size: 16 });
      $$renderer2.push(`<!----></a></div></article>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-7 flex justify-between items-center gap-4"><p class="text-xs text-neutral-500">Swipe to explore selected work</p> <a${attr("href", resolve("/projects"))} class="inline-flex items-center gap-2 rounded-full bg-[#1e1e1d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#42423c]">View all projects `);
    Arrow_up_right($$renderer2, { size: 17 });
    $$renderer2.push(`<!----></a></div></div></section>`);
  });
}
function Skills($$renderer) {
  const skills = [
    {
      title: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Svelte",
        "React Native",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      title: "Backend",
      items: [
        "Supabase",
        "Java",
        "C#",
        "Node.js",
        "PHP",
        "Firebase",
        "SQL",
        "REST APIs"
      ]
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub", "VS Code", "Responsive Design"]
    },
    {
      title: "Design & Prototyping",
      items: ["Figma", "Webflow", "WordPress", "Canva"]
    },
    {
      title: "Other Technical Skills",
      items: [
        "Agile / Scrum",
        "SDLC",
        "Debugging",
        "Troubleshooting",
        "Cisco Networking"
      ]
    },
    {
      title: "Exploring",
      items: ["Cloud Technologies", "AI Integration"]
    }
  ];
  let activeIndex = 0;
  $$renderer.push(`<section id="skills" class="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24"><span class="text-xs font-bold tracking-[.15em] text-neutral-500">03 / MY TOOLKIT</span> <h2 class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-7xl">Tools of the <span class="serif italic font-normal">trade.</span></h2> <div class="mt-10 overflow-hidden rounded-2xl border border-neutral-200 md:mt-12"><div class="grid md:grid-cols-[260px_1fr]"><div class="border-b border-neutral-200 p-3 md:border-r md:border-b-0"><div class="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible"><!--[-->`);
  const each_array = ensure_array_like(skills);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let skill = each_array[i];
    $$renderer.push(`<button type="button"${attr("aria-pressed", activeIndex === i)}${attr_class(
      `flex shrink-0 items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 md:w-full ${activeIndex === i ? "bg-[#1e1e1d] text-white" : "text-neutral-500 hover:bg-neutral-100 hover:text-black"}`,
      "svelte-1f1pl16"
    )}><span>${escape_html(skill.title)}</span> `);
    if (activeIndex === i) {
      $$renderer.push("<!--[0-->");
      Arrow_up_right($$renderer, { size: 15, class: "hidden md:block" });
    } else {
      $$renderer.push("<!--[-1-->");
    }
    $$renderer.push(`<!--]--></button>`);
  }
  $$renderer.push(`<!--]--></div></div> <div class="min-h-52 p-6 md:p-10"><!---->`);
  {
    $$renderer.push(`<div class="animate-skills-in svelte-1f1pl16"><div class="mb-7 flex items-center justify-between"><div class="flex items-center gap-3">`);
    Code_xml($$renderer, { size: 22, strokeWidth: 1.5 });
    $$renderer.push(`<!----> <h3 class="text-xl font-semibold tracking-tight md:text-2xl">${escape_html(skills[activeIndex].title)}</h3></div> <span class="text-xs text-neutral-400">0${escape_html(activeIndex + 1)} / 0${escape_html(skills.length)}</span></div> <div class="flex flex-wrap gap-2.5"><!--[-->`);
    const each_array_1 = ensure_array_like(skills[activeIndex].items);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer.push(`<span class="rounded-lg border border-neutral-200 bg-white/60 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400">${escape_html(item)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!----></div></div></div></section>`);
}
function Experience($$renderer) {
  const experiences = [
    {
      type: "PROFESSIONAL EXPERIENCE",
      date: "Jan 2026 — Jun 2026",
      role: "SW/App/Cloud Tech Support",
      organization: "Accenture",
      description: "Investigated software and cloud application issues, validated fixes, and documented technical resolutions."
    },
    {
      type: "FREELANCE",
      date: "Jun 2025 — Present",
      role: "Technical Freelancer",
      organization: "Independent",
      description: "Developed web applications, integrated APIs, and worked with databases to deliver client solutions."
    },
    {
      type: "INTERNSHIP",
      date: "Feb 2025 — Jun 2025",
      role: "Full-Stack Developer Intern",
      organization: "CHED Region II",
      description: "Helped develop internal systems, improve workflows, and support testing and automation."
    },
    {
      type: "EDUCATION",
      date: "Aug 2021 — Jun 2025",
      role: "BS Information Technology",
      organization: "University of Saint Louis Tuguegarao",
      description: "Bachelor's degree in Information Technology."
    }
  ];
  $$renderer.push(`<section id="experience" class="border-y hairline bg-[#efeee8] px-6 py-20 md:px-10 md:py-24"><div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16"><div><span class="text-xs font-bold tracking-[.15em] text-neutral-500">04 / JOURNEY</span> <h2 class="mt-4 text-5xl font-semibold tracking-[-.07em] md:text-6xl">Where I've <span class="serif italic font-normal">been.</span></h2> <p class="mt-5 max-w-xs text-sm leading-7 text-neutral-500">A look at my experience, education, and the journey
        that shaped my development skills.</p></div> <div class="relative border-l border-neutral-300 pl-6 md:pl-9"><!--[-->`);
  const each_array = ensure_array_like(experiences);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$renderer.push(`<article class="relative pb-9 last:pb-0"><span class="absolute -left-[30px] top-1.5 h-3 w-3 rounded-full border-[3px] border-[#efeee8] bg-[#8a9c4b] ring-1 ring-[#8a9c4b] md:-left-[42px]"></span> <div class="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1"><span class="text-[10px] font-bold uppercase tracking-[.12em] text-neutral-500">${escape_html(item.type)}</span> <span class="text-xs text-neutral-400">${escape_html(item.date)}</span></div> <h3 class="text-lg font-semibold tracking-[-.03em] md:text-xl">${escape_html(item.role)}</h3> <p class="mt-1 text-sm font-medium text-neutral-700">${escape_html(item.organization)}</p> <p class="mt-3 max-w-lg text-sm leading-6 text-neutral-500">${escape_html(item.description)}</p></article>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function Contact($$renderer) {
  $$renderer.push(`<section id="contact" class="mx-auto max-w-7xl px-6 py-25 md:px-10 md:py-34"><span class="text-xs font-bold tracking-[.15em] text-neutral-500">05 / CONTACT</span> <div class="mt-5"><h2 class="text-[clamp(3rem,10vw,9rem)] leading-[.94] font-semibold tracking-[-.09em]">Have an idea?<br/> <span class="inline-flex items-center gap-3 md:gap-6"><span class="serif italic font-normal">Let's talk.</span> <a href="mailto:bunagan.van@gmail.com" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d6f36a] transition-transform duration-300 hover:rotate-45 hover:scale-105 md:h-24 md:w-24" aria-label="Send me an email">`);
  Move_up_right($$renderer, { size: 22, class: "md:hidden" });
  $$renderer.push(`<!----> `);
  Move_up_right($$renderer, { size: 34, class: "hidden md:block" });
  $$renderer.push(`<!----></a></span></h2></div> <p class="mt-7 max-w-lg text-neutral-600">I'm open to interesting projects, learning opportunities, and conversations
    about technology.</p> <div class="mt-12 flex flex-wrap gap-5 text-sm font-semibold"><a class="flex items-center gap-2 hover:underline" href="https://github.com/svan15" target="_blank" rel="noreferrer">`);
  Github($$renderer, { size: 18 });
  $$renderer.push(`<!----> GitHub</a><a class="flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/stacy-mae-bunagan" target="_blank" rel="noreferrer">`);
  Linkedin($$renderer, { size: 18 });
  $$renderer.push(`<!----> LinkedIn</a><a class="flex items-center gap-2 hover:underline" href="mailto:bunagan.van@gmail.com">`);
  Mail($$renderer, { size: 18 });
  $$renderer.push(`<!----> Email</a></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Van — Developer Portfolio</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Personal developer portfolio showcasing projects, skills, and experience."/>`);
  });
  Hero($$renderer);
  $$renderer.push(`<!---->`);
  About($$renderer);
  $$renderer.push(`<!---->`);
  ProjectCarousel($$renderer);
  $$renderer.push(`<!---->`);
  Skills($$renderer);
  $$renderer.push(`<!---->`);
  Experience($$renderer);
  $$renderer.push(`<!---->`);
  Contact($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
